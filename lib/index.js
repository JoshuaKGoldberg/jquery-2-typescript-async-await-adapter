(function (scope) {
    var oldDeferred = $.Deferred;

    function wrapPromiseAndThenOfDeferred(deferred) {
        var oldDeferredPromise = deferred.promise;

        function wrapThenOfPromise(promise) {
            var oldDeferredThen = promise.then;

            promise.then = function () {
                var thenable;
                try {
                    thenable = oldDeferredThen.apply(this, arguments);
                } catch (error) {
                    thenable = $.Deferred().reject(error).promise();
                }

                thenable.pipe(function (newValue) {
                    receivedValue = newValue;
                    thenable.__setValue(newValue);
                });

                return thenable;
            };

            promise.catch = promise.fail;
            promise.__getValue = function () {
                return deferred.__value;
            };
            promise.__setValue = function (newValue) {
                deferred.__value = newValue;
            }
        }

        deferred.promise = deferred.then = function () {
            var promise = oldDeferredPromise.apply(this, arguments);

            wrapThenOfPromise(promise);

            return promise;
        }
    }

    $.Deferred = function () {
        var deferred = oldDeferred.apply(this, arguments);
        var oldResolve = deferred.resolve;
        var value;

        deferred.resolve = function (resolvedValue) {
            deferred.__value = resolvedValue;
            var resolvedDeferred;
            try {
                resolvedDeferred = oldResolve.apply(this, arguments);
            } catch (error) {
                resolvedDeferred = $.Deferred().reject(error);
            }

            wrapPromiseAndThenOfDeferred(resolvedDeferred);

            return resolvedDeferred;
        };

        wrapPromiseAndThenOfDeferred(deferred);

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
                result.done
                    ? resolve(result.value)
                    : jQueryPromiseFactory(function (resolve) {
                        resolve(result.value);
                    }).then(fulfilled, rejected);
            }

            step((generator = generator.apply(thisArg, args)).next());
        });
    };

    var jQueryGenerator = function (thisArg, body) {
        function verb(n) {
            return function (v) {
                return step([n, v]);
            };
        }

        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
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

        var _ = {
            label: 0,
            sent: function () {
                var promise = t[1];
                if (t[0] & 1) {
                    throw promise;
                }

                // return t[1];
                return promise.__getValue();
            },
            trys: [],
            ops: []
        };
        var f, y, t;

        return { 
            next: verb(0),
            "throw": verb(1),
            "return": verb(2)
        };
    };

    scope.__awaiter = jQueryAwaiter;
    scope.__generator = jQueryGenerator;
})(window);
