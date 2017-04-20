(function (scope) {
    var __awaiter = function (thisArg, _arguments, P, generator) {
        return new(P || (P = Promise))(function (resolve, reject) {
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
                result.done
                    ? resolve(result.value)
                    : new P(function (resolve) {
                        resolve(result.value);
                    }).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    var opCodes = {
        next: 0,
        "throw": 1,
        "return": 2,
        yield: 4,
        yieldstar: 5,
        "catch": 6,
        endfinally: 7
    };

    var __generator = function (thisArg, body) {
        var generatorState = {
            label: 0,
            sent: function () {
                if (temp[0] & 1) {
                    throw temp[1];
                }

                return temp[1];
            },
            trys: [],
            ops: []
        };

        var generatorIsExecuting;
        var yieldingIterator;
        var temp;

        return {
            next: verb(0),
            "throw": verb(1),
            "return": verb(2)
        };

        function verb(n) {
            return function (v) {
                return step([n, v]);
            };
        }

        function step(op) {
            if (generatorIsExecuting) {
                throw new TypeError("Generator is already executing.");
            }

            while (generatorState) {
                try {
                    generatorIsExecuting = true;

                    if (yieldingIterator) {
                        temp = yieldingIterator[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]
                        temp = temp.call(yieldingIterator, op[1]);

                        if (!temp.done) {
                            return temp;
                        }
                    }

                    yieldingIterator = 0;

                    if (temp) {
                        op = [0, temp.value];
                    }

                    switch(op[0]) {
                        case opCodes.next:
                        case opCodes.throw:
                            temp = op;
                            break;

                        case opCodes.yield:
                            generatorState.label++;
                            return {
                                value: op[1],
                                done: false
                            };

                        case opCodes.yieldstar:
                            generatorState.label++;
                            yieldingIterator = op[1];
                            op = [0];
                            continue;

                        case opCodes.endfinally:
                            op = generatorState.ops.pop();
                            generatorState.trys.pop();
                            continue;

                        default:
                            if (!(temp = generatorState.trys, temp = temp.length > 0 && temp[temp.length - 1]) && (op[0] === opCodes.catch || op[0] === opCodes.return)) {
                                generatorState = 0;
                                continue;
                            }

                            if (op[0] === opCodes.break && (!temp || (op[1] > temp[0] && op[1] < temp[3]))) {
                                generatorState.label = op[1];
                                break;
                            }

                            if (op[0] === opCodes.catch && generatorState.label < temp[1]) {
                                generatorState.label = temp[1];
                                temp = op;
                                break;
                            }

                            if (temp && generatorState.label < temp[2]) {
                                generatorState.label = temp[2];
                                generatorState.ops.push(op);
                                break;
                            }

                            if (temp[2]) generatorState.ops.pop();
                            generatorState.trys.pop();
                            continue;
                    }

                    op = body.call(thisArg, generatorState);
                }
                catch (error) {
                    op = [opCodes.catch, error];
                    yieldingIterator = 0;
                }
                finally {
                    generatorIsExecuting = temp = 0;
                }
            }

            if (op[0] & 5) {
                throw op[1];
            }

            return {
                value: op[0] ? op[1] : void 0,
                done: true
            };
        }
    };

    scope.__awaiter = __awaiter;
    scope.__generator = __generator;
})(window);