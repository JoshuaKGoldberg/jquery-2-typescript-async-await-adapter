(function (scope) {
    var oldDeferred = $.Deferred;

    function wrapPromiseAndThenOfDeferred(deferred) {
        var oldDeferredPromise = deferred.promise;

        function addToCatches(catcher) {
            if (deferred.__catchers) {
                deferred.__catchers.push(catcher);
            } else {
                deferred.__catchers = [catcher];
            }
        }

        function wrapThenOfPromise(promise) {
            var oldDeferredThen = promise.then;

            function wrapCatchOfResolvedThenable(thenable) {
                var oldCatch = thenable.catch;

                thenable.catch = function (catcher) {
                    addToCatches(catcher);
                    return oldCatch.apply(thenable, arguments);
                };
            }

            function wrapCatchOfRejectedThenable(thenable, rejectedValue) {
                thenable.catch = function (callback) {
                    callback(rejectedValue);
                    return thenable;
                };
            }

            promise.then = function () {
                var thenable;
                try {
                    thenable = oldDeferredThen.apply(this, arguments);
                    wrapCatchOfResolvedThenable(thenable);
                } catch (error) {
                    thenable = $.Deferred().resolve().promise();
                    wrapCatchOfRejectedThenable(thenable, error);
                }

                thenable.pipe(function (newValue) {
                    receivedValue = newValue;
                    thenable.__setResolvedValue(newValue);
                });

                return thenable;
            };

            promise.catch = function (catcher) {
                addToCatches(catcher);
                return promise.fail.apply(this, arguments);
            };
            promise.__getResolvedValue = function () {
                return deferred.__resolvedValue;
            };
            promise.__setResolvedValue = function (newValue) {
                deferred.__resolvedValue = newValue;
            };
        }

        deferred.promise = deferred.then = function () {
            var promise = oldDeferredPromise.apply(this, arguments);

            wrapThenOfPromise(promise);

            return promise;
        };
    }

    $.Deferred = function () {
        var deferred = oldDeferred.apply(this, arguments);
        var oldResolve = deferred.resolve;

        wrapPromiseAndThenOfDeferred(deferred);

        deferred.resolve = function (resolvedValue) {
            deferred.__resolvedValue = resolvedValue;
            var resolvedDeferred;
            try {
                resolvedDeferred = oldResolve.apply(this, arguments);
            } catch (error) {
                console.error(error);
                if (deferred.__catchers) {
                    deferred.__catchers.forEach(function (catcher) {
                        setTimeout(function () {
                            catcher(error);
                        });
                    });
                }
                resolvedDeferred = $.Deferred().resolve();
            }

            wrapPromiseAndThenOfDeferred(resolvedDeferred);

            return resolvedDeferred;
        };

        return deferred;
    };

    var jQueryPromiseFactory = function (callback) {
        var deferred = $.Deferred();
        var promise = deferred.promise();

        try {
            callback(deferred.resolve, deferred.reject);
        } catch (error) {
            deferred.reject(error);
        }

        return promise;
    };

    var jQueryAwaiter = function (thisArg, args, _ignoredPromiseConstructor, generator) {
        return jQueryPromiseFactory(function (resolve, reject) {
            var fulfilled = function (value) {
                try {
                    step(generator.next(value));
                }
                catch (e) {
                    reject(e);
                }
            };

            var rejected = function (error) {
                try {
                    step(generator["throw"](error));
                }
                catch (e) {
                    reject(e);
                }
            };

            function step(result) {
                if (result.done) {
                    resolve(result.value);
                    return;
                }

                var onComplete = function () {
                    jQueryPromiseFactory(function (resolve) {
                        resolve(result.value);
                    }).then(fulfilled, rejected);
                };

                result.value.then(onComplete).catch(onComplete);
                // onComplete();
            }

            step((generator = generator.apply(thisArg, args)).next());
        });
    };

    var jQueryGenerator = function (thisArg, body) {
        var generatorState = {
            label: 0,
            sent: function () {
                var promise = t[1];
                if (t[0] & 1) {
                    throw promise;
                }

                // return t[1];
                return promise.__getResolvedValue();
            },
            trys: [],
            ops: []
        };
        var f, y, t;

        function verb(n) {
            return function (v) {
                return step([n, v]);
            };
        }

        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (generatorState) try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: generatorState.label++; return { value: op[1], done: false };
                    case 5: generatorState.label++; y = op[1]; op = [0]; continue;
                    case 7: op = generatorState.ops.pop(); generatorState.trys.pop(); continue;
                    default:
                        if (!(t = generatorState.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { generatorState = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { generatorState.label = op[1]; break; }
                        if (op[0] === 6 && generatorState.label < t[1]) { generatorState.label = t[1]; t = op; break; }
                        if (t && generatorState.label < t[2]) { generatorState.label = t[2]; generatorState.ops.push(op); break; }
                        if (t[2]) generatorState.ops.pop();
                        generatorState.trys.pop(); continue;
                }
                op = body.call(thisArg, generatorState);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }

            if (op[0] & 5) {
                throw op[1];
             }

             return {
                 value: op[0]
                    ? op[1]
                    : void 0,
                 done: true
            };
        }

        return { 
            next: verb(0),
            "throw": verb(1),
            "return": verb(2)
        };
    };

    scope.__awaiter = jQueryAwaiter;
    scope.__generator = jQueryGenerator;
})(window);
