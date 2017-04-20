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

    var __generator = function (thisArg, body) {
        var generatorState = {
            label: 0,
            sent: function () {
                if (t[0] & 1) {
                    throw t[1];
                }

                return t[1];
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

        function verb(n) {
            return function (v) {
                return step([n, v]);
            };
        }

        function step(op) {
            if (f) {
                throw new TypeError("Generator is already executing.");
            }

            while (generatorState) {
                try {
                    if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) {
                        return t;
                    }

                    if (y = 0, t) {
                        op = [0, t.value];
                    }

                    switch(op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;

                        case 4:
                            generatorState.label++;
                            return {
                                value: op[1],
                                done: false
                            };

                        case 5:
                            generatorState.label++;
                            y = op[1];
                            op = [0];
                            continue;

                        case 7:
                            op = generatorState.ops.pop();
                            generatorState.trys.pop();
                            continue;

                        default:
                            if (!(t = generatorState.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                generatorState = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                generatorState.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && generatorState.label < t[1]) {
                                generatorState.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && generatorState.label < t[2]) {
                                generatorState.label = t[2];
                                generatorState.ops.push(op);
                                break;
                            }
                            if (t[2]) generatorState.ops.pop();
                            generatorState.trys.pop();
                            continue;
                    }

                    op = body.call(thisArg, generatorState);
                }
                catch(e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
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