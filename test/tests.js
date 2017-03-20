var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
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
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var expect = chai.expect;
mocha.setup("bdd");
function fakeAsyncFunction(test) {
    return function (done) {
        test(done).catch(done);
    };
}
describe("async/await", function () {
    var _this = this;
    this.timeout(350);
    it("executes in the correct order", fakeAsyncFunction(function (done) { return __awaiter(_this, void 0, void 0, function () {
        var order;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    order = [];
                    // Act
                    order.push(1);
                    return [4 /*yield*/, $.Deferred().resolve().promise()
                            .then(function () {
                            order.push(2);
                        })];
                case 1:
                    _a.sent();
                    order.push(3);
                    // Assert
                    expect(order).to.be.deep.equal([1, 2, 3]);
                    done();
                    return [2 /*return*/];
            }
        });
    }); }));
    it("returns an awaited value", fakeAsyncFunction(function (done) { return __awaiter(_this, void 0, void 0, function () {
        var value, promise, awaited;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    value = "value";
                    promise = $.Deferred().resolve(value).promise();
                    return [4 /*yield*/, promise];
                case 1:
                    awaited = _a.sent();
                    // Assert
                    expect(awaited).to.be.equal(value);
                    done();
                    return [2 /*return*/];
            }
        });
    }); }));
    it("returns an awaited promise's .then's value", fakeAsyncFunction(function (done) { return __awaiter(_this, void 0, void 0, function () {
        var value, promise, awaited;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    value = "value";
                    promise = $.Deferred().resolve().promise();
                    return [4 /*yield*/, promise.then(function () {
                            return value;
                        })];
                case 1:
                    awaited = _a.sent();
                    // Assert
                    expect(awaited).to.be.equal(value);
                    done();
                    return [2 /*return*/];
            }
        });
    }); }));
    it("returns an awaited promise's .then chain's value", fakeAsyncFunction(function (done) { return __awaiter(_this, void 0, void 0, function () {
        var value, promise, awaited;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    value = "value";
                    promise = $.Deferred().resolve().promise();
                    return [4 /*yield*/, promise
                            .then(function () { })
                            .then(function () {
                            return value;
                        })];
                case 1:
                    awaited = _a.sent();
                    // Assert
                    expect(awaited).to.be.equal(value);
                    done();
                    return [2 /*return*/];
            }
        });
    }); }));
    it("passes a value through a chain of two .then passes", fakeAsyncFunction(function (done) { return __awaiter(_this, void 0, void 0, function () {
        var originalValue, promise, awaited;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    originalValue = "value";
                    promise = $.Deferred().resolve().promise();
                    return [4 /*yield*/, promise
                            .then(function () { return originalValue; })
                            .then(function (receivedValue) { return receivedValue; })];
                case 1:
                    awaited = _a.sent();
                    // Assert
                    expect(awaited).to.be.equal(originalValue);
                    done();
                    return [2 /*return*/];
            }
        });
    }); }));
    it("passes a value through a chain of three .then passes", fakeAsyncFunction(function (done) { return __awaiter(_this, void 0, void 0, function () {
        var originalValue, promise, awaited;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    originalValue = "value";
                    promise = $.Deferred().resolve().promise();
                    return [4 /*yield*/, promise
                            .then(function () { return originalValue; })
                            .then(function (receivedValue) { return receivedValue; })
                            .then(function (receivedValue) { return receivedValue; })];
                case 1:
                    awaited = _a.sent();
                    // Assert
                    expect(awaited).to.be.equal(originalValue);
                    done();
                    return [2 /*return*/];
            }
        });
    }); }));
    it("waits on a timed promise", fakeAsyncFunction(function (done) { return __awaiter(_this, void 0, void 0, function () {
        var value, deferred, awaited;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    value = "value";
                    deferred = $.Deferred();
                    // Act
                    setTimeout(function () { return deferred.resolve(value); }, 10);
                    return [4 /*yield*/, deferred.promise()];
                case 1:
                    awaited = _a.sent();
                    // Assert
                    expect(awaited).to.be.equal(value);
                    done();
                    return [2 /*return*/];
            }
        });
    }); }));
    it("waits on two timed promises", fakeAsyncFunction(function (done) { return __awaiter(_this, void 0, void 0, function () {
        var value, deferredA, deferredB, awaited;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    value = "value";
                    deferredA = $.Deferred();
                    deferredB = $.Deferred();
                    // Act
                    setTimeout(deferredA.resolve, 10);
                    return [4 /*yield*/, deferredA.promise()];
                case 1:
                    _a.sent();
                    setTimeout(function () { return deferredB.resolve(value); }, 20);
                    return [4 /*yield*/, deferredB.promise()];
                case 2:
                    awaited = _a.sent();
                    // Assert
                    expect(awaited).to.be.equal(value);
                    done();
                    return [2 /*return*/];
            }
        });
    }); }));
    it("catches a synchronously thrown value", fakeAsyncFunction(function (done) { return __awaiter(_this, void 0, void 0, function () {
        var message, promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    message = "This should be caught";
                    promise = $.Deferred().resolve().promise()
                        .then(function () {
                        throw new Error(message);
                    });
                    // Assert
                    return [4 /*yield*/, promise.catch(function (error) { return expect(error.message).to.be.equal(message); })];
                case 1:
                    // Assert
                    _a.sent();
                    done();
                    return [2 /*return*/];
            }
        });
    }); }));
    it("catches a synchronously thrown value after a chain", fakeAsyncFunction(function (done) { return __awaiter(_this, void 0, void 0, function () {
        var message, promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    message = "This should be caught";
                    promise = $.Deferred().resolve().promise()
                        .then(function () { })
                        .then(function () {
                        throw new Error(message);
                    });
                    // Assert
                    return [4 /*yield*/, promise.catch(function (error) { return expect(error.message).to.be.equal(message); })];
                case 1:
                    // Assert
                    _a.sent();
                    done();
                    return [2 /*return*/];
            }
        });
    }); }));
    it("catches a synchronously thrown value before a chain", fakeAsyncFunction(function (done) { return __awaiter(_this, void 0, void 0, function () {
        var message, promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    message = "This should be caught";
                    promise = $.Deferred().resolve().promise()
                        .then(function () {
                        throw new Error(message);
                    })
                        .then(function () { });
                    // Assert
                    return [4 /*yield*/, promise.catch(function (error) { return expect(error.message).to.be.equal(message); })];
                case 1:
                    // Assert
                    _a.sent();
                    done();
                    return [2 /*return*/];
            }
        });
    }); }));
    it("catches an asynchronously thrown value", fakeAsyncFunction(function (done) { return __awaiter(_this, void 0, void 0, function () {
        var message, deferred, promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    message = "This should be caught";
                    deferred = $.Deferred();
                    promise = deferred.promise()
                        .then(function () {
                        throw new Error(message);
                    });
                    setTimeout(deferred.resolve);
                    // Assert
                    return [4 /*yield*/, promise
                            .catch(function (error) { return chai.expect(error.message).to.be.equal(message); })];
                case 1:
                    // Assert
                    _a.sent();
                    done();
                    return [2 /*return*/];
            }
        });
    }); }));
    it("catches an asynchronously thrown value before a chain", fakeAsyncFunction(function (done) { return __awaiter(_this, void 0, void 0, function () {
        var message, deferred, promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    message = "This should be caught";
                    deferred = $.Deferred();
                    promise = deferred.promise()
                        .then(function () {
                        throw new Error(message);
                    })
                        .then(function () { });
                    setTimeout(deferred.resolve);
                    // Assert
                    return [4 /*yield*/, promise
                            .catch(function (error) { return chai.expect(error.message).to.be.equal(message); })];
                case 1:
                    // Assert
                    _a.sent();
                    done();
                    return [2 /*return*/];
            }
        });
    }); }));
    it("catches an asynchronously thrown value after a chain", fakeAsyncFunction(function (done) { return __awaiter(_this, void 0, void 0, function () {
        var message, deferred, promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    message = "This should be caught";
                    deferred = $.Deferred();
                    promise = deferred.promise()
                        .then(function () { })
                        .then(function () {
                        throw new Error(message);
                    });
                    setTimeout(deferred.resolve);
                    // Assert
                    return [4 /*yield*/, promise
                            .catch(function (error) { return chai.expect(error.message).to.be.equal(message); })];
                case 1:
                    // Assert
                    _a.sent();
                    done();
                    return [2 /*return*/];
            }
        });
    }); }));
    it("catches a second thrown error after a first thrown error", fakeAsyncFunction(function (done) { return __awaiter(_this, void 0, void 0, function () {
        var firstMessage, secondMessage, deferred, promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    firstMessage = "This should be caught first";
                    secondMessage = "This should be caught second";
                    deferred = $.Deferred();
                    promise = deferred.promise()
                        .then(function () {
                        throw new Error(firstMessage);
                    })
                        .catch(function (error) {
                        expect(error.message).to.be.equal(firstMessage);
                    })
                        .then(function () {
                        throw new Error(secondMessage);
                    });
                    setTimeout(deferred.resolve);
                    // Assert
                    return [4 /*yield*/, promise
                            .catch(function (error) { return chai.expect(error.message).to.be.equal(secondMessage); })];
                case 1:
                    // Assert
                    _a.sent();
                    done();
                    return [2 /*return*/];
            }
        });
    }); }));
    it("returns through a chain after catching an error", fakeAsyncFunction(function (done) { return __awaiter(_this, void 0, void 0, function () {
        var value, promise, awaited;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    value = "value";
                    promise = $.Deferred()
                        .resolve()
                        .then(function () {
                        throw new Error();
                    })
                        .catch(function () { })
                        .then(function () { return value; })
                        .promise();
                    return [4 /*yield*/, promise];
                case 1:
                    awaited = _a.sent();
                    // Assert
                    expect(awaited).to.be.equal(value);
                    done();
                    return [2 /*return*/];
            }
        });
    }); }));
    it("returns through a chain after catching two errors", fakeAsyncFunction(function (done) { return __awaiter(_this, void 0, void 0, function () {
        var value, promise, awaited;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    value = "value";
                    promise = $.Deferred()
                        .resolve()
                        .then(function () {
                        throw new Error();
                    })
                        .catch(function () { })
                        .then(function () {
                        throw new Error();
                    })
                        .catch(function () { })
                        .then(function () { return value; })
                        .promise();
                    return [4 /*yield*/, promise];
                case 1:
                    awaited = _a.sent();
                    // Assert
                    expect(awaited).to.be.equal(value);
                    done();
                    return [2 /*return*/];
            }
        });
    }); }));
    it("returns through a caught error in a try/catch block", fakeAsyncFunction(function (done) { return __awaiter(_this, void 0, void 0, function () {
        var error, caughtError;
        return __generator(this, function (_a) {
            error = new Error();
            // Act
            try {
                throw error;
            }
            catch (error) {
                caughtError = error;
            }
            // Assert
            expect(caughtError).to.be.equal(error);
            done();
            return [2 /*return*/];
        });
    }); }));
});
mocha.run();
//# sourceMappingURL=tests.js.map