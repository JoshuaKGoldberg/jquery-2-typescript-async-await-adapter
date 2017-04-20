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
// describe("Promise", function () {
//     this.timeout(350);
//     it("gets an ordered result after a delay", fakeAsyncFunction(async (done: MochaDone) => {
//         // Arrange
//         const order = [1];
//         // Act
//         order.push(await Promise.resolve(2));
//         await new Promise((resolve, reject) => {
//             setTimeout(
//                 () => {
//                     order.push(3);
//                     resolve();
//                 },
//                 10);
//         });
//         // Assert
//         expect(order).to.be.deep.equal([1,2,3]);
//         done();
//     }));
// });
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
    // it("catches a synchronously thrown value", fakeAsyncFunction(async (done: MochaDone) => {
    //     // Arrange
    //     const message = "This should be caught synchronously";
    //     // Act
    //     const promise = $.Deferred().resolve().promise()
    //         .then(() => {
    //             throw new Error(message);
    //         });
    //     // Assert
    //     await promise.catch(error => {
    //         expect(error.message).to.be.equal(message);
    //         done();
    //     });
    // }));
    // it("catches a synchronously thrown value after a chain", fakeAsyncFunction(async (done: MochaDone) => {
    //     // Arrange
    //     const message = "This should be caught synchronously";
    //     // Act
    //     const promise = $.Deferred().resolve().promise()
    //         .then(() => {})
    //         .then(() => {
    //             throw new Error(message);
    //         });
    //     // Assert
    //     await promise.catch(error => expect(error.message).to.be.equal(message));
    //     done();
    // }));
    // it("catches a synchronously thrown value before a chain", fakeAsyncFunction(async (done: MochaDone) => {
    //     // Arrange
    //     const message = "This should be caught synchronously";
    //     // Act
    //     const promise = $.Deferred().resolve().promise()
    //         .then(() => {
    //             throw new Error(message);
    //         })
    //         .then(() => {});
    //     // Assert
    //     await promise.catch(error => expect(error.message).to.be.equal(message));
    //     done();
    // }));
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
    // it("catches an asynchronously thrown value before a chain", fakeAsyncFunction(async (done: MochaDone) => {
    //     // Arrange
    //     const message = "This should be caught asynchronously";
    //     // Act
    //     const deferred = $.Deferred();
    //     const promise = deferred.promise()
    //         .then(() => {
    //             throw new Error(message);
    //         })
    //         .then(() => {});
    //     setTimeout(deferred.resolve);
    //     // Assert
    //     await promise
    //         .catch(error => chai.expect(error.message).to.be.equal(message));
    //     done();
    // }));
    // it("catches an asynchronously thrown value after a chain", fakeAsyncFunction(async (done: MochaDone) => {
    //     // Arrange
    //     const message = "This should be caught asynchronously";
    //     // Act
    //     const deferred = $.Deferred();
    //     const promise = deferred.promise()
    //         .then(() => {})
    //         .then(() => {
    //             throw new Error(message);
    //         });
    //     setTimeout(deferred.resolve);
    //     // Assert
    //     await promise
    //         .catch(error => chai.expect(error.message).to.be.equal(message));
    //     done();
    // }));
    // it("catches a second thrown error after a first thrown error", fakeAsyncFunction(async (done: MochaDone) => {
    //     // Arrange
    //     const firstMessage = "This should be caught first";
    //     const secondMessage = "This should be caught second";
    //     // Act
    //     const deferred = $.Deferred();
    //     const promise = deferred.promise()
    //         .then(() => {
    //             throw new Error(firstMessage);
    //         })
    //         .catch(error => {
    //             expect(error.message).to.be.equal(firstMessage);
    //         })
    //         .then(() => {
    //             throw new Error(secondMessage);
    //         });
    //     setTimeout(deferred.resolve);
    //     // Assert
    //     await promise
    //         .catch(error => chai.expect(error.message).to.be.equal(secondMessage));
    //     done();
    // }));
    // it("returns through a chain after catching an error", fakeAsyncFunction(async (done: MochaDone) => {
    //     // Arrange
    //     const value = "value";
    //     // Act
    //     const promise = $.Deferred()
    //         .resolve()
    //         .then(() => {
    //             throw new Error();
    //         })
    //         .catch(() => {})
    //         .then(() => value)
    //         .promise();
    //     const awaited = await promise;
    //     // Assert
    //     expect(awaited).to.be.equal(value);
    //     done();
    // }));
    // it("returns through a chain after catching two errors", fakeAsyncFunction(async (done: MochaDone) => {
    //     // Arrange
    //     const value = "value";
    //     // Act
    //     const promise = $.Deferred()
    //         .resolve()
    //         .then(() => {
    //             throw new Error();
    //         })
    //         .catch(() => {})
    //         .then(() => {
    //             throw new Error();
    //         })
    //         .catch(() => {})
    //         .then(() => value)
    //         .promise();
    //     const awaited = await promise;
    //     // Assert
    //     expect(awaited).to.be.equal(value);
    //     done();
    // }));
    // it("returns through a caught error in a try/catch block", fakeAsyncFunction(async (done: MochaDone) => {
    //     // Arrange
    //     const error = new Error();
    //     let caughtError;
    //     // Act
    //     try {
    //         throw error;
    //     } catch (error) {
    //         caughtError = error;
    //     }
    //     // Assert
    //     expect(caughtError).to.be.equal(error);
    //     done();
    // }));
});
// describe("async/await", function () {
//     this.timeout(350);
// });
mocha.run();

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QWM7SUFDZCxPQUFPO0FBQ1gsQ0FBQyxDQUFDLENBQUM7QUFFSCx3Q0FBd0M7QUFDeEMseUJBQXlCO0FBR3pCLE1BQU07QUFFTixLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMiLCJmaWxlIjoidGVzdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBleHBlY3QgPSBjaGFpLmV4cGVjdDtcclxuXHJcbm1vY2hhLnNldHVwKFwiYmRkXCIpO1xyXG5cclxuaW50ZXJmYWNlIEpRdWVyeVByb21pc2U8VD4ge1xyXG4gICAgY2F0Y2goZXJyb3I6IGFueSk6IHRoaXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZha2VBc3luY0Z1bmN0aW9uKHRlc3Q6IChkb25lOiBNb2NoYURvbmUpID0+IFByb21pc2U8dm9pZD4pOiAoZG9uZTogTW9jaGFEb25lKSA9PiB2b2lkIHtcclxuICAgIHJldHVybiAoZG9uZTogTW9jaGFEb25lKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGVzdChkb25lKS5jYXRjaChkb25lKTtcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIGRlc2NyaWJlKFwiUHJvbWlzZVwiLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICB0aGlzLnRpbWVvdXQoMzUwKTtcclxuXHJcbi8vICAgICBpdChcImdldHMgYW4gb3JkZXJlZCByZXN1bHQgYWZ0ZXIgYSBkZWxheVwiLCBmYWtlQXN5bmNGdW5jdGlvbihhc3luYyAoZG9uZTogTW9jaGFEb25lKSA9PiB7XHJcbi8vICAgICAgICAgLy8gQXJyYW5nZVxyXG4vLyAgICAgICAgIGNvbnN0IG9yZGVyID0gWzFdO1xyXG5cclxuLy8gICAgICAgICAvLyBBY3RcclxuLy8gICAgICAgICBvcmRlci5wdXNoKGF3YWl0IFByb21pc2UucmVzb2x2ZSgyKSk7XHJcbi8vICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4vLyAgICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4vLyAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG9yZGVyLnB1c2goMyk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4vLyAgICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgIDEwKTtcclxuLy8gICAgICAgICB9KTtcclxuXHJcbi8vICAgICAgICAgLy8gQXNzZXJ0XHJcbi8vICAgICAgICAgZXhwZWN0KG9yZGVyKS50by5iZS5kZWVwLmVxdWFsKFsxLDIsM10pO1xyXG4vLyAgICAgICAgIGRvbmUoKTtcclxuLy8gICAgIH0pKTtcclxuLy8gfSk7XHJcblxyXG5kZXNjcmliZShcImpRdWVyeVByb21pc2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy50aW1lb3V0KDM1MCk7XHJcblxyXG4gICAgaXQoXCJleGVjdXRlcyBpbiB0aGUgY29ycmVjdCBvcmRlclwiLCBmYWtlQXN5bmNGdW5jdGlvbihhc3luYyAoZG9uZTogTW9jaGFEb25lKSA9PiB7XHJcbiAgICAgICAgLy8gQXJyYW5nZVxyXG4gICAgICAgIGNvbnN0IG9yZGVyID0gW107XHJcblxyXG4gICAgICAgIC8vIEFjdFxyXG4gICAgICAgIG9yZGVyLnB1c2goMSk7XHJcbiAgICAgICAgYXdhaXQgJC5EZWZlcnJlZCgpLnJlc29sdmUoKS5wcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3JkZXIucHVzaCgyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgb3JkZXIucHVzaCgzKTtcclxuXHJcbiAgICAgICAgLy8gQXNzZXJ0XHJcbiAgICAgICAgZXhwZWN0KG9yZGVyKS50by5iZS5kZWVwLmVxdWFsKFsxLDIsM10pO1xyXG4gICAgICAgIGRvbmUoKTtcclxuICAgIH0pKTtcclxuXHJcbiAgICBpdChcInJldHVybnMgYW4gYXdhaXRlZCB2YWx1ZVwiLCBmYWtlQXN5bmNGdW5jdGlvbihhc3luYyAoZG9uZTogTW9jaGFEb25lKSA9PiB7XHJcbiAgICAgICAgLy8gQXJyYW5nZVxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gXCJ2YWx1ZVwiO1xyXG5cclxuICAgICAgICAvLyBBY3RcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gJC5EZWZlcnJlZCgpLnJlc29sdmUodmFsdWUpLnByb21pc2UoKTtcclxuICAgICAgICBjb25zdCBhd2FpdGVkID0gYXdhaXQgcHJvbWlzZTtcclxuXHJcbiAgICAgICAgLy8gQXNzZXJ0XHJcbiAgICAgICAgZXhwZWN0KGF3YWl0ZWQpLnRvLmJlLmVxdWFsKHZhbHVlKTtcclxuICAgICAgICBkb25lKCk7XHJcbiAgICB9KSk7XHJcblxyXG4gICAgaXQoXCJyZXR1cm5zIGFuIGF3YWl0ZWQgcHJvbWlzZSdzIC50aGVuJ3MgdmFsdWVcIiwgZmFrZUFzeW5jRnVuY3Rpb24oYXN5bmMgKGRvbmU6IE1vY2hhRG9uZSkgPT4ge1xyXG4gICAgICAgIC8vIEFycmFuZ2VcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IFwidmFsdWVcIjtcclxuXHJcbiAgICAgICAgLy8gQWN0XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9ICQuRGVmZXJyZWQoKS5yZXNvbHZlKCkucHJvbWlzZSgpO1xyXG4gICAgICAgIGNvbnN0IGF3YWl0ZWQgPSBhd2FpdCBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEFzc2VydFxyXG4gICAgICAgIGV4cGVjdChhd2FpdGVkKS50by5iZS5lcXVhbCh2YWx1ZSk7XHJcbiAgICAgICAgZG9uZSgpO1xyXG4gICAgfSkpO1xyXG5cclxuXHJcbiAgICBpdChcInJldHVybnMgYW4gYXdhaXRlZCBwcm9taXNlJ3MgLnRoZW4gY2hhaW4ncyB2YWx1ZVwiLCBmYWtlQXN5bmNGdW5jdGlvbihhc3luYyAoZG9uZTogTW9jaGFEb25lKSA9PiB7XHJcbiAgICAgICAgLy8gQXJyYW5nZVxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gXCJ2YWx1ZVwiO1xyXG5cclxuICAgICAgICAvLyBBY3RcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gJC5EZWZlcnJlZCgpLnJlc29sdmUoKS5wcm9taXNlKCk7XHJcbiAgICAgICAgY29uc3QgYXdhaXRlZCA9IGF3YWl0IHByb21pc2VcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyB9KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBBc3NlcnRcclxuICAgICAgICBleHBlY3QoYXdhaXRlZCkudG8uYmUuZXF1YWwodmFsdWUpO1xyXG4gICAgICAgIGRvbmUoKTtcclxuICAgIH0pKTtcclxuXHJcbiAgICBpdChcInBhc3NlcyBhIHZhbHVlIHRocm91Z2ggYSBjaGFpbiBvZiB0d28gLnRoZW4gcGFzc2VzXCIsIGZha2VBc3luY0Z1bmN0aW9uKGFzeW5jIChkb25lOiBNb2NoYURvbmUpID0+IHtcclxuICAgICAgICAvLyBBcnJhbmdlXHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IFwidmFsdWVcIjtcclxuXHJcbiAgICAgICAgLy8gQWN0XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9ICQuRGVmZXJyZWQoKS5yZXNvbHZlKCkucHJvbWlzZSgpO1xyXG4gICAgICAgIGNvbnN0IGF3YWl0ZWQgPSBhd2FpdCBwcm9taXNlXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IG9yaWdpbmFsVmFsdWUpXHJcbiAgICAgICAgICAgIC50aGVuKHJlY2VpdmVkVmFsdWUgPT4gcmVjZWl2ZWRWYWx1ZSk7XHJcblxyXG4gICAgICAgIC8vIEFzc2VydFxyXG4gICAgICAgIGV4cGVjdChhd2FpdGVkKS50by5iZS5lcXVhbChvcmlnaW5hbFZhbHVlKTtcclxuICAgICAgICBkb25lKCk7XHJcbiAgICB9KSk7XHJcblxyXG4gICAgaXQoXCJwYXNzZXMgYSB2YWx1ZSB0aHJvdWdoIGEgY2hhaW4gb2YgdGhyZWUgLnRoZW4gcGFzc2VzXCIsIGZha2VBc3luY0Z1bmN0aW9uKGFzeW5jIChkb25lOiBNb2NoYURvbmUpID0+IHtcclxuICAgICAgICAvLyBBcnJhbmdlXHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IFwidmFsdWVcIjtcclxuXHJcbiAgICAgICAgLy8gQWN0XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9ICQuRGVmZXJyZWQoKS5yZXNvbHZlKCkucHJvbWlzZSgpO1xyXG4gICAgICAgIGNvbnN0IGF3YWl0ZWQgPSBhd2FpdCBwcm9taXNlXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IG9yaWdpbmFsVmFsdWUpXHJcbiAgICAgICAgICAgIC50aGVuKHJlY2VpdmVkVmFsdWUgPT4gcmVjZWl2ZWRWYWx1ZSlcclxuICAgICAgICAgICAgLnRoZW4ocmVjZWl2ZWRWYWx1ZSA9PiByZWNlaXZlZFZhbHVlKTtcclxuXHJcbiAgICAgICAgLy8gQXNzZXJ0XHJcbiAgICAgICAgZXhwZWN0KGF3YWl0ZWQpLnRvLmJlLmVxdWFsKG9yaWdpbmFsVmFsdWUpO1xyXG4gICAgICAgIGRvbmUoKTtcclxuICAgIH0pKTtcclxuXHJcbiAgICBpdChcIndhaXRzIG9uIGEgdGltZWQgcHJvbWlzZVwiLCBmYWtlQXN5bmNGdW5jdGlvbihhc3luYyAoZG9uZTogTW9jaGFEb25lKSA9PiB7XHJcbiAgICAgICAgLy8gQXJyYW5nZVxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gXCJ2YWx1ZVwiO1xyXG4gICAgICAgIGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xyXG5cclxuICAgICAgICAvLyBBY3RcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRlZmVycmVkLnJlc29sdmUodmFsdWUpLCAxMCk7XHJcbiAgICAgICAgY29uc3QgYXdhaXRlZCA9IGF3YWl0IGRlZmVycmVkLnByb21pc2UoKTtcclxuXHJcbiAgICAgICAgLy8gQXNzZXJ0XHJcbiAgICAgICAgZXhwZWN0KGF3YWl0ZWQpLnRvLmJlLmVxdWFsKHZhbHVlKTtcclxuICAgICAgICBkb25lKCk7XHJcbiAgICB9KSk7XHJcblxyXG4gICAgaXQoXCJ3YWl0cyBvbiB0d28gdGltZWQgcHJvbWlzZXNcIiwgZmFrZUFzeW5jRnVuY3Rpb24oYXN5bmMgKGRvbmU6IE1vY2hhRG9uZSkgPT4ge1xyXG4gICAgICAgIC8vIEFycmFuZ2VcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IFwidmFsdWVcIjtcclxuICAgICAgICBjb25zdCBkZWZlcnJlZEEgPSAkLkRlZmVycmVkKCk7XHJcbiAgICAgICAgY29uc3QgZGVmZXJyZWRCID0gJC5EZWZlcnJlZCgpO1xyXG5cclxuICAgICAgICAvLyBBY3RcclxuICAgICAgICBzZXRUaW1lb3V0KGRlZmVycmVkQS5yZXNvbHZlLCAxMCk7XHJcbiAgICAgICAgYXdhaXQgZGVmZXJyZWRBLnByb21pc2UoKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkZWZlcnJlZEIucmVzb2x2ZSh2YWx1ZSksIDIwKTtcclxuICAgICAgICBjb25zdCBhd2FpdGVkID0gYXdhaXQgZGVmZXJyZWRCLnByb21pc2UoKTtcclxuXHJcbiAgICAgICAgLy8gQXNzZXJ0XHJcbiAgICAgICAgZXhwZWN0KGF3YWl0ZWQpLnRvLmJlLmVxdWFsKHZhbHVlKTtcclxuICAgICAgICBkb25lKCk7XHJcbiAgICB9KSk7XHJcblxyXG4gICAgLy8gaXQoXCJjYXRjaGVzIGEgc3luY2hyb25vdXNseSB0aHJvd24gdmFsdWVcIiwgZmFrZUFzeW5jRnVuY3Rpb24oYXN5bmMgKGRvbmU6IE1vY2hhRG9uZSkgPT4ge1xyXG4gICAgLy8gICAgIC8vIEFycmFuZ2VcclxuICAgIC8vICAgICBjb25zdCBtZXNzYWdlID0gXCJUaGlzIHNob3VsZCBiZSBjYXVnaHQgc3luY2hyb25vdXNseVwiO1xyXG5cclxuICAgIC8vICAgICAvLyBBY3RcclxuICAgIC8vICAgICBjb25zdCBwcm9taXNlID0gJC5EZWZlcnJlZCgpLnJlc29sdmUoKS5wcm9taXNlKClcclxuICAgIC8vICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgLy8gQXNzZXJ0XHJcbiAgICAvLyAgICAgYXdhaXQgcHJvbWlzZS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAvLyAgICAgICAgIGV4cGVjdChlcnJvci5tZXNzYWdlKS50by5iZS5lcXVhbChtZXNzYWdlKTtcclxuICAgIC8vICAgICAgICAgZG9uZSgpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfSkpO1xyXG5cclxuICAgIC8vIGl0KFwiY2F0Y2hlcyBhIHN5bmNocm9ub3VzbHkgdGhyb3duIHZhbHVlIGFmdGVyIGEgY2hhaW5cIiwgZmFrZUFzeW5jRnVuY3Rpb24oYXN5bmMgKGRvbmU6IE1vY2hhRG9uZSkgPT4ge1xyXG4gICAgLy8gICAgIC8vIEFycmFuZ2VcclxuICAgIC8vICAgICBjb25zdCBtZXNzYWdlID0gXCJUaGlzIHNob3VsZCBiZSBjYXVnaHQgc3luY2hyb25vdXNseVwiO1xyXG5cclxuICAgIC8vICAgICAvLyBBY3RcclxuICAgIC8vICAgICBjb25zdCBwcm9taXNlID0gJC5EZWZlcnJlZCgpLnJlc29sdmUoKS5wcm9taXNlKClcclxuICAgIC8vICAgICAgICAgLnRoZW4oKCkgPT4ge30pXHJcbiAgICAvLyAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgIC8vICAgICAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgIC8vIEFzc2VydFxyXG4gICAgLy8gICAgIGF3YWl0IHByb21pc2UuY2F0Y2goZXJyb3IgPT4gZXhwZWN0KGVycm9yLm1lc3NhZ2UpLnRvLmJlLmVxdWFsKG1lc3NhZ2UpKTtcclxuICAgIC8vICAgICBkb25lKCk7XHJcbiAgICAvLyB9KSk7XHJcblxyXG4gICAgLy8gaXQoXCJjYXRjaGVzIGEgc3luY2hyb25vdXNseSB0aHJvd24gdmFsdWUgYmVmb3JlIGEgY2hhaW5cIiwgZmFrZUFzeW5jRnVuY3Rpb24oYXN5bmMgKGRvbmU6IE1vY2hhRG9uZSkgPT4ge1xyXG4gICAgLy8gICAgIC8vIEFycmFuZ2VcclxuICAgIC8vICAgICBjb25zdCBtZXNzYWdlID0gXCJUaGlzIHNob3VsZCBiZSBjYXVnaHQgc3luY2hyb25vdXNseVwiO1xyXG5cclxuICAgIC8vICAgICAvLyBBY3RcclxuICAgIC8vICAgICBjb25zdCBwcm9taXNlID0gJC5EZWZlcnJlZCgpLnJlc29sdmUoKS5wcm9taXNlKClcclxuICAgIC8vICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAudGhlbigoKSA9PiB7fSk7XHJcblxyXG4gICAgLy8gICAgIC8vIEFzc2VydFxyXG4gICAgLy8gICAgIGF3YWl0IHByb21pc2UuY2F0Y2goZXJyb3IgPT4gZXhwZWN0KGVycm9yLm1lc3NhZ2UpLnRvLmJlLmVxdWFsKG1lc3NhZ2UpKTtcclxuICAgIC8vICAgICBkb25lKCk7XHJcbiAgICAvLyB9KSk7XHJcblxyXG4gICAgaXQoXCJjYXRjaGVzIGFuIGFzeW5jaHJvbm91c2x5IHRocm93biB2YWx1ZVwiLCBmYWtlQXN5bmNGdW5jdGlvbihhc3luYyAoZG9uZTogTW9jaGFEb25lKSA9PiB7XHJcbiAgICAgICAgLy8gQXJyYW5nZVxyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBcIlRoaXMgc2hvdWxkIGJlIGNhdWdodCBhc3luY2hyb25vdXNseVwiO1xyXG5cclxuICAgICAgICAvLyBBY3RcclxuICAgICAgICBjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZGVmZXJyZWQucHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZGVmZXJyZWQucmVzb2x2ZSk7XHJcblxyXG4gICAgICAgIC8vIEFzc2VydFxyXG4gICAgICAgIGF3YWl0IHByb21pc2UuZmFpbChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGV4cGVjdChlcnJvci5tZXNzYWdlKS50by5iZS5lcXVhbChtZXNzYWdlKTtcclxuICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSkpO1xyXG5cclxuICAgIC8vIGl0KFwiY2F0Y2hlcyBhbiBhc3luY2hyb25vdXNseSB0aHJvd24gdmFsdWUgYmVmb3JlIGEgY2hhaW5cIiwgZmFrZUFzeW5jRnVuY3Rpb24oYXN5bmMgKGRvbmU6IE1vY2hhRG9uZSkgPT4ge1xyXG4gICAgLy8gICAgIC8vIEFycmFuZ2VcclxuICAgIC8vICAgICBjb25zdCBtZXNzYWdlID0gXCJUaGlzIHNob3VsZCBiZSBjYXVnaHQgYXN5bmNocm9ub3VzbHlcIjtcclxuXHJcbiAgICAvLyAgICAgLy8gQWN0XHJcbiAgICAvLyAgICAgY29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XHJcbiAgICAvLyAgICAgY29uc3QgcHJvbWlzZSA9IGRlZmVycmVkLnByb21pc2UoKVxyXG4gICAgLy8gICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIC50aGVuKCgpID0+IHt9KTtcclxuXHJcbiAgICAvLyAgICAgc2V0VGltZW91dChkZWZlcnJlZC5yZXNvbHZlKTtcclxuXHJcbiAgICAvLyAgICAgLy8gQXNzZXJ0XHJcbiAgICAvLyAgICAgYXdhaXQgcHJvbWlzZVxyXG4gICAgLy8gICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY2hhaS5leHBlY3QoZXJyb3IubWVzc2FnZSkudG8uYmUuZXF1YWwobWVzc2FnZSkpO1xyXG4gICAgLy8gICAgIGRvbmUoKTtcclxuICAgIC8vIH0pKTtcclxuXHJcbiAgICAvLyBpdChcImNhdGNoZXMgYW4gYXN5bmNocm9ub3VzbHkgdGhyb3duIHZhbHVlIGFmdGVyIGEgY2hhaW5cIiwgZmFrZUFzeW5jRnVuY3Rpb24oYXN5bmMgKGRvbmU6IE1vY2hhRG9uZSkgPT4ge1xyXG4gICAgLy8gICAgIC8vIEFycmFuZ2VcclxuICAgIC8vICAgICBjb25zdCBtZXNzYWdlID0gXCJUaGlzIHNob3VsZCBiZSBjYXVnaHQgYXN5bmNocm9ub3VzbHlcIjtcclxuXHJcbiAgICAvLyAgICAgLy8gQWN0XHJcbiAgICAvLyAgICAgY29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XHJcbiAgICAvLyAgICAgY29uc3QgcHJvbWlzZSA9IGRlZmVycmVkLnByb21pc2UoKVxyXG4gICAgLy8gICAgICAgICAudGhlbigoKSA9PiB7fSlcclxuICAgIC8vICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgc2V0VGltZW91dChkZWZlcnJlZC5yZXNvbHZlKTtcclxuXHJcbiAgICAvLyAgICAgLy8gQXNzZXJ0XHJcbiAgICAvLyAgICAgYXdhaXQgcHJvbWlzZVxyXG4gICAgLy8gICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY2hhaS5leHBlY3QoZXJyb3IubWVzc2FnZSkudG8uYmUuZXF1YWwobWVzc2FnZSkpO1xyXG4gICAgLy8gICAgIGRvbmUoKTtcclxuICAgIC8vIH0pKTtcclxuXHJcbiAgICAvLyBpdChcImNhdGNoZXMgYSBzZWNvbmQgdGhyb3duIGVycm9yIGFmdGVyIGEgZmlyc3QgdGhyb3duIGVycm9yXCIsIGZha2VBc3luY0Z1bmN0aW9uKGFzeW5jIChkb25lOiBNb2NoYURvbmUpID0+IHtcclxuICAgIC8vICAgICAvLyBBcnJhbmdlXHJcbiAgICAvLyAgICAgY29uc3QgZmlyc3RNZXNzYWdlID0gXCJUaGlzIHNob3VsZCBiZSBjYXVnaHQgZmlyc3RcIjtcclxuICAgIC8vICAgICBjb25zdCBzZWNvbmRNZXNzYWdlID0gXCJUaGlzIHNob3VsZCBiZSBjYXVnaHQgc2Vjb25kXCI7XHJcblxyXG4gICAgLy8gICAgIC8vIEFjdFxyXG4gICAgLy8gICAgIGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xyXG4gICAgLy8gICAgIGNvbnN0IHByb21pc2UgPSBkZWZlcnJlZC5wcm9taXNlKClcclxuICAgIC8vICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGZpcnN0TWVzc2FnZSk7XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBleHBlY3QoZXJyb3IubWVzc2FnZSkudG8uYmUuZXF1YWwoZmlyc3RNZXNzYWdlKTtcclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHNlY29uZE1lc3NhZ2UpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgc2V0VGltZW91dChkZWZlcnJlZC5yZXNvbHZlKTtcclxuXHJcbiAgICAvLyAgICAgLy8gQXNzZXJ0XHJcbiAgICAvLyAgICAgYXdhaXQgcHJvbWlzZVxyXG4gICAgLy8gICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY2hhaS5leHBlY3QoZXJyb3IubWVzc2FnZSkudG8uYmUuZXF1YWwoc2Vjb25kTWVzc2FnZSkpO1xyXG4gICAgLy8gICAgIGRvbmUoKTtcclxuICAgIC8vIH0pKTtcclxuXHJcbiAgICAvLyBpdChcInJldHVybnMgdGhyb3VnaCBhIGNoYWluIGFmdGVyIGNhdGNoaW5nIGFuIGVycm9yXCIsIGZha2VBc3luY0Z1bmN0aW9uKGFzeW5jIChkb25lOiBNb2NoYURvbmUpID0+IHtcclxuICAgIC8vICAgICAvLyBBcnJhbmdlXHJcbiAgICAvLyAgICAgY29uc3QgdmFsdWUgPSBcInZhbHVlXCI7XHJcblxyXG4gICAgLy8gICAgIC8vIEFjdFxyXG4gICAgLy8gICAgIGNvbnN0IHByb21pc2UgPSAkLkRlZmVycmVkKClcclxuICAgIC8vICAgICAgICAgLnJlc29sdmUoKVxyXG4gICAgLy8gICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLmNhdGNoKCgpID0+IHt9KVxyXG4gICAgLy8gICAgICAgICAudGhlbigoKSA9PiB2YWx1ZSlcclxuICAgIC8vICAgICAgICAgLnByb21pc2UoKTtcclxuXHJcbiAgICAvLyAgICAgY29uc3QgYXdhaXRlZCA9IGF3YWl0IHByb21pc2U7XHJcblxyXG4gICAgLy8gICAgIC8vIEFzc2VydFxyXG4gICAgLy8gICAgIGV4cGVjdChhd2FpdGVkKS50by5iZS5lcXVhbCh2YWx1ZSk7XHJcbiAgICAvLyAgICAgZG9uZSgpO1xyXG4gICAgLy8gfSkpO1xyXG5cclxuICAgIC8vIGl0KFwicmV0dXJucyB0aHJvdWdoIGEgY2hhaW4gYWZ0ZXIgY2F0Y2hpbmcgdHdvIGVycm9yc1wiLCBmYWtlQXN5bmNGdW5jdGlvbihhc3luYyAoZG9uZTogTW9jaGFEb25lKSA9PiB7XHJcbiAgICAvLyAgICAgLy8gQXJyYW5nZVxyXG4gICAgLy8gICAgIGNvbnN0IHZhbHVlID0gXCJ2YWx1ZVwiO1xyXG5cclxuICAgIC8vICAgICAvLyBBY3RcclxuICAgIC8vICAgICBjb25zdCBwcm9taXNlID0gJC5EZWZlcnJlZCgpXHJcbiAgICAvLyAgICAgICAgIC5yZXNvbHZlKClcclxuICAgIC8vICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIC5jYXRjaCgoKSA9PiB7fSlcclxuICAgIC8vICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIC5jYXRjaCgoKSA9PiB7fSlcclxuICAgIC8vICAgICAgICAgLnRoZW4oKCkgPT4gdmFsdWUpXHJcbiAgICAvLyAgICAgICAgIC5wcm9taXNlKCk7XHJcblxyXG4gICAgLy8gICAgIGNvbnN0IGF3YWl0ZWQgPSBhd2FpdCBwcm9taXNlO1xyXG5cclxuICAgIC8vICAgICAvLyBBc3NlcnRcclxuICAgIC8vICAgICBleHBlY3QoYXdhaXRlZCkudG8uYmUuZXF1YWwodmFsdWUpO1xyXG4gICAgLy8gICAgIGRvbmUoKTtcclxuICAgIC8vIH0pKTtcclxuXHJcbiAgICAvLyBpdChcInJldHVybnMgdGhyb3VnaCBhIGNhdWdodCBlcnJvciBpbiBhIHRyeS9jYXRjaCBibG9ja1wiLCBmYWtlQXN5bmNGdW5jdGlvbihhc3luYyAoZG9uZTogTW9jaGFEb25lKSA9PiB7XHJcbiAgICAvLyAgICAgLy8gQXJyYW5nZVxyXG4gICAgLy8gICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKCk7XHJcbiAgICAvLyAgICAgbGV0IGNhdWdodEVycm9yO1xyXG5cclxuICAgIC8vICAgICAvLyBBY3RcclxuICAgIC8vICAgICB0cnkge1xyXG4gICAgLy8gICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gICAgICAgICBjYXVnaHRFcnJvciA9IGVycm9yO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgLy8gQXNzZXJ0XHJcbiAgICAvLyAgICAgZXhwZWN0KGNhdWdodEVycm9yKS50by5iZS5lcXVhbChlcnJvcik7XHJcbiAgICAvLyAgICAgZG9uZSgpO1xyXG4gICAgLy8gfSkpO1xyXG59KTtcclxuXHJcbi8vIGRlc2NyaWJlKFwiYXN5bmMvYXdhaXRcIiwgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgdGhpcy50aW1lb3V0KDM1MCk7XHJcblxyXG5cclxuLy8gfSk7XHJcblxyXG5tb2NoYS5ydW4oKTtcclxuIl19
