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
        test(done).fail(done);
    };
}
describe("jQueryPromise", function () {
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
                    message = "This should be caught synchronously";
                    promise = $.Deferred().resolve().promise()
                        .then(function () {
                        throw new Error(message);
                    });
                    // Assert
                    return [4 /*yield*/, promise.fail(function (error) {
                            expect(error.message).to.be.equal(message);
                            done();
                        })];
                case 1:
                    // Assert
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }));
    it("catches an asynchronously thrown value", fakeAsyncFunction(function (done) { return __awaiter(_this, void 0, void 0, function () {
        var message, deferred, promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    message = "This should be caught asynchronously";
                    deferred = $.Deferred();
                    promise = deferred.promise()
                        .then(function () {
                        throw new Error(message);
                    });
                    setTimeout(deferred.resolve);
                    // Assert
                    return [4 /*yield*/, promise.fail(function (error) {
                            expect(error.message).to.be.equal(message);
                            done();
                        })];
                case 1:
                    // Assert
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }));
    it("catches an asynchronously thrown value before a chain", fakeAsyncFunction(function (done) { return __awaiter(_this, void 0, void 0, function () {
        var message, deferred, promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    message = "This should be caught asynchronously";
                    deferred = $.Deferred();
                    promise = deferred.promise()
                        .then(function () {
                        throw new Error(message);
                    })
                        .then(function () { });
                    setTimeout(deferred.resolve);
                    // Assert
                    return [4 /*yield*/, promise
                            .fail(function (error) { return chai.expect(error.message).to.be.equal(message); })];
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
                    message = "This should be caught asynchronously";
                    deferred = $.Deferred();
                    promise = deferred.promise()
                        .then(function () { })
                        .then(function () {
                        throw new Error(message);
                    });
                    setTimeout(deferred.resolve);
                    // Assert
                    return [4 /*yield*/, promise
                            .fail(function (error) { return chai.expect(error.message).to.be.equal(message); })];
                case 1:
                    // Assert
                    _a.sent();
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUUzQixLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRW5CLDJCQUEyQixJQUF3QztJQUMvRCxNQUFNLENBQUMsVUFBQyxJQUFlO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQStCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUMsQ0FBQztBQUNOLENBQUM7QUFFRCxRQUFRLENBQUMsZUFBZSxFQUFFO0lBQUEsaUJBNk56QjtJQTVORyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRWxCLEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxpQkFBaUIsQ0FBQyxVQUFPLElBQWU7WUFFbEUsS0FBSzs7Ozs0QkFBRyxFQUFFO29CQUVoQixNQUFNO29CQUNOLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2QscUJBQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRTs2QkFDakMsSUFBSSxDQUFDOzRCQUNGLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2xCLENBQUMsQ0FBQyxFQUFBOztvQkFITixTQUdNLENBQUM7b0JBQ1AsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFZCxTQUFTO29CQUNULE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hDLElBQUksRUFBRSxDQUFDOzs7O1NBQ1YsQ0FBQyxDQUFDLENBQUM7SUFFSixFQUFFLENBQUMsMEJBQTBCLEVBQUUsaUJBQWlCLENBQUMsVUFBTyxJQUFlO1lBRTdELEtBQUssRUFHTCxPQUFPOzs7OzRCQUhDLE9BQU87OEJBR0wsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUU7b0JBQ3JDLHFCQUFNLE9BQU8sRUFBQTs7OEJBQWIsU0FBYTtvQkFFN0IsU0FBUztvQkFDVCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ25DLElBQUksRUFBRSxDQUFDOzs7O1NBQ1YsQ0FBQyxDQUFDLENBQUM7SUFFSixFQUFFLENBQUMsNENBQTRDLEVBQUUsaUJBQWlCLENBQUMsVUFBTyxJQUFlO1lBRS9FLEtBQUssRUFHTCxPQUFPOzs7OzRCQUhDLE9BQU87OEJBR0wsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRTtvQkFDaEMscUJBQU0sT0FBTyxDQUFDLElBQUksQ0FBQzs0QkFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQzt3QkFDakIsQ0FBQyxDQUFDLEVBQUE7OzhCQUZjLFNBRWQ7b0JBRUYsU0FBUztvQkFDVCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ25DLElBQUksRUFBRSxDQUFDOzs7O1NBQ1YsQ0FBQyxDQUFDLENBQUM7SUFFSixFQUFFLENBQUMsa0RBQWtELEVBQUUsaUJBQWlCLENBQUMsVUFBTyxJQUFlO1lBRXJGLEtBQUssRUFHTCxPQUFPOzs7OzRCQUhDLE9BQU87OEJBR0wsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRTtvQkFDaEMscUJBQU0sT0FBTzs2QkFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDOzZCQUNyQixJQUFJLENBQUM7NEJBQ0YsTUFBTSxDQUFDLEtBQUssQ0FBQzt3QkFDakIsQ0FBQyxDQUFDLEVBQUE7OzhCQUpVLFNBSVY7b0JBRU4sU0FBUztvQkFDVCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ25DLElBQUksRUFBRSxDQUFDOzs7O1NBQ1YsQ0FBQyxDQUFDLENBQUM7SUFFSixFQUFFLENBQUMsb0RBQW9ELEVBQUUsaUJBQWlCLENBQUMsVUFBTyxJQUFlO1lBRXZGLGFBQWEsRUFHYixPQUFPOzs7O29DQUhTLE9BQU87OEJBR2IsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRTtvQkFDaEMscUJBQU0sT0FBTzs2QkFDeEIsSUFBSSxDQUFDLGNBQU0sT0FBQSxhQUFhLEVBQWIsQ0FBYSxDQUFDOzZCQUN6QixJQUFJLENBQUMsVUFBQSxhQUFhLElBQUksT0FBQSxhQUFhLEVBQWIsQ0FBYSxDQUFDLEVBQUE7OzhCQUZ6QixTQUV5QjtvQkFFekMsU0FBUztvQkFDVCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzNDLElBQUksRUFBRSxDQUFDOzs7O1NBQ1YsQ0FBQyxDQUFDLENBQUM7SUFFSixFQUFFLENBQUMsc0RBQXNELEVBQUUsaUJBQWlCLENBQUMsVUFBTyxJQUFlO1lBRXpGLGFBQWEsRUFHYixPQUFPOzs7O29DQUhTLE9BQU87OEJBR2IsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRTtvQkFDaEMscUJBQU0sT0FBTzs2QkFDeEIsSUFBSSxDQUFDLGNBQU0sT0FBQSxhQUFhLEVBQWIsQ0FBYSxDQUFDOzZCQUN6QixJQUFJLENBQUMsVUFBQSxhQUFhLElBQUksT0FBQSxhQUFhLEVBQWIsQ0FBYSxDQUFDOzZCQUNwQyxJQUFJLENBQUMsVUFBQSxhQUFhLElBQUksT0FBQSxhQUFhLEVBQWIsQ0FBYSxDQUFDLEVBQUE7OzhCQUh6QixTQUd5QjtvQkFFekMsU0FBUztvQkFDVCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzNDLElBQUksRUFBRSxDQUFDOzs7O1NBQ1YsQ0FBQyxDQUFDLENBQUM7SUFFSixFQUFFLENBQUMsMEJBQTBCLEVBQUUsaUJBQWlCLENBQUMsVUFBTyxJQUFlO1lBRTdELEtBQUssRUFDTCxRQUFROzs7OzRCQURBLE9BQU87K0JBQ0osQ0FBQyxDQUFDLFFBQVEsRUFBRTtvQkFFN0IsTUFBTTtvQkFDTixVQUFVLENBQUMsY0FBTSxPQUFBLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQXZCLENBQXVCLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQzlCLHFCQUFNLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBQTs7OEJBQXhCLFNBQXdCO29CQUV4QyxTQUFTO29CQUNULE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbkMsSUFBSSxFQUFFLENBQUM7Ozs7U0FDVixDQUFDLENBQUMsQ0FBQztJQUVKLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxpQkFBaUIsQ0FBQyxVQUFPLElBQWU7WUFFaEUsS0FBSyxFQUNMLFNBQVMsRUFDVCxTQUFTOzs7OzRCQUZELE9BQU87Z0NBQ0gsQ0FBQyxDQUFDLFFBQVEsRUFBRTtnQ0FDWixDQUFDLENBQUMsUUFBUSxFQUFFO29CQUU5QixNQUFNO29CQUNOLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUNsQyxxQkFBTSxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUE7O29CQUF6QixTQUF5QixDQUFDO29CQUUxQixVQUFVLENBQUMsY0FBTSxPQUFBLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQXhCLENBQXdCLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQy9CLHFCQUFNLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBQTs7OEJBQXpCLFNBQXlCO29CQUV6QyxTQUFTO29CQUNULE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbkMsSUFBSSxFQUFFLENBQUM7Ozs7U0FDVixDQUFDLENBQUMsQ0FBQztJQUVKLEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRSxpQkFBaUIsQ0FBQyxVQUFPLElBQWU7WUFFekUsT0FBTyxFQUdQLE9BQU87Ozs7OEJBSEcscUNBQXFDOzhCQUdyQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFO3lCQUMzQyxJQUFJLENBQUM7d0JBQ0YsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDN0IsQ0FBQyxDQUFDO29CQUVOLFNBQVM7b0JBQ1QscUJBQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUs7NEJBQ3BCLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQzNDLElBQUksRUFBRSxDQUFDO3dCQUNYLENBQUMsQ0FBQyxFQUFBOztvQkFKRixTQUFTO29CQUNULFNBR0UsQ0FBQzs7OztTQUNOLENBQUMsQ0FBQyxDQUFDO0lBRUosRUFBRSxDQUFDLHdDQUF3QyxFQUFFLGlCQUFpQixDQUFDLFVBQU8sSUFBZTtZQUUzRSxPQUFPLEVBR1AsUUFBUSxFQUNSLE9BQU87Ozs7OEJBSkcsc0NBQXNDOytCQUdyQyxDQUFDLENBQUMsUUFBUSxFQUFFOzhCQUNiLFFBQVEsQ0FBQyxPQUFPLEVBQUU7eUJBQzdCLElBQUksQ0FBQzt3QkFDRixNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM3QixDQUFDLENBQUM7b0JBRU4sVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFFN0IsU0FBUztvQkFDVCxxQkFBTSxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSzs0QkFDcEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDM0MsSUFBSSxFQUFFLENBQUM7d0JBQ1gsQ0FBQyxDQUFDLEVBQUE7O29CQUpGLFNBQVM7b0JBQ1QsU0FHRSxDQUFDOzs7O1NBQ04sQ0FBQyxDQUFDLENBQUM7SUFFSixFQUFFLENBQUMsdURBQXVELEVBQUUsaUJBQWlCLENBQUMsVUFBTyxJQUFlO1lBRTFGLE9BQU8sRUFHUCxRQUFRLEVBQ1IsT0FBTzs7Ozs4QkFKRyxzQ0FBc0M7K0JBR3JDLENBQUMsQ0FBQyxRQUFRLEVBQUU7OEJBQ2IsUUFBUSxDQUFDLE9BQU8sRUFBRTt5QkFDN0IsSUFBSSxDQUFDO3dCQUNGLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzdCLENBQUMsQ0FBQzt5QkFDRCxJQUFJLENBQUMsY0FBTyxDQUFDLENBQUM7b0JBRW5CLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBRTdCLFNBQVM7b0JBQ1QscUJBQU0sT0FBTzs2QkFDUixJQUFJLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBL0MsQ0FBK0MsQ0FBQyxFQUFBOztvQkFGbkUsU0FBUztvQkFDVCxTQUNtRSxDQUFDO29CQUNwRSxJQUFJLEVBQUUsQ0FBQzs7OztTQUNWLENBQUMsQ0FBQyxDQUFDO0lBRUosRUFBRSxDQUFDLHNEQUFzRCxFQUFFLGlCQUFpQixDQUFDLFVBQU8sSUFBZTtZQUV6RixPQUFPLEVBR1AsUUFBUSxFQUNSLE9BQU87Ozs7OEJBSkcsc0NBQXNDOytCQUdyQyxDQUFDLENBQUMsUUFBUSxFQUFFOzhCQUNiLFFBQVEsQ0FBQyxPQUFPLEVBQUU7eUJBQzdCLElBQUksQ0FBQyxjQUFPLENBQUMsQ0FBQzt5QkFDZCxJQUFJLENBQUM7d0JBQ0YsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDN0IsQ0FBQyxDQUFDO29CQUVOLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBRTdCLFNBQVM7b0JBQ1QscUJBQU0sT0FBTzs2QkFDUixJQUFJLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBL0MsQ0FBK0MsQ0FBQyxFQUFBOztvQkFGbkUsU0FBUztvQkFDVCxTQUNtRSxDQUFDO29CQUNwRSxJQUFJLEVBQUUsQ0FBQzs7OztTQUNWLENBQUMsQ0FBQyxDQUFDO0lBRUosRUFBRSxDQUFDLHFEQUFxRCxFQUFFLGlCQUFpQixDQUFDLFVBQU8sSUFBZTtZQUV4RixLQUFLLEVBQ1AsV0FBVzs7b0JBREQsSUFBSSxLQUFLLEVBQUU7WUFHekIsTUFBTTtZQUNOLElBQUksQ0FBQztnQkFDRCxNQUFNLEtBQUssQ0FBQztZQUNoQixDQUFDO1lBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDYixXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLENBQUM7WUFFRCxTQUFTO1lBQ1QsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLElBQUksRUFBRSxDQUFDOzs7U0FDVixDQUFDLENBQUMsQ0FBQztBQUNSLENBQUMsQ0FBQyxDQUFDO0FBRUgsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDIiwiZmlsZSI6InRlc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXhwZWN0ID0gY2hhaS5leHBlY3Q7XHJcblxyXG5tb2NoYS5zZXR1cChcImJkZFwiKTtcclxuXHJcbmZ1bmN0aW9uIGZha2VBc3luY0Z1bmN0aW9uKHRlc3Q6IChkb25lOiBNb2NoYURvbmUpID0+IFByb21pc2U8dm9pZD4pOiAoZG9uZTogTW9jaGFEb25lKSA9PiB2b2lkIHtcclxuICAgIHJldHVybiAoZG9uZTogTW9jaGFEb25lKTogdm9pZCA9PiB7XHJcbiAgICAgICAgKHRlc3QoZG9uZSkgYXMgYW55IGFzIEpRdWVyeVByb21pc2U8YW55PikuZmFpbChkb25lKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmRlc2NyaWJlKFwialF1ZXJ5UHJvbWlzZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnRpbWVvdXQoMzUwKTtcclxuXHJcbiAgICBpdChcImV4ZWN1dGVzIGluIHRoZSBjb3JyZWN0IG9yZGVyXCIsIGZha2VBc3luY0Z1bmN0aW9uKGFzeW5jIChkb25lOiBNb2NoYURvbmUpID0+IHtcclxuICAgICAgICAvLyBBcnJhbmdlXHJcbiAgICAgICAgY29uc3Qgb3JkZXIgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gQWN0XHJcbiAgICAgICAgb3JkZXIucHVzaCgxKTtcclxuICAgICAgICBhd2FpdCAkLkRlZmVycmVkKCkucmVzb2x2ZSgpLnByb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvcmRlci5wdXNoKDIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBvcmRlci5wdXNoKDMpO1xyXG5cclxuICAgICAgICAvLyBBc3NlcnRcclxuICAgICAgICBleHBlY3Qob3JkZXIpLnRvLmJlLmRlZXAuZXF1YWwoWzEsMiwzXSk7XHJcbiAgICAgICAgZG9uZSgpO1xyXG4gICAgfSkpO1xyXG5cclxuICAgIGl0KFwicmV0dXJucyBhbiBhd2FpdGVkIHZhbHVlXCIsIGZha2VBc3luY0Z1bmN0aW9uKGFzeW5jIChkb25lOiBNb2NoYURvbmUpID0+IHtcclxuICAgICAgICAvLyBBcnJhbmdlXHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBcInZhbHVlXCI7XHJcblxyXG4gICAgICAgIC8vIEFjdFxyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSAkLkRlZmVycmVkKCkucmVzb2x2ZSh2YWx1ZSkucHJvbWlzZSgpO1xyXG4gICAgICAgIGNvbnN0IGF3YWl0ZWQgPSBhd2FpdCBwcm9taXNlO1xyXG5cclxuICAgICAgICAvLyBBc3NlcnRcclxuICAgICAgICBleHBlY3QoYXdhaXRlZCkudG8uYmUuZXF1YWwodmFsdWUpO1xyXG4gICAgICAgIGRvbmUoKTtcclxuICAgIH0pKTtcclxuXHJcbiAgICBpdChcInJldHVybnMgYW4gYXdhaXRlZCBwcm9taXNlJ3MgLnRoZW4ncyB2YWx1ZVwiLCBmYWtlQXN5bmNGdW5jdGlvbihhc3luYyAoZG9uZTogTW9jaGFEb25lKSA9PiB7XHJcbiAgICAgICAgLy8gQXJyYW5nZVxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gXCJ2YWx1ZVwiO1xyXG5cclxuICAgICAgICAvLyBBY3RcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gJC5EZWZlcnJlZCgpLnJlc29sdmUoKS5wcm9taXNlKCk7XHJcbiAgICAgICAgY29uc3QgYXdhaXRlZCA9IGF3YWl0IHByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQXNzZXJ0XHJcbiAgICAgICAgZXhwZWN0KGF3YWl0ZWQpLnRvLmJlLmVxdWFsKHZhbHVlKTtcclxuICAgICAgICBkb25lKCk7XHJcbiAgICB9KSk7XHJcblxyXG4gICAgaXQoXCJyZXR1cm5zIGFuIGF3YWl0ZWQgcHJvbWlzZSdzIC50aGVuIGNoYWluJ3MgdmFsdWVcIiwgZmFrZUFzeW5jRnVuY3Rpb24oYXN5bmMgKGRvbmU6IE1vY2hhRG9uZSkgPT4ge1xyXG4gICAgICAgIC8vIEFycmFuZ2VcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IFwidmFsdWVcIjtcclxuXHJcbiAgICAgICAgLy8gQWN0XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9ICQuRGVmZXJyZWQoKS5yZXNvbHZlKCkucHJvbWlzZSgpO1xyXG4gICAgICAgIGNvbnN0IGF3YWl0ZWQgPSBhd2FpdCBwcm9taXNlXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQXNzZXJ0XHJcbiAgICAgICAgZXhwZWN0KGF3YWl0ZWQpLnRvLmJlLmVxdWFsKHZhbHVlKTtcclxuICAgICAgICBkb25lKCk7XHJcbiAgICB9KSk7XHJcblxyXG4gICAgaXQoXCJwYXNzZXMgYSB2YWx1ZSB0aHJvdWdoIGEgY2hhaW4gb2YgdHdvIC50aGVuIHBhc3Nlc1wiLCBmYWtlQXN5bmNGdW5jdGlvbihhc3luYyAoZG9uZTogTW9jaGFEb25lKSA9PiB7XHJcbiAgICAgICAgLy8gQXJyYW5nZVxyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBcInZhbHVlXCI7XHJcblxyXG4gICAgICAgIC8vIEFjdFxyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSAkLkRlZmVycmVkKCkucmVzb2x2ZSgpLnByb21pc2UoKTtcclxuICAgICAgICBjb25zdCBhd2FpdGVkID0gYXdhaXQgcHJvbWlzZVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiBvcmlnaW5hbFZhbHVlKVxyXG4gICAgICAgICAgICAudGhlbihyZWNlaXZlZFZhbHVlID0+IHJlY2VpdmVkVmFsdWUpO1xyXG5cclxuICAgICAgICAvLyBBc3NlcnRcclxuICAgICAgICBleHBlY3QoYXdhaXRlZCkudG8uYmUuZXF1YWwob3JpZ2luYWxWYWx1ZSk7XHJcbiAgICAgICAgZG9uZSgpO1xyXG4gICAgfSkpO1xyXG5cclxuICAgIGl0KFwicGFzc2VzIGEgdmFsdWUgdGhyb3VnaCBhIGNoYWluIG9mIHRocmVlIC50aGVuIHBhc3Nlc1wiLCBmYWtlQXN5bmNGdW5jdGlvbihhc3luYyAoZG9uZTogTW9jaGFEb25lKSA9PiB7XHJcbiAgICAgICAgLy8gQXJyYW5nZVxyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBcInZhbHVlXCI7XHJcblxyXG4gICAgICAgIC8vIEFjdFxyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSAkLkRlZmVycmVkKCkucmVzb2x2ZSgpLnByb21pc2UoKTtcclxuICAgICAgICBjb25zdCBhd2FpdGVkID0gYXdhaXQgcHJvbWlzZVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiBvcmlnaW5hbFZhbHVlKVxyXG4gICAgICAgICAgICAudGhlbihyZWNlaXZlZFZhbHVlID0+IHJlY2VpdmVkVmFsdWUpXHJcbiAgICAgICAgICAgIC50aGVuKHJlY2VpdmVkVmFsdWUgPT4gcmVjZWl2ZWRWYWx1ZSk7XHJcblxyXG4gICAgICAgIC8vIEFzc2VydFxyXG4gICAgICAgIGV4cGVjdChhd2FpdGVkKS50by5iZS5lcXVhbChvcmlnaW5hbFZhbHVlKTtcclxuICAgICAgICBkb25lKCk7XHJcbiAgICB9KSk7XHJcblxyXG4gICAgaXQoXCJ3YWl0cyBvbiBhIHRpbWVkIHByb21pc2VcIiwgZmFrZUFzeW5jRnVuY3Rpb24oYXN5bmMgKGRvbmU6IE1vY2hhRG9uZSkgPT4ge1xyXG4gICAgICAgIC8vIEFycmFuZ2VcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IFwidmFsdWVcIjtcclxuICAgICAgICBjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcclxuXHJcbiAgICAgICAgLy8gQWN0XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkZWZlcnJlZC5yZXNvbHZlKHZhbHVlKSwgMTApO1xyXG4gICAgICAgIGNvbnN0IGF3YWl0ZWQgPSBhd2FpdCBkZWZlcnJlZC5wcm9taXNlKCk7XHJcblxyXG4gICAgICAgIC8vIEFzc2VydFxyXG4gICAgICAgIGV4cGVjdChhd2FpdGVkKS50by5iZS5lcXVhbCh2YWx1ZSk7XHJcbiAgICAgICAgZG9uZSgpO1xyXG4gICAgfSkpO1xyXG5cclxuICAgIGl0KFwid2FpdHMgb24gdHdvIHRpbWVkIHByb21pc2VzXCIsIGZha2VBc3luY0Z1bmN0aW9uKGFzeW5jIChkb25lOiBNb2NoYURvbmUpID0+IHtcclxuICAgICAgICAvLyBBcnJhbmdlXHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBcInZhbHVlXCI7XHJcbiAgICAgICAgY29uc3QgZGVmZXJyZWRBID0gJC5EZWZlcnJlZCgpO1xyXG4gICAgICAgIGNvbnN0IGRlZmVycmVkQiA9ICQuRGVmZXJyZWQoKTtcclxuXHJcbiAgICAgICAgLy8gQWN0XHJcbiAgICAgICAgc2V0VGltZW91dChkZWZlcnJlZEEucmVzb2x2ZSwgMTApO1xyXG4gICAgICAgIGF3YWl0IGRlZmVycmVkQS5wcm9taXNlKCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZGVmZXJyZWRCLnJlc29sdmUodmFsdWUpLCAyMCk7XHJcbiAgICAgICAgY29uc3QgYXdhaXRlZCA9IGF3YWl0IGRlZmVycmVkQi5wcm9taXNlKCk7XHJcblxyXG4gICAgICAgIC8vIEFzc2VydFxyXG4gICAgICAgIGV4cGVjdChhd2FpdGVkKS50by5iZS5lcXVhbCh2YWx1ZSk7XHJcbiAgICAgICAgZG9uZSgpO1xyXG4gICAgfSkpO1xyXG5cclxuICAgIGl0KFwiY2F0Y2hlcyBhIHN5bmNocm9ub3VzbHkgdGhyb3duIHZhbHVlXCIsIGZha2VBc3luY0Z1bmN0aW9uKGFzeW5jIChkb25lOiBNb2NoYURvbmUpID0+IHtcclxuICAgICAgICAvLyBBcnJhbmdlXHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IFwiVGhpcyBzaG91bGQgYmUgY2F1Z2h0IHN5bmNocm9ub3VzbHlcIjtcclxuXHJcbiAgICAgICAgLy8gQWN0XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9ICQuRGVmZXJyZWQoKS5yZXNvbHZlKCkucHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEFzc2VydFxyXG4gICAgICAgIGF3YWl0IHByb21pc2UuZmFpbChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGV4cGVjdChlcnJvci5tZXNzYWdlKS50by5iZS5lcXVhbChtZXNzYWdlKTtcclxuICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSkpO1xyXG5cclxuICAgIGl0KFwiY2F0Y2hlcyBhbiBhc3luY2hyb25vdXNseSB0aHJvd24gdmFsdWVcIiwgZmFrZUFzeW5jRnVuY3Rpb24oYXN5bmMgKGRvbmU6IE1vY2hhRG9uZSkgPT4ge1xyXG4gICAgICAgIC8vIEFycmFuZ2VcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gXCJUaGlzIHNob3VsZCBiZSBjYXVnaHQgYXN5bmNocm9ub3VzbHlcIjtcclxuXHJcbiAgICAgICAgLy8gQWN0XHJcbiAgICAgICAgY29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGRlZmVycmVkLnByb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGRlZmVycmVkLnJlc29sdmUpO1xyXG5cclxuICAgICAgICAvLyBBc3NlcnRcclxuICAgICAgICBhd2FpdCBwcm9taXNlLmZhaWwoZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBleHBlY3QoZXJyb3IubWVzc2FnZSkudG8uYmUuZXF1YWwobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGRvbmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pKTtcclxuXHJcbiAgICBpdChcImNhdGNoZXMgYW4gYXN5bmNocm9ub3VzbHkgdGhyb3duIHZhbHVlIGJlZm9yZSBhIGNoYWluXCIsIGZha2VBc3luY0Z1bmN0aW9uKGFzeW5jIChkb25lOiBNb2NoYURvbmUpID0+IHtcclxuICAgICAgICAvLyBBcnJhbmdlXHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IFwiVGhpcyBzaG91bGQgYmUgY2F1Z2h0IGFzeW5jaHJvbm91c2x5XCI7XHJcblxyXG4gICAgICAgIC8vIEFjdFxyXG4gICAgICAgIGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBkZWZlcnJlZC5wcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7fSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZGVmZXJyZWQucmVzb2x2ZSk7XHJcblxyXG4gICAgICAgIC8vIEFzc2VydFxyXG4gICAgICAgIGF3YWl0IHByb21pc2VcclxuICAgICAgICAgICAgLmZhaWwoZXJyb3IgPT4gY2hhaS5leHBlY3QoZXJyb3IubWVzc2FnZSkudG8uYmUuZXF1YWwobWVzc2FnZSkpO1xyXG4gICAgICAgIGRvbmUoKTtcclxuICAgIH0pKTtcclxuXHJcbiAgICBpdChcImNhdGNoZXMgYW4gYXN5bmNocm9ub3VzbHkgdGhyb3duIHZhbHVlIGFmdGVyIGEgY2hhaW5cIiwgZmFrZUFzeW5jRnVuY3Rpb24oYXN5bmMgKGRvbmU6IE1vY2hhRG9uZSkgPT4ge1xyXG4gICAgICAgIC8vIEFycmFuZ2VcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gXCJUaGlzIHNob3VsZCBiZSBjYXVnaHQgYXN5bmNocm9ub3VzbHlcIjtcclxuXHJcbiAgICAgICAgLy8gQWN0XHJcbiAgICAgICAgY29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGRlZmVycmVkLnByb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7fSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChkZWZlcnJlZC5yZXNvbHZlKTtcclxuXHJcbiAgICAgICAgLy8gQXNzZXJ0XHJcbiAgICAgICAgYXdhaXQgcHJvbWlzZVxyXG4gICAgICAgICAgICAuZmFpbChlcnJvciA9PiBjaGFpLmV4cGVjdChlcnJvci5tZXNzYWdlKS50by5iZS5lcXVhbChtZXNzYWdlKSk7XHJcbiAgICAgICAgZG9uZSgpO1xyXG4gICAgfSkpO1xyXG5cclxuICAgIGl0KFwicmV0dXJucyB0aHJvdWdoIGEgY2F1Z2h0IGVycm9yIGluIGEgdHJ5L2NhdGNoIGJsb2NrXCIsIGZha2VBc3luY0Z1bmN0aW9uKGFzeW5jIChkb25lOiBNb2NoYURvbmUpID0+IHtcclxuICAgICAgICAvLyBBcnJhbmdlXHJcbiAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoKTtcclxuICAgICAgICBsZXQgY2F1Z2h0RXJyb3I7XHJcblxyXG4gICAgICAgIC8vIEFjdFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNhdWdodEVycm9yID0gZXJyb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBc3NlcnRcclxuICAgICAgICBleHBlY3QoY2F1Z2h0RXJyb3IpLnRvLmJlLmVxdWFsKGVycm9yKTtcclxuICAgICAgICBkb25lKCk7XHJcbiAgICB9KSk7XHJcbn0pO1xyXG5cclxubW9jaGEucnVuKCk7XHJcbiJdfQ==
