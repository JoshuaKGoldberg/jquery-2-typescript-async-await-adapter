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
var _this = this;
var expect = chai.expect;
mocha.setup("bdd");
describe("async/await", function () {
    window.onerror = function () { debugger; };
    it("executes in the correct order", function () { return __awaiter(_this, void 0, void 0, function () {
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
                    return [2 /*return*/];
            }
        });
    }); });
    it("returns an awaited value", function () { return __awaiter(_this, void 0, void 0, function () {
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
                    return [2 /*return*/];
            }
        });
    }); });
    it("returns an awaited promise's .then's value", function () { return __awaiter(_this, void 0, void 0, function () {
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
                    return [2 /*return*/];
            }
        });
    }); });
    it("returns an awaited promise's .then chain's value", function () { return __awaiter(_this, void 0, void 0, function () {
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
                    return [2 /*return*/];
            }
        });
    }); });
    it("catches a synchronously thrown value", function () { return __awaiter(_this, void 0, void 0, function () {
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
                    return [2 /*return*/];
            }
        });
    }); });
    it("catches a synchronously thrown value after a chain", function () { return __awaiter(_this, void 0, void 0, function () {
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
                    return [2 /*return*/];
            }
        });
    }); });
    it("catches a synchronously thrown value before a chain", function () { return __awaiter(_this, void 0, void 0, function () {
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
                    return [2 /*return*/];
            }
        });
    }); });
    it("catches an asynchronously thrown value", function () { return __awaiter(_this, void 0, void 0, function () {
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
                    return [2 /*return*/];
            }
        });
    }); });
    it("catches an asynchronously thrown value before a chain", function () { return __awaiter(_this, void 0, void 0, function () {
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
                    return [2 /*return*/];
            }
        });
    }); });
    it("catches an asynchronously thrown value after a chain", function () { return __awaiter(_this, void 0, void 0, function () {
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
                    return [2 /*return*/];
            }
        });
    }); });
    it("catches a second thrown error after a first thrown error", function () { return __awaiter(_this, void 0, void 0, function () {
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
                    return [2 /*return*/];
            }
        });
    }); });
    it("returns through a chain after catching an error", function () { return __awaiter(_this, void 0, void 0, function () {
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
                    return [2 /*return*/];
            }
        });
    }); });
    it("returns through a chain after catching two errors", function () { return __awaiter(_this, void 0, void 0, function () {
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
                    return [2 /*return*/];
            }
        });
    }); });
    it("throws", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            throw new Error("This last test should fail, to demonstrate errors aren't swallowed");
        });
    }); });
});
mocha.run();

//# sourceMappingURL=data:application/json;charset=utf8;base64,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TUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7O1NBQ3RDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtREFBbUQsRUFBRTtZQUU5QyxLQUFLLEVBR0wsT0FBTzs7Ozs0QkFIQyxPQUFPOzhCQUdMLENBQUMsQ0FBQyxRQUFRLEVBQUU7eUJBQ3ZCLE9BQU8sRUFBRTt5QkFDVCxJQUFJLENBQUM7d0JBQ0YsTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO29CQUN0QixDQUFDLENBQUM7eUJBQ0QsS0FBSyxDQUFDLGNBQU8sQ0FBQyxDQUFDO3lCQUNmLElBQUksQ0FBQzt3QkFDRixNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7b0JBQ3RCLENBQUMsQ0FBQzt5QkFDRCxLQUFLLENBQUMsY0FBTyxDQUFDLENBQUM7eUJBQ2YsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFLLEVBQUwsQ0FBSyxDQUFDO3lCQUNqQixPQUFPLEVBQUU7b0JBRUUscUJBQU0sT0FBTyxFQUFBOzs4QkFBYixTQUFhO29CQUU3QixTQUFTO29CQUNULE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzs7OztTQUN0QyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsUUFBUSxFQUFFOztZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsb0VBQW9FLENBQUMsQ0FBQzs7U0FDekYsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUM7QUFFSCxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMiLCJmaWxlIjoidGVzdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBleHBlY3QgPSBjaGFpLmV4cGVjdDtcclxuXHJcbm1vY2hhLnNldHVwKFwiYmRkXCIpO1xyXG5cclxuaW50ZXJmYWNlIEpRdWVyeVByb21pc2U8VD4ge1xyXG4gICAgY2F0Y2goZXJyb3I6IGFueSk6IHRoaXM7XHJcbn1cclxuXHJcbmRlc2NyaWJlKFwiYXN5bmMvYXdhaXRcIiwgKCkgPT4ge1xyXG4gICAgd2luZG93Lm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7IGRlYnVnZ2VyOyB9O1xyXG5cclxuICAgIGl0KFwiZXhlY3V0ZXMgaW4gdGhlIGNvcnJlY3Qgb3JkZXJcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIC8vIEFycmFuZ2VcclxuICAgICAgICBjb25zdCBvcmRlciA9IFtdO1xyXG5cclxuICAgICAgICAvLyBBY3RcclxuICAgICAgICBvcmRlci5wdXNoKDEpO1xyXG4gICAgICAgIGF3YWl0ICQuRGVmZXJyZWQoKS5yZXNvbHZlKCkucHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG9yZGVyLnB1c2goMik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIG9yZGVyLnB1c2goMyk7XHJcblxyXG4gICAgICAgIC8vIEFzc2VydFxyXG4gICAgICAgIGV4cGVjdChvcmRlcikudG8uYmUuZGVlcC5lcXVhbChbMSwyLDNdKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwicmV0dXJucyBhbiBhd2FpdGVkIHZhbHVlXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyBBcnJhbmdlXHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBcInZhbHVlXCI7XHJcblxyXG4gICAgICAgIC8vIEFjdFxyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSAkLkRlZmVycmVkKCkucmVzb2x2ZSh2YWx1ZSkucHJvbWlzZSgpO1xyXG4gICAgICAgIGNvbnN0IGF3YWl0ZWQgPSBhd2FpdCBwcm9taXNlO1xyXG5cclxuICAgICAgICAvLyBBc3NlcnRcclxuICAgICAgICBleHBlY3QoYXdhaXRlZCkudG8uYmUuZXF1YWwodmFsdWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoXCJyZXR1cm5zIGFuIGF3YWl0ZWQgcHJvbWlzZSdzIC50aGVuJ3MgdmFsdWVcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIC8vIEFycmFuZ2VcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IFwidmFsdWVcIjtcclxuXHJcbiAgICAgICAgLy8gQWN0XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9ICQuRGVmZXJyZWQoKS5yZXNvbHZlKCkucHJvbWlzZSgpO1xyXG4gICAgICAgIGNvbnN0IGF3YWl0ZWQgPSBhd2FpdCBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEFzc2VydFxyXG4gICAgICAgIGV4cGVjdChhd2FpdGVkKS50by5iZS5lcXVhbCh2YWx1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcInJldHVybnMgYW4gYXdhaXRlZCBwcm9taXNlJ3MgLnRoZW4gY2hhaW4ncyB2YWx1ZVwiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgLy8gQXJyYW5nZVxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gXCJ2YWx1ZVwiO1xyXG5cclxuICAgICAgICAvLyBBY3RcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gJC5EZWZlcnJlZCgpLnJlc29sdmUoKS5wcm9taXNlKCk7XHJcbiAgICAgICAgY29uc3QgYXdhaXRlZCA9IGF3YWl0IHByb21pc2VcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyB9KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBBc3NlcnRcclxuICAgICAgICBleHBlY3QoYXdhaXRlZCkudG8uYmUuZXF1YWwodmFsdWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoXCJjYXRjaGVzIGEgc3luY2hyb25vdXNseSB0aHJvd24gdmFsdWVcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIC8vIEFycmFuZ2VcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gXCJUaGlzIHNob3VsZCBiZSBjYXVnaHRcIjtcclxuXHJcbiAgICAgICAgLy8gQWN0XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9ICQuRGVmZXJyZWQoKS5yZXNvbHZlKCkucHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEFzc2VydFxyXG4gICAgICAgIGF3YWl0IHByb21pc2UuY2F0Y2goZXJyb3IgPT4gZXhwZWN0KGVycm9yLm1lc3NhZ2UpLnRvLmJlLmVxdWFsKG1lc3NhZ2UpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiY2F0Y2hlcyBhIHN5bmNocm9ub3VzbHkgdGhyb3duIHZhbHVlIGFmdGVyIGEgY2hhaW5cIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIC8vIEFycmFuZ2VcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gXCJUaGlzIHNob3VsZCBiZSBjYXVnaHRcIjtcclxuXHJcbiAgICAgICAgLy8gQWN0XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9ICQuRGVmZXJyZWQoKS5yZXNvbHZlKCkucHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHt9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBBc3NlcnRcclxuICAgICAgICBhd2FpdCBwcm9taXNlLmNhdGNoKGVycm9yID0+IGV4cGVjdChlcnJvci5tZXNzYWdlKS50by5iZS5lcXVhbChtZXNzYWdlKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcImNhdGNoZXMgYSBzeW5jaHJvbm91c2x5IHRocm93biB2YWx1ZSBiZWZvcmUgYSBjaGFpblwiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgLy8gQXJyYW5nZVxyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBcIlRoaXMgc2hvdWxkIGJlIGNhdWdodFwiO1xyXG5cclxuICAgICAgICAvLyBBY3RcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gJC5EZWZlcnJlZCgpLnJlc29sdmUoKS5wcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7fSk7XHJcblxyXG4gICAgICAgIC8vIEFzc2VydFxyXG4gICAgICAgIGF3YWl0IHByb21pc2UuY2F0Y2goZXJyb3IgPT4gZXhwZWN0KGVycm9yLm1lc3NhZ2UpLnRvLmJlLmVxdWFsKG1lc3NhZ2UpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiY2F0Y2hlcyBhbiBhc3luY2hyb25vdXNseSB0aHJvd24gdmFsdWVcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIC8vIEFycmFuZ2VcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gXCJUaGlzIHNob3VsZCBiZSBjYXVnaHRcIjtcclxuXHJcbiAgICAgICAgLy8gQWN0XHJcbiAgICAgICAgY29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGRlZmVycmVkLnByb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGRlZmVycmVkLnJlc29sdmUpO1xyXG5cclxuICAgICAgICAvLyBBc3NlcnRcclxuICAgICAgICBhd2FpdCBwcm9taXNlXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjaGFpLmV4cGVjdChlcnJvci5tZXNzYWdlKS50by5iZS5lcXVhbChtZXNzYWdlKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcImNhdGNoZXMgYW4gYXN5bmNocm9ub3VzbHkgdGhyb3duIHZhbHVlIGJlZm9yZSBhIGNoYWluXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyBBcnJhbmdlXHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IFwiVGhpcyBzaG91bGQgYmUgY2F1Z2h0XCI7XHJcblxyXG4gICAgICAgIC8vIEFjdFxyXG4gICAgICAgIGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBkZWZlcnJlZC5wcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7fSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZGVmZXJyZWQucmVzb2x2ZSk7XHJcblxyXG4gICAgICAgIC8vIEFzc2VydFxyXG4gICAgICAgIGF3YWl0IHByb21pc2VcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNoYWkuZXhwZWN0KGVycm9yLm1lc3NhZ2UpLnRvLmJlLmVxdWFsKG1lc3NhZ2UpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiY2F0Y2hlcyBhbiBhc3luY2hyb25vdXNseSB0aHJvd24gdmFsdWUgYWZ0ZXIgYSBjaGFpblwiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgLy8gQXJyYW5nZVxyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBcIlRoaXMgc2hvdWxkIGJlIGNhdWdodFwiO1xyXG5cclxuICAgICAgICAvLyBBY3RcclxuICAgICAgICBjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZGVmZXJyZWQucHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHt9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGRlZmVycmVkLnJlc29sdmUpO1xyXG5cclxuICAgICAgICAvLyBBc3NlcnRcclxuICAgICAgICBhd2FpdCBwcm9taXNlXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjaGFpLmV4cGVjdChlcnJvci5tZXNzYWdlKS50by5iZS5lcXVhbChtZXNzYWdlKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcImNhdGNoZXMgYSBzZWNvbmQgdGhyb3duIGVycm9yIGFmdGVyIGEgZmlyc3QgdGhyb3duIGVycm9yXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyBBcnJhbmdlXHJcbiAgICAgICAgY29uc3QgZmlyc3RNZXNzYWdlID0gXCJUaGlzIHNob3VsZCBiZSBjYXVnaHQgZmlyc3RcIjtcclxuICAgICAgICBjb25zdCBzZWNvbmRNZXNzYWdlID0gXCJUaGlzIHNob3VsZCBiZSBjYXVnaHQgc2Vjb25kXCI7XHJcblxyXG4gICAgICAgIC8vIEFjdFxyXG4gICAgICAgIGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBkZWZlcnJlZC5wcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGZpcnN0TWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZXJyb3IubWVzc2FnZSkudG8uYmUuZXF1YWwoZmlyc3RNZXNzYWdlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHNlY29uZE1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChkZWZlcnJlZC5yZXNvbHZlKTtcclxuXHJcbiAgICAgICAgLy8gQXNzZXJ0XHJcbiAgICAgICAgYXdhaXQgcHJvbWlzZVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY2hhaS5leHBlY3QoZXJyb3IubWVzc2FnZSkudG8uYmUuZXF1YWwoc2Vjb25kTWVzc2FnZSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoXCJyZXR1cm5zIHRocm91Z2ggYSBjaGFpbiBhZnRlciBjYXRjaGluZyBhbiBlcnJvclwiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgLy8gQXJyYW5nZVxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gXCJ2YWx1ZVwiO1xyXG5cclxuICAgICAgICAvLyBBY3RcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gJC5EZWZlcnJlZCgpXHJcbiAgICAgICAgICAgIC5yZXNvbHZlKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7fSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdmFsdWUpXHJcbiAgICAgICAgICAgIC5wcm9taXNlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGF3YWl0ZWQgPSBhd2FpdCBwcm9taXNlO1xyXG5cclxuICAgICAgICAvLyBBc3NlcnRcclxuICAgICAgICBleHBlY3QoYXdhaXRlZCkudG8uYmUuZXF1YWwodmFsdWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXQoXCJyZXR1cm5zIHRocm91Z2ggYSBjaGFpbiBhZnRlciBjYXRjaGluZyB0d28gZXJyb3JzXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyBBcnJhbmdlXHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBcInZhbHVlXCI7XHJcblxyXG4gICAgICAgIC8vIEFjdFxyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSAkLkRlZmVycmVkKClcclxuICAgICAgICAgICAgLnJlc29sdmUoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHt9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHt9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB2YWx1ZSlcclxuICAgICAgICAgICAgLnByb21pc2UoKTtcclxuXHJcbiAgICAgICAgY29uc3QgYXdhaXRlZCA9IGF3YWl0IHByb21pc2U7XHJcblxyXG4gICAgICAgIC8vIEFzc2VydFxyXG4gICAgICAgIGV4cGVjdChhd2FpdGVkKS50by5iZS5lcXVhbCh2YWx1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcInRocm93c1wiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBsYXN0IHRlc3Qgc2hvdWxkIGZhaWwsIHRvIGRlbW9uc3RyYXRlIGVycm9ycyBhcmVuJ3Qgc3dhbGxvd2VkXCIpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxubW9jaGEucnVuKCk7XHJcbiJdfQ==
