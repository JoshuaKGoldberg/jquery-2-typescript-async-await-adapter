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
});
mocha.run();

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Q0FBQztJQUVILEVBQUUsQ0FBQywwREFBMEQsRUFBRTtZQUVyRCxZQUFZLEVBQ1osYUFBYSxFQUdiLFFBQVEsRUFDUixPQUFPOzs7O21DQUxRLDZCQUE2QjtvQ0FDNUIsOEJBQThCOytCQUduQyxDQUFDLENBQUMsUUFBUSxFQUFFOzhCQUNiLFFBQVEsQ0FBQyxPQUFPLEVBQUU7eUJBQzdCLElBQUksQ0FBQzt3QkFDRixNQUFNLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUNsQyxDQUFDLENBQUM7eUJBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSzt3QkFDUixNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUNwRCxDQUFDLENBQUM7eUJBQ0QsSUFBSSxDQUFDO3dCQUNGLE1BQU0sSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ25DLENBQUMsQ0FBQztvQkFFTixVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUU3QixTQUFTO29CQUNULHFCQUFNLE9BQU87NkJBQ1IsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEVBQXJELENBQXFELENBQUMsRUFBQTs7b0JBRjFFLFNBQVM7b0JBQ1QsU0FDMEUsQ0FBQTs7OztTQUM3RSxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUVILEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyIsImZpbGUiOiJ0ZXN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cGVjdCA9IGNoYWkuZXhwZWN0O1xyXG5cclxubW9jaGEuc2V0dXAoXCJiZGRcIik7XHJcblxyXG5pbnRlcmZhY2UgSlF1ZXJ5UHJvbWlzZTxUPiB7XHJcbiAgICBjYXRjaChlcnJvcjogYW55KTogdGhpcztcclxufVxyXG5cclxuZGVzY3JpYmUoXCJhc3luYy9hd2FpdFwiLCAoKSA9PiB7XHJcbiAgICBpdChcImV4ZWN1dGVzIGluIHRoZSBjb3JyZWN0IG9yZGVyXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyBBcnJhbmdlXHJcbiAgICAgICAgY29uc3Qgb3JkZXIgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gQWN0XHJcbiAgICAgICAgb3JkZXIucHVzaCgxKTtcclxuICAgICAgICBhd2FpdCAkLkRlZmVycmVkKCkucmVzb2x2ZSgpLnByb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvcmRlci5wdXNoKDIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBvcmRlci5wdXNoKDMpO1xyXG5cclxuICAgICAgICAvLyBBc3NlcnRcclxuICAgICAgICBleHBlY3Qob3JkZXIpLnRvLmJlLmRlZXAuZXF1YWwoWzEsMiwzXSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcInJldHVybnMgYW4gYXdhaXRlZCB2YWx1ZVwiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgLy8gQXJyYW5nZVxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gXCJ2YWx1ZVwiO1xyXG5cclxuICAgICAgICAvLyBBY3RcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gJC5EZWZlcnJlZCgpLnJlc29sdmUodmFsdWUpLnByb21pc2UoKTtcclxuICAgICAgICBjb25zdCBhd2FpdGVkID0gYXdhaXQgcHJvbWlzZTtcclxuXHJcbiAgICAgICAgLy8gQXNzZXJ0XHJcbiAgICAgICAgZXhwZWN0KGF3YWl0ZWQpLnRvLmJlLmVxdWFsKHZhbHVlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiY2F0Y2hlcyBhIHN5bmNocm9ub3VzbHkgdGhyb3duIHZhbHVlXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyBBcnJhbmdlXHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IFwiVGhpcyBzaG91bGQgYmUgY2F1Z2h0XCI7XHJcblxyXG4gICAgICAgIC8vIEFjdFxyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSAkLkRlZmVycmVkKCkucmVzb2x2ZSgpLnByb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBBc3NlcnRcclxuICAgICAgICBhd2FpdCBwcm9taXNlLmNhdGNoKGVycm9yID0+IGV4cGVjdChlcnJvci5tZXNzYWdlKS50by5iZS5lcXVhbChtZXNzYWdlKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcImNhdGNoZXMgYW4gYXN5bmNocm9ub3VzbHkgdGhyb3duIHZhbHVlXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyBBcnJhbmdlXHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IFwiVGhpcyBzaG91bGQgYmUgY2F1Z2h0XCI7XHJcblxyXG4gICAgICAgIC8vIEFjdFxyXG4gICAgICAgIGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBkZWZlcnJlZC5wcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChkZWZlcnJlZC5yZXNvbHZlKTtcclxuXHJcbiAgICAgICAgLy8gQXNzZXJ0XHJcbiAgICAgICAgYXdhaXQgcHJvbWlzZVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY2hhaS5leHBlY3QoZXJyb3IubWVzc2FnZSkudG8uYmUuZXF1YWwobWVzc2FnZSkpXHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcImNhdGNoZXMgYSBzZWNvbmQgdGhyb3duIGVycm9yIGFmdGVyIGEgZmlyc3QgdGhyb3duIGVycm9yXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgICAvLyBBcnJhbmdlXHJcbiAgICAgICAgY29uc3QgZmlyc3RNZXNzYWdlID0gXCJUaGlzIHNob3VsZCBiZSBjYXVnaHQgZmlyc3RcIjtcclxuICAgICAgICBjb25zdCBzZWNvbmRNZXNzYWdlID0gXCJUaGlzIHNob3VsZCBiZSBjYXVnaHQgc2Vjb25kXCI7XHJcblxyXG4gICAgICAgIC8vIEFjdFxyXG4gICAgICAgIGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBkZWZlcnJlZC5wcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGZpcnN0TWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBleHBlY3QoZXJyb3IubWVzc2FnZSkudG8uYmUuZXF1YWwoZmlyc3RNZXNzYWdlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHNlY29uZE1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChkZWZlcnJlZC5yZXNvbHZlKTtcclxuXHJcbiAgICAgICAgLy8gQXNzZXJ0XHJcbiAgICAgICAgYXdhaXQgcHJvbWlzZVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY2hhaS5leHBlY3QoZXJyb3IubWVzc2FnZSkudG8uYmUuZXF1YWwoc2Vjb25kTWVzc2FnZSkpXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5tb2NoYS5ydW4oKTtcclxuIl19
