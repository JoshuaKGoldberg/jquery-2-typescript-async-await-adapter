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
                    return [4 /*yield*/, promise.catch(function (error) {
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
});
// describe("async/await", function () {
//     this.timeout(350);
//     it("catches a synchronously thrown value after a chain", fakeAsyncFunction(async (done: MochaDone) => {
//         // Arrange
//         const message = "This should be caught synchronously";
//         // Act
//         const promise = $.Deferred().resolve().promise()
//             .then(() => {})
//             .then(() => {
//                 throw new Error(message);
//             });
//         // Assert
//         await promise.catch(error => expect(error.message).to.be.equal(message));
//         done();
//     }));
//     it("catches a synchronously thrown value before a chain", fakeAsyncFunction(async (done: MochaDone) => {
//         // Arrange
//         const message = "This should be caught synchronously";
//         // Act
//         const promise = $.Deferred().resolve().promise()
//             .then(() => {
//                 throw new Error(message);
//             })
//             .then(() => {});
//         // Assert
//         await promise.catch(error => expect(error.message).to.be.equal(message));
//         done();
//     }));
//     it("catches an asynchronously thrown value", fakeAsyncFunction(async (done: MochaDone) => {
//         // Arrange
//         const message = "This should be caught asynchronously";
//         // Act
//         const deferred = $.Deferred();
//         const promise = deferred.promise()
//             .then(() => {
//                 throw new Error(message);
//             });
//         setTimeout(deferred.resolve);
//         // Assert
//         await promise.catch(error => {
//             expect(error.message).to.be.equal(message);
//             done();
//         });
//     }));
//     it("catches an asynchronously thrown value before a chain", fakeAsyncFunction(async (done: MochaDone) => {
//         // Arrange
//         const message = "This should be caught asynchronously";
//         // Act
//         const deferred = $.Deferred();
//         const promise = deferred.promise()
//             .then(() => {
//                 throw new Error(message);
//             })
//             .then(() => {});
//         setTimeout(deferred.resolve);
//         // Assert
//         await promise
//             .catch(error => chai.expect(error.message).to.be.equal(message));
//         done();
//     }));
//     it("catches an asynchronously thrown value after a chain", fakeAsyncFunction(async (done: MochaDone) => {
//         // Arrange
//         const message = "This should be caught asynchronously";
//         // Act
//         const deferred = $.Deferred();
//         const promise = deferred.promise()
//             .then(() => {})
//             .then(() => {
//                 throw new Error(message);
//             });
//         setTimeout(deferred.resolve);
//         // Assert
//         await promise
//             .catch(error => chai.expect(error.message).to.be.equal(message));
//         done();
//     }));
//     it("catches a second thrown error after a first thrown error", fakeAsyncFunction(async (done: MochaDone) => {
//         // Arrange
//         const firstMessage = "This should be caught first";
//         const secondMessage = "This should be caught second";
//         // Act
//         const deferred = $.Deferred();
//         const promise = deferred.promise()
//             .then(() => {
//                 throw new Error(firstMessage);
//             })
//             .catch(error => {
//                 expect(error.message).to.be.equal(firstMessage);
//             })
//             .then(() => {
//                 throw new Error(secondMessage);
//             });
//         setTimeout(deferred.resolve);
//         // Assert
//         await promise
//             .catch(error => chai.expect(error.message).to.be.equal(secondMessage));
//         done();
//     }));
//     it("returns through a chain after catching an error", fakeAsyncFunction(async (done: MochaDone) => {
//         // Arrange
//         const value = "value";
//         // Act
//         const promise = $.Deferred()
//             .resolve()
//             .then(() => {
//                 throw new Error();
//             })
//             .catch(() => {})
//             .then(() => value)
//             .promise();
//         const awaited = await promise;
//         // Assert
//         expect(awaited).to.be.equal(value);
//         done();
//     }));
//     it("returns through a chain after catching two errors", fakeAsyncFunction(async (done: MochaDone) => {
//         // Arrange
//         const value = "value";
//         // Act
//         const promise = $.Deferred()
//             .resolve()
//             .then(() => {
//                 throw new Error();
//             })
//             .catch(() => {})
//             .then(() => {
//                 throw new Error();
//             })
//             .catch(() => {})
//             .then(() => value)
//             .promise();
//         const awaited = await promise;
//         // Assert
//         expect(awaited).to.be.equal(value);
//         done();
//     }));
//     it("returns through a caught error in a try/catch block", fakeAsyncFunction(async (done: MochaDone) => {
//         // Arrange
//         const error = new Error();
//         let caughtError;
//         // Act
//         try {
//             throw error;
//         } catch (error) {
//             caughtError = error;
//         }
//         // Assert
//         expect(caughtError).to.be.equal(error);
//         done();
//     }));
// });
mocha.run();

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QjtBQUNyQixpQ0FBaUM7QUFFakMsaUJBQWlCO0FBQ2pCLHVDQUF1QztBQUN2Qyx5QkFBeUI7QUFDekIsNEJBQTRCO0FBQzVCLHFDQUFxQztBQUNyQyxpQkFBaUI7QUFDakIsK0JBQStCO0FBQy9CLGlDQUFpQztBQUNqQywwQkFBMEI7QUFFMUIseUNBQXlDO0FBRXpDLG9CQUFvQjtBQUNwQiw4Q0FBOEM7QUFDOUMsa0JBQWtCO0FBQ2xCLFdBQVc7QUFFWCw2R0FBNkc7QUFDN0cscUJBQXFCO0FBQ3JCLGlDQUFpQztBQUVqQyxpQkFBaUI7QUFDakIsdUNBQXVDO0FBQ3ZDLHlCQUF5QjtBQUN6Qiw0QkFBNEI7QUFDNUIscUNBQXFDO0FBQ3JDLGlCQUFpQjtBQUNqQiwrQkFBK0I7QUFDL0IsNEJBQTRCO0FBQzVCLHFDQUFxQztBQUNyQyxpQkFBaUI7QUFDakIsK0JBQStCO0FBQy9CLGlDQUFpQztBQUNqQywwQkFBMEI7QUFFMUIseUNBQXlDO0FBRXpDLG9CQUFvQjtBQUNwQiw4Q0FBOEM7QUFDOUMsa0JBQWtCO0FBQ2xCLFdBQVc7QUFFWCwrR0FBK0c7QUFDL0cscUJBQXFCO0FBQ3JCLHFDQUFxQztBQUNyQywyQkFBMkI7QUFFM0IsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQiwyQkFBMkI7QUFDM0IsNEJBQTRCO0FBQzVCLG1DQUFtQztBQUNuQyxZQUFZO0FBRVosb0JBQW9CO0FBQ3BCLGtEQUFrRDtBQUNsRCxrQkFBa0I7QUFDbEIsV0FBVztBQUNYLE1BQU07QUFFTixLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMiLCJmaWxlIjoidGVzdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBleHBlY3QgPSBjaGFpLmV4cGVjdDtcclxuXHJcbm1vY2hhLnNldHVwKFwiYmRkXCIpO1xyXG5cclxuaW50ZXJmYWNlIEpRdWVyeVByb21pc2U8VD4ge1xyXG4gICAgY2F0Y2goZXJyb3I6IGFueSk6IHRoaXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZha2VBc3luY0Z1bmN0aW9uKHRlc3Q6IChkb25lOiBNb2NoYURvbmUpID0+IFByb21pc2U8dm9pZD4pOiAoZG9uZTogTW9jaGFEb25lKSA9PiB2b2lkIHtcclxuICAgIHJldHVybiAoZG9uZTogTW9jaGFEb25lKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGVzdChkb25lKS5jYXRjaChkb25lKTtcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIGRlc2NyaWJlKFwiUHJvbWlzZVwiLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICB0aGlzLnRpbWVvdXQoMzUwKTtcclxuXHJcbi8vICAgICBpdChcImdldHMgYW4gb3JkZXJlZCByZXN1bHQgYWZ0ZXIgYSBkZWxheVwiLCBmYWtlQXN5bmNGdW5jdGlvbihhc3luYyAoZG9uZTogTW9jaGFEb25lKSA9PiB7XHJcbi8vICAgICAgICAgLy8gQXJyYW5nZVxyXG4vLyAgICAgICAgIGNvbnN0IG9yZGVyID0gWzFdO1xyXG5cclxuLy8gICAgICAgICAvLyBBY3RcclxuLy8gICAgICAgICBvcmRlci5wdXNoKGF3YWl0IFByb21pc2UucmVzb2x2ZSgyKSk7XHJcbi8vICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4vLyAgICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4vLyAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG9yZGVyLnB1c2goMyk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4vLyAgICAgICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgICAgIDEwKTtcclxuLy8gICAgICAgICB9KTtcclxuXHJcbi8vICAgICAgICAgLy8gQXNzZXJ0XHJcbi8vICAgICAgICAgZXhwZWN0KG9yZGVyKS50by5iZS5kZWVwLmVxdWFsKFsxLDIsM10pO1xyXG4vLyAgICAgICAgIGRvbmUoKTtcclxuLy8gICAgIH0pKTtcclxuLy8gfSk7XHJcblxyXG5kZXNjcmliZShcImpRdWVyeVByb21pc2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy50aW1lb3V0KDM1MCk7XHJcblxyXG4gICAgLy8gaXQoXCJleGVjdXRlcyBpbiB0aGUgY29ycmVjdCBvcmRlclwiLCBmYWtlQXN5bmNGdW5jdGlvbihhc3luYyAoZG9uZTogTW9jaGFEb25lKSA9PiB7XHJcbiAgICAvLyAgICAgLy8gQXJyYW5nZVxyXG4gICAgLy8gICAgIGNvbnN0IG9yZGVyID0gW107XHJcblxyXG4gICAgLy8gICAgIC8vIEFjdFxyXG4gICAgLy8gICAgIG9yZGVyLnB1c2goMSk7XHJcbiAgICAvLyAgICAgYXdhaXQgJC5EZWZlcnJlZCgpLnJlc29sdmUoKS5wcm9taXNlKClcclxuICAgIC8vICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgb3JkZXIucHVzaCgyKTtcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgb3JkZXIucHVzaCgzKTtcclxuXHJcbiAgICAvLyAgICAgLy8gQXNzZXJ0XHJcbiAgICAvLyAgICAgZXhwZWN0KG9yZGVyKS50by5iZS5kZWVwLmVxdWFsKFsxLDIsM10pO1xyXG4gICAgLy8gICAgIGRvbmUoKTtcclxuICAgIC8vIH0pKTtcclxuXHJcbiAgICAvLyBpdChcInJldHVybnMgYW4gYXdhaXRlZCB2YWx1ZVwiLCBmYWtlQXN5bmNGdW5jdGlvbihhc3luYyAoZG9uZTogTW9jaGFEb25lKSA9PiB7XHJcbiAgICAvLyAgICAgLy8gQXJyYW5nZVxyXG4gICAgLy8gICAgIGNvbnN0IHZhbHVlID0gXCJ2YWx1ZVwiO1xyXG5cclxuICAgIC8vICAgICAvLyBBY3RcclxuICAgIC8vICAgICBjb25zdCBwcm9taXNlID0gJC5EZWZlcnJlZCgpLnJlc29sdmUodmFsdWUpLnByb21pc2UoKTtcclxuICAgIC8vICAgICBjb25zdCBhd2FpdGVkID0gYXdhaXQgcHJvbWlzZTtcclxuXHJcbiAgICAvLyAgICAgLy8gQXNzZXJ0XHJcbiAgICAvLyAgICAgZXhwZWN0KGF3YWl0ZWQpLnRvLmJlLmVxdWFsKHZhbHVlKTtcclxuICAgIC8vICAgICBkb25lKCk7XHJcbiAgICAvLyB9KSk7XHJcblxyXG4gICAgLy8gaXQoXCJyZXR1cm5zIGFuIGF3YWl0ZWQgcHJvbWlzZSdzIC50aGVuJ3MgdmFsdWVcIiwgZmFrZUFzeW5jRnVuY3Rpb24oYXN5bmMgKGRvbmU6IE1vY2hhRG9uZSkgPT4ge1xyXG4gICAgLy8gICAgIC8vIEFycmFuZ2VcclxuICAgIC8vICAgICBjb25zdCB2YWx1ZSA9IFwidmFsdWVcIjtcclxuXHJcbiAgICAvLyAgICAgLy8gQWN0XHJcbiAgICAvLyAgICAgY29uc3QgcHJvbWlzZSA9ICQuRGVmZXJyZWQoKS5yZXNvbHZlKCkucHJvbWlzZSgpO1xyXG4gICAgLy8gICAgIGNvbnN0IGF3YWl0ZWQgPSBhd2FpdCBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgIC8vIEFzc2VydFxyXG4gICAgLy8gICAgIGV4cGVjdChhd2FpdGVkKS50by5iZS5lcXVhbCh2YWx1ZSk7XHJcbiAgICAvLyAgICAgZG9uZSgpO1xyXG4gICAgLy8gfSkpO1xyXG5cclxuXHJcbiAgICAvLyBpdChcInJldHVybnMgYW4gYXdhaXRlZCBwcm9taXNlJ3MgLnRoZW4gY2hhaW4ncyB2YWx1ZVwiLCBmYWtlQXN5bmNGdW5jdGlvbihhc3luYyAoZG9uZTogTW9jaGFEb25lKSA9PiB7XHJcbiAgICAvLyAgICAgLy8gQXJyYW5nZVxyXG4gICAgLy8gICAgIGNvbnN0IHZhbHVlID0gXCJ2YWx1ZVwiO1xyXG5cclxuICAgIC8vICAgICAvLyBBY3RcclxuICAgIC8vICAgICBjb25zdCBwcm9taXNlID0gJC5EZWZlcnJlZCgpLnJlc29sdmUoKS5wcm9taXNlKCk7XHJcbiAgICAvLyAgICAgY29uc3QgYXdhaXRlZCA9IGF3YWl0IHByb21pc2VcclxuICAgIC8vICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyB9KVxyXG4gICAgLy8gICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG5cclxuICAgIC8vICAgICAvLyBBc3NlcnRcclxuICAgIC8vICAgICBleHBlY3QoYXdhaXRlZCkudG8uYmUuZXF1YWwodmFsdWUpO1xyXG4gICAgLy8gICAgIGRvbmUoKTtcclxuICAgIC8vIH0pKTtcclxuXHJcbiAgICAvLyBpdChcInBhc3NlcyBhIHZhbHVlIHRocm91Z2ggYSBjaGFpbiBvZiB0d28gLnRoZW4gcGFzc2VzXCIsIGZha2VBc3luY0Z1bmN0aW9uKGFzeW5jIChkb25lOiBNb2NoYURvbmUpID0+IHtcclxuICAgIC8vICAgICAvLyBBcnJhbmdlXHJcbiAgICAvLyAgICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IFwidmFsdWVcIjtcclxuXHJcbiAgICAvLyAgICAgLy8gQWN0XHJcbiAgICAvLyAgICAgY29uc3QgcHJvbWlzZSA9ICQuRGVmZXJyZWQoKS5yZXNvbHZlKCkucHJvbWlzZSgpO1xyXG4gICAgLy8gICAgIGNvbnN0IGF3YWl0ZWQgPSBhd2FpdCBwcm9taXNlXHJcbiAgICAvLyAgICAgICAgIC50aGVuKCgpID0+IG9yaWdpbmFsVmFsdWUpXHJcbiAgICAvLyAgICAgICAgIC50aGVuKHJlY2VpdmVkVmFsdWUgPT4gcmVjZWl2ZWRWYWx1ZSk7XHJcblxyXG4gICAgLy8gICAgIC8vIEFzc2VydFxyXG4gICAgLy8gICAgIGV4cGVjdChhd2FpdGVkKS50by5iZS5lcXVhbChvcmlnaW5hbFZhbHVlKTtcclxuICAgIC8vICAgICBkb25lKCk7XHJcbiAgICAvLyB9KSk7XHJcblxyXG4gICAgLy8gaXQoXCJwYXNzZXMgYSB2YWx1ZSB0aHJvdWdoIGEgY2hhaW4gb2YgdGhyZWUgLnRoZW4gcGFzc2VzXCIsIGZha2VBc3luY0Z1bmN0aW9uKGFzeW5jIChkb25lOiBNb2NoYURvbmUpID0+IHtcclxuICAgIC8vICAgICAvLyBBcnJhbmdlXHJcbiAgICAvLyAgICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IFwidmFsdWVcIjtcclxuXHJcbiAgICAvLyAgICAgLy8gQWN0XHJcbiAgICAvLyAgICAgY29uc3QgcHJvbWlzZSA9ICQuRGVmZXJyZWQoKS5yZXNvbHZlKCkucHJvbWlzZSgpO1xyXG4gICAgLy8gICAgIGNvbnN0IGF3YWl0ZWQgPSBhd2FpdCBwcm9taXNlXHJcbiAgICAvLyAgICAgICAgIC50aGVuKCgpID0+IG9yaWdpbmFsVmFsdWUpXHJcbiAgICAvLyAgICAgICAgIC50aGVuKHJlY2VpdmVkVmFsdWUgPT4gcmVjZWl2ZWRWYWx1ZSlcclxuICAgIC8vICAgICAgICAgLnRoZW4ocmVjZWl2ZWRWYWx1ZSA9PiByZWNlaXZlZFZhbHVlKTtcclxuXHJcbiAgICAvLyAgICAgLy8gQXNzZXJ0XHJcbiAgICAvLyAgICAgZXhwZWN0KGF3YWl0ZWQpLnRvLmJlLmVxdWFsKG9yaWdpbmFsVmFsdWUpO1xyXG4gICAgLy8gICAgIGRvbmUoKTtcclxuICAgIC8vIH0pKTtcclxuXHJcbiAgICAvLyBpdChcIndhaXRzIG9uIGEgdGltZWQgcHJvbWlzZVwiLCBmYWtlQXN5bmNGdW5jdGlvbihhc3luYyAoZG9uZTogTW9jaGFEb25lKSA9PiB7XHJcbiAgICAvLyAgICAgLy8gQXJyYW5nZVxyXG4gICAgLy8gICAgIGNvbnN0IHZhbHVlID0gXCJ2YWx1ZVwiO1xyXG4gICAgLy8gICAgIGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xyXG5cclxuICAgIC8vICAgICAvLyBBY3RcclxuICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IGRlZmVycmVkLnJlc29sdmUodmFsdWUpLCAxMCk7XHJcbiAgICAvLyAgICAgY29uc3QgYXdhaXRlZCA9IGF3YWl0IGRlZmVycmVkLnByb21pc2UoKTtcclxuXHJcbiAgICAvLyAgICAgLy8gQXNzZXJ0XHJcbiAgICAvLyAgICAgZXhwZWN0KGF3YWl0ZWQpLnRvLmJlLmVxdWFsKHZhbHVlKTtcclxuICAgIC8vICAgICBkb25lKCk7XHJcbiAgICAvLyB9KSk7XHJcblxyXG4gICAgLy8gaXQoXCJ3YWl0cyBvbiB0d28gdGltZWQgcHJvbWlzZXNcIiwgZmFrZUFzeW5jRnVuY3Rpb24oYXN5bmMgKGRvbmU6IE1vY2hhRG9uZSkgPT4ge1xyXG4gICAgLy8gICAgIC8vIEFycmFuZ2VcclxuICAgIC8vICAgICBjb25zdCB2YWx1ZSA9IFwidmFsdWVcIjtcclxuICAgIC8vICAgICBjb25zdCBkZWZlcnJlZEEgPSAkLkRlZmVycmVkKCk7XHJcbiAgICAvLyAgICAgY29uc3QgZGVmZXJyZWRCID0gJC5EZWZlcnJlZCgpO1xyXG5cclxuICAgIC8vICAgICAvLyBBY3RcclxuICAgIC8vICAgICBzZXRUaW1lb3V0KGRlZmVycmVkQS5yZXNvbHZlLCAxMCk7XHJcbiAgICAvLyAgICAgYXdhaXQgZGVmZXJyZWRBLnByb21pc2UoKTtcclxuXHJcbiAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiBkZWZlcnJlZEIucmVzb2x2ZSh2YWx1ZSksIDIwKTtcclxuICAgIC8vICAgICBjb25zdCBhd2FpdGVkID0gYXdhaXQgZGVmZXJyZWRCLnByb21pc2UoKTtcclxuXHJcbiAgICAvLyAgICAgLy8gQXNzZXJ0XHJcbiAgICAvLyAgICAgZXhwZWN0KGF3YWl0ZWQpLnRvLmJlLmVxdWFsKHZhbHVlKTtcclxuICAgIC8vICAgICBkb25lKCk7XHJcbiAgICAvLyB9KSk7XHJcblxyXG4gICAgaXQoXCJjYXRjaGVzIGEgc3luY2hyb25vdXNseSB0aHJvd24gdmFsdWVcIiwgZmFrZUFzeW5jRnVuY3Rpb24oYXN5bmMgKGRvbmU6IE1vY2hhRG9uZSkgPT4ge1xyXG4gICAgICAgIC8vIEFycmFuZ2VcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gXCJUaGlzIHNob3VsZCBiZSBjYXVnaHQgc3luY2hyb25vdXNseVwiO1xyXG5cclxuICAgICAgICAvLyBBY3RcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gJC5EZWZlcnJlZCgpLnJlc29sdmUoKS5wcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQXNzZXJ0XHJcbiAgICAgICAgYXdhaXQgcHJvbWlzZS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGV4cGVjdChlcnJvci5tZXNzYWdlKS50by5iZS5lcXVhbChtZXNzYWdlKTtcclxuICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSkpO1xyXG59KTtcclxuXHJcbi8vIGRlc2NyaWJlKFwiYXN5bmMvYXdhaXRcIiwgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgdGhpcy50aW1lb3V0KDM1MCk7XHJcblxyXG5cclxuLy8gICAgIGl0KFwiY2F0Y2hlcyBhIHN5bmNocm9ub3VzbHkgdGhyb3duIHZhbHVlIGFmdGVyIGEgY2hhaW5cIiwgZmFrZUFzeW5jRnVuY3Rpb24oYXN5bmMgKGRvbmU6IE1vY2hhRG9uZSkgPT4ge1xyXG4vLyAgICAgICAgIC8vIEFycmFuZ2VcclxuLy8gICAgICAgICBjb25zdCBtZXNzYWdlID0gXCJUaGlzIHNob3VsZCBiZSBjYXVnaHQgc3luY2hyb25vdXNseVwiO1xyXG5cclxuLy8gICAgICAgICAvLyBBY3RcclxuLy8gICAgICAgICBjb25zdCBwcm9taXNlID0gJC5EZWZlcnJlZCgpLnJlc29sdmUoKS5wcm9taXNlKClcclxuLy8gICAgICAgICAgICAgLnRoZW4oKCkgPT4ge30pXHJcbi8vICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuLy8gICAgICAgICAgICAgfSk7XHJcblxyXG4vLyAgICAgICAgIC8vIEFzc2VydFxyXG4vLyAgICAgICAgIGF3YWl0IHByb21pc2UuY2F0Y2goZXJyb3IgPT4gZXhwZWN0KGVycm9yLm1lc3NhZ2UpLnRvLmJlLmVxdWFsKG1lc3NhZ2UpKTtcclxuLy8gICAgICAgICBkb25lKCk7XHJcbi8vICAgICB9KSk7XHJcblxyXG4vLyAgICAgaXQoXCJjYXRjaGVzIGEgc3luY2hyb25vdXNseSB0aHJvd24gdmFsdWUgYmVmb3JlIGEgY2hhaW5cIiwgZmFrZUFzeW5jRnVuY3Rpb24oYXN5bmMgKGRvbmU6IE1vY2hhRG9uZSkgPT4ge1xyXG4vLyAgICAgICAgIC8vIEFycmFuZ2VcclxuLy8gICAgICAgICBjb25zdCBtZXNzYWdlID0gXCJUaGlzIHNob3VsZCBiZSBjYXVnaHQgc3luY2hyb25vdXNseVwiO1xyXG5cclxuLy8gICAgICAgICAvLyBBY3RcclxuLy8gICAgICAgICBjb25zdCBwcm9taXNlID0gJC5EZWZlcnJlZCgpLnJlc29sdmUoKS5wcm9taXNlKClcclxuLy8gICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICAudGhlbigoKSA9PiB7fSk7XHJcblxyXG4vLyAgICAgICAgIC8vIEFzc2VydFxyXG4vLyAgICAgICAgIGF3YWl0IHByb21pc2UuY2F0Y2goZXJyb3IgPT4gZXhwZWN0KGVycm9yLm1lc3NhZ2UpLnRvLmJlLmVxdWFsKG1lc3NhZ2UpKTtcclxuLy8gICAgICAgICBkb25lKCk7XHJcbi8vICAgICB9KSk7XHJcblxyXG4vLyAgICAgaXQoXCJjYXRjaGVzIGFuIGFzeW5jaHJvbm91c2x5IHRocm93biB2YWx1ZVwiLCBmYWtlQXN5bmNGdW5jdGlvbihhc3luYyAoZG9uZTogTW9jaGFEb25lKSA9PiB7XHJcbi8vICAgICAgICAgLy8gQXJyYW5nZVxyXG4vLyAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBcIlRoaXMgc2hvdWxkIGJlIGNhdWdodCBhc3luY2hyb25vdXNseVwiO1xyXG5cclxuLy8gICAgICAgICAvLyBBY3RcclxuLy8gICAgICAgICBjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcclxuLy8gICAgICAgICBjb25zdCBwcm9taXNlID0gZGVmZXJyZWQucHJvbWlzZSgpXHJcbi8vICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuLy8gICAgICAgICAgICAgfSk7XHJcblxyXG4vLyAgICAgICAgIHNldFRpbWVvdXQoZGVmZXJyZWQucmVzb2x2ZSk7XHJcblxyXG4vLyAgICAgICAgIC8vIEFzc2VydFxyXG4vLyAgICAgICAgIGF3YWl0IHByb21pc2UuY2F0Y2goZXJyb3IgPT4ge1xyXG4vLyAgICAgICAgICAgICBleHBlY3QoZXJyb3IubWVzc2FnZSkudG8uYmUuZXF1YWwobWVzc2FnZSk7XHJcbi8vICAgICAgICAgICAgIGRvbmUoKTtcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgIH0pKTtcclxuXHJcbi8vICAgICBpdChcImNhdGNoZXMgYW4gYXN5bmNocm9ub3VzbHkgdGhyb3duIHZhbHVlIGJlZm9yZSBhIGNoYWluXCIsIGZha2VBc3luY0Z1bmN0aW9uKGFzeW5jIChkb25lOiBNb2NoYURvbmUpID0+IHtcclxuLy8gICAgICAgICAvLyBBcnJhbmdlXHJcbi8vICAgICAgICAgY29uc3QgbWVzc2FnZSA9IFwiVGhpcyBzaG91bGQgYmUgY2F1Z2h0IGFzeW5jaHJvbm91c2x5XCI7XHJcblxyXG4vLyAgICAgICAgIC8vIEFjdFxyXG4vLyAgICAgICAgIGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xyXG4vLyAgICAgICAgIGNvbnN0IHByb21pc2UgPSBkZWZlcnJlZC5wcm9taXNlKClcclxuLy8gICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICAudGhlbigoKSA9PiB7fSk7XHJcblxyXG4vLyAgICAgICAgIHNldFRpbWVvdXQoZGVmZXJyZWQucmVzb2x2ZSk7XHJcblxyXG4vLyAgICAgICAgIC8vIEFzc2VydFxyXG4vLyAgICAgICAgIGF3YWl0IHByb21pc2VcclxuLy8gICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNoYWkuZXhwZWN0KGVycm9yLm1lc3NhZ2UpLnRvLmJlLmVxdWFsKG1lc3NhZ2UpKTtcclxuLy8gICAgICAgICBkb25lKCk7XHJcbi8vICAgICB9KSk7XHJcblxyXG4vLyAgICAgaXQoXCJjYXRjaGVzIGFuIGFzeW5jaHJvbm91c2x5IHRocm93biB2YWx1ZSBhZnRlciBhIGNoYWluXCIsIGZha2VBc3luY0Z1bmN0aW9uKGFzeW5jIChkb25lOiBNb2NoYURvbmUpID0+IHtcclxuLy8gICAgICAgICAvLyBBcnJhbmdlXHJcbi8vICAgICAgICAgY29uc3QgbWVzc2FnZSA9IFwiVGhpcyBzaG91bGQgYmUgY2F1Z2h0IGFzeW5jaHJvbm91c2x5XCI7XHJcblxyXG4vLyAgICAgICAgIC8vIEFjdFxyXG4vLyAgICAgICAgIGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xyXG4vLyAgICAgICAgIGNvbnN0IHByb21pc2UgPSBkZWZlcnJlZC5wcm9taXNlKClcclxuLy8gICAgICAgICAgICAgLnRoZW4oKCkgPT4ge30pXHJcbi8vICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuLy8gICAgICAgICAgICAgfSk7XHJcblxyXG4vLyAgICAgICAgIHNldFRpbWVvdXQoZGVmZXJyZWQucmVzb2x2ZSk7XHJcblxyXG4vLyAgICAgICAgIC8vIEFzc2VydFxyXG4vLyAgICAgICAgIGF3YWl0IHByb21pc2VcclxuLy8gICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNoYWkuZXhwZWN0KGVycm9yLm1lc3NhZ2UpLnRvLmJlLmVxdWFsKG1lc3NhZ2UpKTtcclxuLy8gICAgICAgICBkb25lKCk7XHJcbi8vICAgICB9KSk7XHJcblxyXG4vLyAgICAgaXQoXCJjYXRjaGVzIGEgc2Vjb25kIHRocm93biBlcnJvciBhZnRlciBhIGZpcnN0IHRocm93biBlcnJvclwiLCBmYWtlQXN5bmNGdW5jdGlvbihhc3luYyAoZG9uZTogTW9jaGFEb25lKSA9PiB7XHJcbi8vICAgICAgICAgLy8gQXJyYW5nZVxyXG4vLyAgICAgICAgIGNvbnN0IGZpcnN0TWVzc2FnZSA9IFwiVGhpcyBzaG91bGQgYmUgY2F1Z2h0IGZpcnN0XCI7XHJcbi8vICAgICAgICAgY29uc3Qgc2Vjb25kTWVzc2FnZSA9IFwiVGhpcyBzaG91bGQgYmUgY2F1Z2h0IHNlY29uZFwiO1xyXG5cclxuLy8gICAgICAgICAvLyBBY3RcclxuLy8gICAgICAgICBjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcclxuLy8gICAgICAgICBjb25zdCBwcm9taXNlID0gZGVmZXJyZWQucHJvbWlzZSgpXHJcbi8vICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihmaXJzdE1lc3NhZ2UpO1xyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgZXhwZWN0KGVycm9yLm1lc3NhZ2UpLnRvLmJlLmVxdWFsKGZpcnN0TWVzc2FnZSk7XHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzZWNvbmRNZXNzYWdlKTtcclxuLy8gICAgICAgICAgICAgfSk7XHJcblxyXG4vLyAgICAgICAgIHNldFRpbWVvdXQoZGVmZXJyZWQucmVzb2x2ZSk7XHJcblxyXG4vLyAgICAgICAgIC8vIEFzc2VydFxyXG4vLyAgICAgICAgIGF3YWl0IHByb21pc2VcclxuLy8gICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNoYWkuZXhwZWN0KGVycm9yLm1lc3NhZ2UpLnRvLmJlLmVxdWFsKHNlY29uZE1lc3NhZ2UpKTtcclxuLy8gICAgICAgICBkb25lKCk7XHJcbi8vICAgICB9KSk7XHJcblxyXG4vLyAgICAgaXQoXCJyZXR1cm5zIHRocm91Z2ggYSBjaGFpbiBhZnRlciBjYXRjaGluZyBhbiBlcnJvclwiLCBmYWtlQXN5bmNGdW5jdGlvbihhc3luYyAoZG9uZTogTW9jaGFEb25lKSA9PiB7XHJcbi8vICAgICAgICAgLy8gQXJyYW5nZVxyXG4vLyAgICAgICAgIGNvbnN0IHZhbHVlID0gXCJ2YWx1ZVwiO1xyXG5cclxuLy8gICAgICAgICAvLyBBY3RcclxuLy8gICAgICAgICBjb25zdCBwcm9taXNlID0gJC5EZWZlcnJlZCgpXHJcbi8vICAgICAgICAgICAgIC5yZXNvbHZlKClcclxuLy8gICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbi8vICAgICAgICAgICAgIH0pXHJcbi8vICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7fSlcclxuLy8gICAgICAgICAgICAgLnRoZW4oKCkgPT4gdmFsdWUpXHJcbi8vICAgICAgICAgICAgIC5wcm9taXNlKCk7XHJcblxyXG4vLyAgICAgICAgIGNvbnN0IGF3YWl0ZWQgPSBhd2FpdCBwcm9taXNlO1xyXG5cclxuLy8gICAgICAgICAvLyBBc3NlcnRcclxuLy8gICAgICAgICBleHBlY3QoYXdhaXRlZCkudG8uYmUuZXF1YWwodmFsdWUpO1xyXG4vLyAgICAgICAgIGRvbmUoKTtcclxuLy8gICAgIH0pKTtcclxuXHJcbi8vICAgICBpdChcInJldHVybnMgdGhyb3VnaCBhIGNoYWluIGFmdGVyIGNhdGNoaW5nIHR3byBlcnJvcnNcIiwgZmFrZUFzeW5jRnVuY3Rpb24oYXN5bmMgKGRvbmU6IE1vY2hhRG9uZSkgPT4ge1xyXG4vLyAgICAgICAgIC8vIEFycmFuZ2VcclxuLy8gICAgICAgICBjb25zdCB2YWx1ZSA9IFwidmFsdWVcIjtcclxuXHJcbi8vICAgICAgICAgLy8gQWN0XHJcbi8vICAgICAgICAgY29uc3QgcHJvbWlzZSA9ICQuRGVmZXJyZWQoKVxyXG4vLyAgICAgICAgICAgICAucmVzb2x2ZSgpXHJcbi8vICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge30pXHJcbi8vICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4vLyAgICAgICAgICAgICB9KVxyXG4vLyAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge30pXHJcbi8vICAgICAgICAgICAgIC50aGVuKCgpID0+IHZhbHVlKVxyXG4vLyAgICAgICAgICAgICAucHJvbWlzZSgpO1xyXG5cclxuLy8gICAgICAgICBjb25zdCBhd2FpdGVkID0gYXdhaXQgcHJvbWlzZTtcclxuXHJcbi8vICAgICAgICAgLy8gQXNzZXJ0XHJcbi8vICAgICAgICAgZXhwZWN0KGF3YWl0ZWQpLnRvLmJlLmVxdWFsKHZhbHVlKTtcclxuLy8gICAgICAgICBkb25lKCk7XHJcbi8vICAgICB9KSk7XHJcblxyXG4vLyAgICAgaXQoXCJyZXR1cm5zIHRocm91Z2ggYSBjYXVnaHQgZXJyb3IgaW4gYSB0cnkvY2F0Y2ggYmxvY2tcIiwgZmFrZUFzeW5jRnVuY3Rpb24oYXN5bmMgKGRvbmU6IE1vY2hhRG9uZSkgPT4ge1xyXG4vLyAgICAgICAgIC8vIEFycmFuZ2VcclxuLy8gICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcigpO1xyXG4vLyAgICAgICAgIGxldCBjYXVnaHRFcnJvcjtcclxuXHJcbi8vICAgICAgICAgLy8gQWN0XHJcbi8vICAgICAgICAgdHJ5IHtcclxuLy8gICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbi8vICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgICAgICAgY2F1Z2h0RXJyb3IgPSBlcnJvcjtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIC8vIEFzc2VydFxyXG4vLyAgICAgICAgIGV4cGVjdChjYXVnaHRFcnJvcikudG8uYmUuZXF1YWwoZXJyb3IpO1xyXG4vLyAgICAgICAgIGRvbmUoKTtcclxuLy8gICAgIH0pKTtcclxuLy8gfSk7XHJcblxyXG5tb2NoYS5ydW4oKTtcclxuIl19
