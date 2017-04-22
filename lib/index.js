(function (scope) {
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

    var __awaiter = function (thisArg, _arguments, P, generator) {
        return jQueryPromiseFactory(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch(e) {
                    reject(e);
                }
            }

            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch(e) {
                    reject(e);
                }
            }

            function step(result) {
                if (!result.value) {
                    resolve(result.value);
                    return;
                }

                // result.value should be a jQueryPromise instead of the actual value
                result.value
                    .then(function (resolvedValue) {
                        fulfilled(resolvedValue);
                    })
                    .fail(function (rejectedError) {
                        rejected(rejectedError);
                    });
            }

            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    scope.__awaiter = __awaiter;
})(window);
