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
describe("Promise", function () {
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
                    return [4 /*yield*/, Promise.resolve()
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
                    promise = Promise.resolve(value);
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
});
// describe("jQueryPromise", function () {
//     this.timeout(350);
// it("executes in the correct order", fakeAsyncFunction(async (done: MochaDone) => {
//     // Arrange
//     const order = [];
//     // Act
//     order.push(1);
//     await $.Deferred().resolve().promise()
//         .then(() => {
//             order.push(2);
//         });
//     order.push(3);
//     // Assert
//     expect(order).to.be.deep.equal([1,2,3]);
//     done();
// }));
// it("returns an awaited value", fakeAsyncFunction(async (done: MochaDone) => {
//     // Arrange
//     const value = "value";
//     // Act
//     const promise = $.Deferred().resolve(value).promise();
//     const awaited = await promise;
//     // Assert
//     expect(awaited).to.be.equal(value);
//     done();
// }));
// it("returns an awaited promise's .then's value", fakeAsyncFunction(async (done: MochaDone) => {
//     // Arrange
//     const value = "value";
//     // Act
//     const promise = $.Deferred().resolve().promise();
//     const awaited = await promise.then(function () {
//         return value;
//     });
//     // Assert
//     expect(awaited).to.be.equal(value);
//     done();
// }));
// it("returns an awaited promise's .then chain's value", fakeAsyncFunction(async (done: MochaDone) => {
//     // Arrange
//     const value = "value";
//     // Act
//     const promise = $.Deferred().resolve().promise();
//     const awaited = await promise
//         .then(function () { })
//         .then(function () {
//             return value;
//         });
//     // Assert
//     expect(awaited).to.be.equal(value);
//     done();
// }));
// it("passes a value through a chain of two .then passes", fakeAsyncFunction(async (done: MochaDone) => {
//     // Arrange
//     const originalValue = "value";
//     // Act
//     const promise = $.Deferred().resolve().promise();
//     const awaited = await promise
//         .then(() => originalValue)
//         .then(receivedValue => receivedValue);
//     // Assert
//     expect(awaited).to.be.equal(originalValue);
//     done();
// }));
// it("passes a value through a chain of three .then passes", fakeAsyncFunction(async (done: MochaDone) => {
//     // Arrange
//     const originalValue = "value";
//     // Act
//     const promise = $.Deferred().resolve().promise();
//     const awaited = await promise
//         .then(() => originalValue)
//         .then(receivedValue => receivedValue)
//         .then(receivedValue => receivedValue);
//     // Assert
//     expect(awaited).to.be.equal(originalValue);
//     done();
// }));
// it("waits on a timed promise", fakeAsyncFunction(async (done: MochaDone) => {
//     // Arrange
//     const value = "value";
//     const deferred = $.Deferred();
//     // Act
//     setTimeout(() => deferred.resolve(value), 10);
//     const awaited = await deferred.promise();
//     // Assert
//     expect(awaited).to.be.equal(value);
//     done();
// }));
// it("waits on two timed promises", fakeAsyncFunction(async (done: MochaDone) => {
//     // Arrange
//     const value = "value";
//     const deferredA = $.Deferred();
//     const deferredB = $.Deferred();
//     // Act
//     setTimeout(deferredA.resolve, 10);
//     await deferredA.promise();
//     setTimeout(() => deferredB.resolve(value), 20);
//     const awaited = await deferredB.promise();
//     // Assert
//     expect(awaited).to.be.equal(value);
//     done();
// }));
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
// it("catches an asynchronously thrown value", fakeAsyncFunction(async (done: MochaDone) => {
//     // Arrange
//     const message = "This should be caught asynchronously";
//     // Act
//     const deferred = $.Deferred();
//     const promise = deferred.promise()
//         .then(() => {
//             throw new Error(message);
//         });
//     setTimeout(deferred.resolve);
//     // Assert
//     await promise.catch(error => {
//         expect(error.message).to.be.equal(message);
//         done();
//     });
// }));
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
// });
mocha.run();

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFDYiw0QkFBNEI7QUFDNUIsK0RBQStEO0FBQy9ELGFBQWE7QUFDYix3QkFBd0I7QUFDeEIsOENBQThDO0FBQzlDLGNBQWM7QUFFZCxvQ0FBb0M7QUFFcEMsZ0JBQWdCO0FBQ2hCLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYsY0FBYztBQUNkLE9BQU87QUFFUCx1R0FBdUc7QUFDdkcsaUJBQWlCO0FBQ2pCLDZCQUE2QjtBQUU3QixhQUFhO0FBQ2IsbUNBQW1DO0FBQ25DLHFCQUFxQjtBQUNyQix3QkFBd0I7QUFDeEIsaUNBQWlDO0FBQ2pDLGFBQWE7QUFDYiwyQkFBMkI7QUFDM0IsNkJBQTZCO0FBQzdCLHNCQUFzQjtBQUV0QixxQ0FBcUM7QUFFckMsZ0JBQWdCO0FBQ2hCLDBDQUEwQztBQUMxQyxjQUFjO0FBQ2QsT0FBTztBQUVQLHlHQUF5RztBQUN6RyxpQkFBaUI7QUFDakIsNkJBQTZCO0FBRTdCLGFBQWE7QUFDYixtQ0FBbUM7QUFDbkMscUJBQXFCO0FBQ3JCLHdCQUF3QjtBQUN4QixpQ0FBaUM7QUFDakMsYUFBYTtBQUNiLDJCQUEyQjtBQUMzQix3QkFBd0I7QUFDeEIsaUNBQWlDO0FBQ2pDLGFBQWE7QUFDYiwyQkFBMkI7QUFDM0IsNkJBQTZCO0FBQzdCLHNCQUFzQjtBQUV0QixxQ0FBcUM7QUFFckMsZ0JBQWdCO0FBQ2hCLDBDQUEwQztBQUMxQyxjQUFjO0FBQ2QsT0FBTztBQUVQLDJHQUEyRztBQUMzRyxpQkFBaUI7QUFDakIsaUNBQWlDO0FBQ2pDLHVCQUF1QjtBQUV2QixhQUFhO0FBQ2IsWUFBWTtBQUNaLHVCQUF1QjtBQUN2Qix3QkFBd0I7QUFDeEIsK0JBQStCO0FBQy9CLFFBQVE7QUFFUixnQkFBZ0I7QUFDaEIsOENBQThDO0FBQzlDLGNBQWM7QUFDZCxPQUFPO0FBQ1gsTUFBTTtBQUVOLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyIsImZpbGUiOiJ0ZXN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cGVjdCA9IGNoYWkuZXhwZWN0O1xyXG5cclxubW9jaGEuc2V0dXAoXCJiZGRcIik7XHJcblxyXG5pbnRlcmZhY2UgSlF1ZXJ5UHJvbWlzZTxUPiB7XHJcbiAgICBjYXRjaChlcnJvcjogYW55KTogdGhpcztcclxufVxyXG5cclxuZnVuY3Rpb24gZmFrZUFzeW5jRnVuY3Rpb24odGVzdDogKGRvbmU6IE1vY2hhRG9uZSkgPT4gUHJvbWlzZTx2b2lkPik6IChkb25lOiBNb2NoYURvbmUpID0+IHZvaWQge1xyXG4gICAgcmV0dXJuIChkb25lOiBNb2NoYURvbmUpOiB2b2lkID0+IHtcclxuICAgICAgICB0ZXN0KGRvbmUpLmNhdGNoKGRvbmUpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZGVzY3JpYmUoXCJQcm9taXNlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMudGltZW91dCgzNTApO1xyXG5cclxuICAgIGl0KFwiZXhlY3V0ZXMgaW4gdGhlIGNvcnJlY3Qgb3JkZXJcIiwgZmFrZUFzeW5jRnVuY3Rpb24oYXN5bmMgKGRvbmU6IE1vY2hhRG9uZSkgPT4ge1xyXG4gICAgICAgIC8vIEFycmFuZ2VcclxuICAgICAgICBjb25zdCBvcmRlciA9IFtdO1xyXG5cclxuICAgICAgICAvLyBBY3RcclxuICAgICAgICBvcmRlci5wdXNoKDEpO1xyXG4gICAgICAgIGF3YWl0IFByb21pc2UucmVzb2x2ZSgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG9yZGVyLnB1c2goMik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIG9yZGVyLnB1c2goMyk7XHJcblxyXG4gICAgICAgIC8vIEFzc2VydFxyXG4gICAgICAgIGV4cGVjdChvcmRlcikudG8uYmUuZGVlcC5lcXVhbChbMSwyLDNdKTtcclxuICAgICAgICBkb25lKCk7XHJcbiAgICB9KSk7XHJcblxyXG4gICAgaXQoXCJyZXR1cm5zIGFuIGF3YWl0ZWQgdmFsdWVcIiwgZmFrZUFzeW5jRnVuY3Rpb24oYXN5bmMgKGRvbmU6IE1vY2hhRG9uZSkgPT4ge1xyXG4gICAgICAgIC8vIEFycmFuZ2VcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IFwidmFsdWVcIjtcclxuXHJcbiAgICAgICAgLy8gQWN0XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgYXdhaXRlZCA9IGF3YWl0IHByb21pc2U7XHJcblxyXG4gICAgICAgIC8vIEFzc2VydFxyXG4gICAgICAgIGV4cGVjdChhd2FpdGVkKS50by5iZS5lcXVhbCh2YWx1ZSk7XHJcbiAgICAgICAgZG9uZSgpO1xyXG4gICAgfSkpO1xyXG59KTtcclxuXHJcbi8vIGRlc2NyaWJlKFwialF1ZXJ5UHJvbWlzZVwiLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICB0aGlzLnRpbWVvdXQoMzUwKTtcclxuXHJcbiAgICAvLyBpdChcImV4ZWN1dGVzIGluIHRoZSBjb3JyZWN0IG9yZGVyXCIsIGZha2VBc3luY0Z1bmN0aW9uKGFzeW5jIChkb25lOiBNb2NoYURvbmUpID0+IHtcclxuICAgIC8vICAgICAvLyBBcnJhbmdlXHJcbiAgICAvLyAgICAgY29uc3Qgb3JkZXIgPSBbXTtcclxuXHJcbiAgICAvLyAgICAgLy8gQWN0XHJcbiAgICAvLyAgICAgb3JkZXIucHVzaCgxKTtcclxuICAgIC8vICAgICBhd2FpdCAkLkRlZmVycmVkKCkucmVzb2x2ZSgpLnByb21pc2UoKVxyXG4gICAgLy8gICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBvcmRlci5wdXNoKDIpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vICAgICBvcmRlci5wdXNoKDMpO1xyXG5cclxuICAgIC8vICAgICAvLyBBc3NlcnRcclxuICAgIC8vICAgICBleHBlY3Qob3JkZXIpLnRvLmJlLmRlZXAuZXF1YWwoWzEsMiwzXSk7XHJcbiAgICAvLyAgICAgZG9uZSgpO1xyXG4gICAgLy8gfSkpO1xyXG5cclxuICAgIC8vIGl0KFwicmV0dXJucyBhbiBhd2FpdGVkIHZhbHVlXCIsIGZha2VBc3luY0Z1bmN0aW9uKGFzeW5jIChkb25lOiBNb2NoYURvbmUpID0+IHtcclxuICAgIC8vICAgICAvLyBBcnJhbmdlXHJcbiAgICAvLyAgICAgY29uc3QgdmFsdWUgPSBcInZhbHVlXCI7XHJcblxyXG4gICAgLy8gICAgIC8vIEFjdFxyXG4gICAgLy8gICAgIGNvbnN0IHByb21pc2UgPSAkLkRlZmVycmVkKCkucmVzb2x2ZSh2YWx1ZSkucHJvbWlzZSgpO1xyXG4gICAgLy8gICAgIGNvbnN0IGF3YWl0ZWQgPSBhd2FpdCBwcm9taXNlO1xyXG5cclxuICAgIC8vICAgICAvLyBBc3NlcnRcclxuICAgIC8vICAgICBleHBlY3QoYXdhaXRlZCkudG8uYmUuZXF1YWwodmFsdWUpO1xyXG4gICAgLy8gICAgIGRvbmUoKTtcclxuICAgIC8vIH0pKTtcclxuXHJcbiAgICAvLyBpdChcInJldHVybnMgYW4gYXdhaXRlZCBwcm9taXNlJ3MgLnRoZW4ncyB2YWx1ZVwiLCBmYWtlQXN5bmNGdW5jdGlvbihhc3luYyAoZG9uZTogTW9jaGFEb25lKSA9PiB7XHJcbiAgICAvLyAgICAgLy8gQXJyYW5nZVxyXG4gICAgLy8gICAgIGNvbnN0IHZhbHVlID0gXCJ2YWx1ZVwiO1xyXG5cclxuICAgIC8vICAgICAvLyBBY3RcclxuICAgIC8vICAgICBjb25zdCBwcm9taXNlID0gJC5EZWZlcnJlZCgpLnJlc29sdmUoKS5wcm9taXNlKCk7XHJcbiAgICAvLyAgICAgY29uc3QgYXdhaXRlZCA9IGF3YWl0IHByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgLy8gQXNzZXJ0XHJcbiAgICAvLyAgICAgZXhwZWN0KGF3YWl0ZWQpLnRvLmJlLmVxdWFsKHZhbHVlKTtcclxuICAgIC8vICAgICBkb25lKCk7XHJcbiAgICAvLyB9KSk7XHJcblxyXG4gICAgLy8gaXQoXCJyZXR1cm5zIGFuIGF3YWl0ZWQgcHJvbWlzZSdzIC50aGVuIGNoYWluJ3MgdmFsdWVcIiwgZmFrZUFzeW5jRnVuY3Rpb24oYXN5bmMgKGRvbmU6IE1vY2hhRG9uZSkgPT4ge1xyXG4gICAgLy8gICAgIC8vIEFycmFuZ2VcclxuICAgIC8vICAgICBjb25zdCB2YWx1ZSA9IFwidmFsdWVcIjtcclxuXHJcbiAgICAvLyAgICAgLy8gQWN0XHJcbiAgICAvLyAgICAgY29uc3QgcHJvbWlzZSA9ICQuRGVmZXJyZWQoKS5yZXNvbHZlKCkucHJvbWlzZSgpO1xyXG4gICAgLy8gICAgIGNvbnN0IGF3YWl0ZWQgPSBhd2FpdCBwcm9taXNlXHJcbiAgICAvLyAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgfSlcclxuICAgIC8vICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgLy8gQXNzZXJ0XHJcbiAgICAvLyAgICAgZXhwZWN0KGF3YWl0ZWQpLnRvLmJlLmVxdWFsKHZhbHVlKTtcclxuICAgIC8vICAgICBkb25lKCk7XHJcbiAgICAvLyB9KSk7XHJcblxyXG4gICAgLy8gaXQoXCJwYXNzZXMgYSB2YWx1ZSB0aHJvdWdoIGEgY2hhaW4gb2YgdHdvIC50aGVuIHBhc3Nlc1wiLCBmYWtlQXN5bmNGdW5jdGlvbihhc3luYyAoZG9uZTogTW9jaGFEb25lKSA9PiB7XHJcbiAgICAvLyAgICAgLy8gQXJyYW5nZVxyXG4gICAgLy8gICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBcInZhbHVlXCI7XHJcblxyXG4gICAgLy8gICAgIC8vIEFjdFxyXG4gICAgLy8gICAgIGNvbnN0IHByb21pc2UgPSAkLkRlZmVycmVkKCkucmVzb2x2ZSgpLnByb21pc2UoKTtcclxuICAgIC8vICAgICBjb25zdCBhd2FpdGVkID0gYXdhaXQgcHJvbWlzZVxyXG4gICAgLy8gICAgICAgICAudGhlbigoKSA9PiBvcmlnaW5hbFZhbHVlKVxyXG4gICAgLy8gICAgICAgICAudGhlbihyZWNlaXZlZFZhbHVlID0+IHJlY2VpdmVkVmFsdWUpO1xyXG5cclxuICAgIC8vICAgICAvLyBBc3NlcnRcclxuICAgIC8vICAgICBleHBlY3QoYXdhaXRlZCkudG8uYmUuZXF1YWwob3JpZ2luYWxWYWx1ZSk7XHJcbiAgICAvLyAgICAgZG9uZSgpO1xyXG4gICAgLy8gfSkpO1xyXG5cclxuICAgIC8vIGl0KFwicGFzc2VzIGEgdmFsdWUgdGhyb3VnaCBhIGNoYWluIG9mIHRocmVlIC50aGVuIHBhc3Nlc1wiLCBmYWtlQXN5bmNGdW5jdGlvbihhc3luYyAoZG9uZTogTW9jaGFEb25lKSA9PiB7XHJcbiAgICAvLyAgICAgLy8gQXJyYW5nZVxyXG4gICAgLy8gICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBcInZhbHVlXCI7XHJcblxyXG4gICAgLy8gICAgIC8vIEFjdFxyXG4gICAgLy8gICAgIGNvbnN0IHByb21pc2UgPSAkLkRlZmVycmVkKCkucmVzb2x2ZSgpLnByb21pc2UoKTtcclxuICAgIC8vICAgICBjb25zdCBhd2FpdGVkID0gYXdhaXQgcHJvbWlzZVxyXG4gICAgLy8gICAgICAgICAudGhlbigoKSA9PiBvcmlnaW5hbFZhbHVlKVxyXG4gICAgLy8gICAgICAgICAudGhlbihyZWNlaXZlZFZhbHVlID0+IHJlY2VpdmVkVmFsdWUpXHJcbiAgICAvLyAgICAgICAgIC50aGVuKHJlY2VpdmVkVmFsdWUgPT4gcmVjZWl2ZWRWYWx1ZSk7XHJcblxyXG4gICAgLy8gICAgIC8vIEFzc2VydFxyXG4gICAgLy8gICAgIGV4cGVjdChhd2FpdGVkKS50by5iZS5lcXVhbChvcmlnaW5hbFZhbHVlKTtcclxuICAgIC8vICAgICBkb25lKCk7XHJcbiAgICAvLyB9KSk7XHJcblxyXG4gICAgLy8gaXQoXCJ3YWl0cyBvbiBhIHRpbWVkIHByb21pc2VcIiwgZmFrZUFzeW5jRnVuY3Rpb24oYXN5bmMgKGRvbmU6IE1vY2hhRG9uZSkgPT4ge1xyXG4gICAgLy8gICAgIC8vIEFycmFuZ2VcclxuICAgIC8vICAgICBjb25zdCB2YWx1ZSA9IFwidmFsdWVcIjtcclxuICAgIC8vICAgICBjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcclxuXHJcbiAgICAvLyAgICAgLy8gQWN0XHJcbiAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiBkZWZlcnJlZC5yZXNvbHZlKHZhbHVlKSwgMTApO1xyXG4gICAgLy8gICAgIGNvbnN0IGF3YWl0ZWQgPSBhd2FpdCBkZWZlcnJlZC5wcm9taXNlKCk7XHJcblxyXG4gICAgLy8gICAgIC8vIEFzc2VydFxyXG4gICAgLy8gICAgIGV4cGVjdChhd2FpdGVkKS50by5iZS5lcXVhbCh2YWx1ZSk7XHJcbiAgICAvLyAgICAgZG9uZSgpO1xyXG4gICAgLy8gfSkpO1xyXG5cclxuICAgIC8vIGl0KFwid2FpdHMgb24gdHdvIHRpbWVkIHByb21pc2VzXCIsIGZha2VBc3luY0Z1bmN0aW9uKGFzeW5jIChkb25lOiBNb2NoYURvbmUpID0+IHtcclxuICAgIC8vICAgICAvLyBBcnJhbmdlXHJcbiAgICAvLyAgICAgY29uc3QgdmFsdWUgPSBcInZhbHVlXCI7XHJcbiAgICAvLyAgICAgY29uc3QgZGVmZXJyZWRBID0gJC5EZWZlcnJlZCgpO1xyXG4gICAgLy8gICAgIGNvbnN0IGRlZmVycmVkQiA9ICQuRGVmZXJyZWQoKTtcclxuXHJcbiAgICAvLyAgICAgLy8gQWN0XHJcbiAgICAvLyAgICAgc2V0VGltZW91dChkZWZlcnJlZEEucmVzb2x2ZSwgMTApO1xyXG4gICAgLy8gICAgIGF3YWl0IGRlZmVycmVkQS5wcm9taXNlKCk7XHJcblxyXG4gICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4gZGVmZXJyZWRCLnJlc29sdmUodmFsdWUpLCAyMCk7XHJcbiAgICAvLyAgICAgY29uc3QgYXdhaXRlZCA9IGF3YWl0IGRlZmVycmVkQi5wcm9taXNlKCk7XHJcblxyXG4gICAgLy8gICAgIC8vIEFzc2VydFxyXG4gICAgLy8gICAgIGV4cGVjdChhd2FpdGVkKS50by5iZS5lcXVhbCh2YWx1ZSk7XHJcbiAgICAvLyAgICAgZG9uZSgpO1xyXG4gICAgLy8gfSkpO1xyXG5cclxuICAgIC8vIGl0KFwiY2F0Y2hlcyBhIHN5bmNocm9ub3VzbHkgdGhyb3duIHZhbHVlXCIsIGZha2VBc3luY0Z1bmN0aW9uKGFzeW5jIChkb25lOiBNb2NoYURvbmUpID0+IHtcclxuICAgIC8vICAgICAvLyBBcnJhbmdlXHJcbiAgICAvLyAgICAgY29uc3QgbWVzc2FnZSA9IFwiVGhpcyBzaG91bGQgYmUgY2F1Z2h0IHN5bmNocm9ub3VzbHlcIjtcclxuXHJcbiAgICAvLyAgICAgLy8gQWN0XHJcbiAgICAvLyAgICAgY29uc3QgcHJvbWlzZSA9ICQuRGVmZXJyZWQoKS5yZXNvbHZlKCkucHJvbWlzZSgpXHJcbiAgICAvLyAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgIC8vICAgICAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgIC8vIEFzc2VydFxyXG4gICAgLy8gICAgIGF3YWl0IHByb21pc2UuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgLy8gICAgICAgICBleHBlY3QoZXJyb3IubWVzc2FnZSkudG8uYmUuZXF1YWwobWVzc2FnZSk7XHJcbiAgICAvLyAgICAgICAgIGRvbmUoKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH0pKTtcclxuXHJcbiAgICAvLyBpdChcImNhdGNoZXMgYSBzeW5jaHJvbm91c2x5IHRocm93biB2YWx1ZSBhZnRlciBhIGNoYWluXCIsIGZha2VBc3luY0Z1bmN0aW9uKGFzeW5jIChkb25lOiBNb2NoYURvbmUpID0+IHtcclxuICAgIC8vICAgICAvLyBBcnJhbmdlXHJcbiAgICAvLyAgICAgY29uc3QgbWVzc2FnZSA9IFwiVGhpcyBzaG91bGQgYmUgY2F1Z2h0IHN5bmNocm9ub3VzbHlcIjtcclxuXHJcbiAgICAvLyAgICAgLy8gQWN0XHJcbiAgICAvLyAgICAgY29uc3QgcHJvbWlzZSA9ICQuRGVmZXJyZWQoKS5yZXNvbHZlKCkucHJvbWlzZSgpXHJcbiAgICAvLyAgICAgICAgIC50aGVuKCgpID0+IHt9KVxyXG4gICAgLy8gICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG5cclxuICAgIC8vICAgICAvLyBBc3NlcnRcclxuICAgIC8vICAgICBhd2FpdCBwcm9taXNlLmNhdGNoKGVycm9yID0+IGV4cGVjdChlcnJvci5tZXNzYWdlKS50by5iZS5lcXVhbChtZXNzYWdlKSk7XHJcbiAgICAvLyAgICAgZG9uZSgpO1xyXG4gICAgLy8gfSkpO1xyXG5cclxuICAgIC8vIGl0KFwiY2F0Y2hlcyBhIHN5bmNocm9ub3VzbHkgdGhyb3duIHZhbHVlIGJlZm9yZSBhIGNoYWluXCIsIGZha2VBc3luY0Z1bmN0aW9uKGFzeW5jIChkb25lOiBNb2NoYURvbmUpID0+IHtcclxuICAgIC8vICAgICAvLyBBcnJhbmdlXHJcbiAgICAvLyAgICAgY29uc3QgbWVzc2FnZSA9IFwiVGhpcyBzaG91bGQgYmUgY2F1Z2h0IHN5bmNocm9ub3VzbHlcIjtcclxuXHJcbiAgICAvLyAgICAgLy8gQWN0XHJcbiAgICAvLyAgICAgY29uc3QgcHJvbWlzZSA9ICQuRGVmZXJyZWQoKS5yZXNvbHZlKCkucHJvbWlzZSgpXHJcbiAgICAvLyAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLnRoZW4oKCkgPT4ge30pO1xyXG5cclxuICAgIC8vICAgICAvLyBBc3NlcnRcclxuICAgIC8vICAgICBhd2FpdCBwcm9taXNlLmNhdGNoKGVycm9yID0+IGV4cGVjdChlcnJvci5tZXNzYWdlKS50by5iZS5lcXVhbChtZXNzYWdlKSk7XHJcbiAgICAvLyAgICAgZG9uZSgpO1xyXG4gICAgLy8gfSkpO1xyXG5cclxuICAgIC8vIGl0KFwiY2F0Y2hlcyBhbiBhc3luY2hyb25vdXNseSB0aHJvd24gdmFsdWVcIiwgZmFrZUFzeW5jRnVuY3Rpb24oYXN5bmMgKGRvbmU6IE1vY2hhRG9uZSkgPT4ge1xyXG4gICAgLy8gICAgIC8vIEFycmFuZ2VcclxuICAgIC8vICAgICBjb25zdCBtZXNzYWdlID0gXCJUaGlzIHNob3VsZCBiZSBjYXVnaHQgYXN5bmNocm9ub3VzbHlcIjtcclxuXHJcbiAgICAvLyAgICAgLy8gQWN0XHJcbiAgICAvLyAgICAgY29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XHJcbiAgICAvLyAgICAgY29uc3QgcHJvbWlzZSA9IGRlZmVycmVkLnByb21pc2UoKVxyXG4gICAgLy8gICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG5cclxuICAgIC8vICAgICBzZXRUaW1lb3V0KGRlZmVycmVkLnJlc29sdmUpO1xyXG5cclxuICAgIC8vICAgICAvLyBBc3NlcnRcclxuICAgIC8vICAgICBhd2FpdCBwcm9taXNlLmNhdGNoKGVycm9yID0+IHtcclxuICAgIC8vICAgICAgICAgZXhwZWN0KGVycm9yLm1lc3NhZ2UpLnRvLmJlLmVxdWFsKG1lc3NhZ2UpO1xyXG4gICAgLy8gICAgICAgICBkb25lKCk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9KSk7XHJcblxyXG4gICAgLy8gaXQoXCJjYXRjaGVzIGFuIGFzeW5jaHJvbm91c2x5IHRocm93biB2YWx1ZSBiZWZvcmUgYSBjaGFpblwiLCBmYWtlQXN5bmNGdW5jdGlvbihhc3luYyAoZG9uZTogTW9jaGFEb25lKSA9PiB7XHJcbiAgICAvLyAgICAgLy8gQXJyYW5nZVxyXG4gICAgLy8gICAgIGNvbnN0IG1lc3NhZ2UgPSBcIlRoaXMgc2hvdWxkIGJlIGNhdWdodCBhc3luY2hyb25vdXNseVwiO1xyXG5cclxuICAgIC8vICAgICAvLyBBY3RcclxuICAgIC8vICAgICBjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcclxuICAgIC8vICAgICBjb25zdCBwcm9taXNlID0gZGVmZXJyZWQucHJvbWlzZSgpXHJcbiAgICAvLyAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLnRoZW4oKCkgPT4ge30pO1xyXG5cclxuICAgIC8vICAgICBzZXRUaW1lb3V0KGRlZmVycmVkLnJlc29sdmUpO1xyXG5cclxuICAgIC8vICAgICAvLyBBc3NlcnRcclxuICAgIC8vICAgICBhd2FpdCBwcm9taXNlXHJcbiAgICAvLyAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjaGFpLmV4cGVjdChlcnJvci5tZXNzYWdlKS50by5iZS5lcXVhbChtZXNzYWdlKSk7XHJcbiAgICAvLyAgICAgZG9uZSgpO1xyXG4gICAgLy8gfSkpO1xyXG5cclxuICAgIC8vIGl0KFwiY2F0Y2hlcyBhbiBhc3luY2hyb25vdXNseSB0aHJvd24gdmFsdWUgYWZ0ZXIgYSBjaGFpblwiLCBmYWtlQXN5bmNGdW5jdGlvbihhc3luYyAoZG9uZTogTW9jaGFEb25lKSA9PiB7XHJcbiAgICAvLyAgICAgLy8gQXJyYW5nZVxyXG4gICAgLy8gICAgIGNvbnN0IG1lc3NhZ2UgPSBcIlRoaXMgc2hvdWxkIGJlIGNhdWdodCBhc3luY2hyb25vdXNseVwiO1xyXG5cclxuICAgIC8vICAgICAvLyBBY3RcclxuICAgIC8vICAgICBjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcclxuICAgIC8vICAgICBjb25zdCBwcm9taXNlID0gZGVmZXJyZWQucHJvbWlzZSgpXHJcbiAgICAvLyAgICAgICAgIC50aGVuKCgpID0+IHt9KVxyXG4gICAgLy8gICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG5cclxuICAgIC8vICAgICBzZXRUaW1lb3V0KGRlZmVycmVkLnJlc29sdmUpO1xyXG5cclxuICAgIC8vICAgICAvLyBBc3NlcnRcclxuICAgIC8vICAgICBhd2FpdCBwcm9taXNlXHJcbiAgICAvLyAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjaGFpLmV4cGVjdChlcnJvci5tZXNzYWdlKS50by5iZS5lcXVhbChtZXNzYWdlKSk7XHJcbiAgICAvLyAgICAgZG9uZSgpO1xyXG4gICAgLy8gfSkpO1xyXG5cclxuICAgIC8vIGl0KFwiY2F0Y2hlcyBhIHNlY29uZCB0aHJvd24gZXJyb3IgYWZ0ZXIgYSBmaXJzdCB0aHJvd24gZXJyb3JcIiwgZmFrZUFzeW5jRnVuY3Rpb24oYXN5bmMgKGRvbmU6IE1vY2hhRG9uZSkgPT4ge1xyXG4gICAgLy8gICAgIC8vIEFycmFuZ2VcclxuICAgIC8vICAgICBjb25zdCBmaXJzdE1lc3NhZ2UgPSBcIlRoaXMgc2hvdWxkIGJlIGNhdWdodCBmaXJzdFwiO1xyXG4gICAgLy8gICAgIGNvbnN0IHNlY29uZE1lc3NhZ2UgPSBcIlRoaXMgc2hvdWxkIGJlIGNhdWdodCBzZWNvbmRcIjtcclxuXHJcbiAgICAvLyAgICAgLy8gQWN0XHJcbiAgICAvLyAgICAgY29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XHJcbiAgICAvLyAgICAgY29uc3QgcHJvbWlzZSA9IGRlZmVycmVkLnByb21pc2UoKVxyXG4gICAgLy8gICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZmlyc3RNZXNzYWdlKTtcclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGV4cGVjdChlcnJvci5tZXNzYWdlKS50by5iZS5lcXVhbChmaXJzdE1lc3NhZ2UpO1xyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc2Vjb25kTWVzc2FnZSk7XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG5cclxuICAgIC8vICAgICBzZXRUaW1lb3V0KGRlZmVycmVkLnJlc29sdmUpO1xyXG5cclxuICAgIC8vICAgICAvLyBBc3NlcnRcclxuICAgIC8vICAgICBhd2FpdCBwcm9taXNlXHJcbiAgICAvLyAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjaGFpLmV4cGVjdChlcnJvci5tZXNzYWdlKS50by5iZS5lcXVhbChzZWNvbmRNZXNzYWdlKSk7XHJcbiAgICAvLyAgICAgZG9uZSgpO1xyXG4gICAgLy8gfSkpO1xyXG5cclxuICAgIC8vIGl0KFwicmV0dXJucyB0aHJvdWdoIGEgY2hhaW4gYWZ0ZXIgY2F0Y2hpbmcgYW4gZXJyb3JcIiwgZmFrZUFzeW5jRnVuY3Rpb24oYXN5bmMgKGRvbmU6IE1vY2hhRG9uZSkgPT4ge1xyXG4gICAgLy8gICAgIC8vIEFycmFuZ2VcclxuICAgIC8vICAgICBjb25zdCB2YWx1ZSA9IFwidmFsdWVcIjtcclxuXHJcbiAgICAvLyAgICAgLy8gQWN0XHJcbiAgICAvLyAgICAgY29uc3QgcHJvbWlzZSA9ICQuRGVmZXJyZWQoKVxyXG4gICAgLy8gICAgICAgICAucmVzb2x2ZSgpXHJcbiAgICAvLyAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAuY2F0Y2goKCkgPT4ge30pXHJcbiAgICAvLyAgICAgICAgIC50aGVuKCgpID0+IHZhbHVlKVxyXG4gICAgLy8gICAgICAgICAucHJvbWlzZSgpO1xyXG5cclxuICAgIC8vICAgICBjb25zdCBhd2FpdGVkID0gYXdhaXQgcHJvbWlzZTtcclxuXHJcbiAgICAvLyAgICAgLy8gQXNzZXJ0XHJcbiAgICAvLyAgICAgZXhwZWN0KGF3YWl0ZWQpLnRvLmJlLmVxdWFsKHZhbHVlKTtcclxuICAgIC8vICAgICBkb25lKCk7XHJcbiAgICAvLyB9KSk7XHJcblxyXG4gICAgLy8gaXQoXCJyZXR1cm5zIHRocm91Z2ggYSBjaGFpbiBhZnRlciBjYXRjaGluZyB0d28gZXJyb3JzXCIsIGZha2VBc3luY0Z1bmN0aW9uKGFzeW5jIChkb25lOiBNb2NoYURvbmUpID0+IHtcclxuICAgIC8vICAgICAvLyBBcnJhbmdlXHJcbiAgICAvLyAgICAgY29uc3QgdmFsdWUgPSBcInZhbHVlXCI7XHJcblxyXG4gICAgLy8gICAgIC8vIEFjdFxyXG4gICAgLy8gICAgIGNvbnN0IHByb21pc2UgPSAkLkRlZmVycmVkKClcclxuICAgIC8vICAgICAgICAgLnJlc29sdmUoKVxyXG4gICAgLy8gICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLmNhdGNoKCgpID0+IHt9KVxyXG4gICAgLy8gICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLmNhdGNoKCgpID0+IHt9KVxyXG4gICAgLy8gICAgICAgICAudGhlbigoKSA9PiB2YWx1ZSlcclxuICAgIC8vICAgICAgICAgLnByb21pc2UoKTtcclxuXHJcbiAgICAvLyAgICAgY29uc3QgYXdhaXRlZCA9IGF3YWl0IHByb21pc2U7XHJcblxyXG4gICAgLy8gICAgIC8vIEFzc2VydFxyXG4gICAgLy8gICAgIGV4cGVjdChhd2FpdGVkKS50by5iZS5lcXVhbCh2YWx1ZSk7XHJcbiAgICAvLyAgICAgZG9uZSgpO1xyXG4gICAgLy8gfSkpO1xyXG5cclxuICAgIC8vIGl0KFwicmV0dXJucyB0aHJvdWdoIGEgY2F1Z2h0IGVycm9yIGluIGEgdHJ5L2NhdGNoIGJsb2NrXCIsIGZha2VBc3luY0Z1bmN0aW9uKGFzeW5jIChkb25lOiBNb2NoYURvbmUpID0+IHtcclxuICAgIC8vICAgICAvLyBBcnJhbmdlXHJcbiAgICAvLyAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoKTtcclxuICAgIC8vICAgICBsZXQgY2F1Z2h0RXJyb3I7XHJcblxyXG4gICAgLy8gICAgIC8vIEFjdFxyXG4gICAgLy8gICAgIHRyeSB7XHJcbiAgICAvLyAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyAgICAgICAgIGNhdWdodEVycm9yID0gZXJyb3I7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICAvLyBBc3NlcnRcclxuICAgIC8vICAgICBleHBlY3QoY2F1Z2h0RXJyb3IpLnRvLmJlLmVxdWFsKGVycm9yKTtcclxuICAgIC8vICAgICBkb25lKCk7XHJcbiAgICAvLyB9KSk7XHJcbi8vIH0pO1xyXG5cclxubW9jaGEucnVuKCk7XHJcbiJdfQ==
