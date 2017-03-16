const expect = chai.expect;

mocha.setup("bdd");

interface JQueryPromise<T> {
    catch(error: any): this;
}

describe("async/await", () => {
    window.onerror = function () { debugger; };

    it("executes in the correct order", async () => {
        // Arrange
        const order = [];

        // Act
        order.push(1);
        await $.Deferred().resolve().promise()
            .then(() => {
                order.push(2);
            });
        order.push(3);

        // Assert
        expect(order).to.be.deep.equal([1,2,3]);
    });

    it("returns an awaited value", async () => {
        // Arrange
        const value = "value";

        // Act
        const promise = $.Deferred().resolve(value).promise();
        const awaited = await promise;

        // Assert
        expect(awaited).to.be.equal(value);
    });

    it("returns an awaited promise's .then's value", async () => {
        // Arrange
        const value = "value";

        // Act
        const promise = $.Deferred().resolve().promise();
        const awaited = await promise.then(function () {
            return value;
        });

        // Assert
        expect(awaited).to.be.equal(value);
    });

    it("returns an awaited promise's .then chain's value", async () => {
        // Arrange
        const value = "value";

        // Act
        const promise = $.Deferred().resolve().promise();
        const awaited = await promise
            .then(function () { })
            .then(function () {
                return value;
            });

        // Assert
        expect(awaited).to.be.equal(value);
    });

    it("passes a value through a chain of two .then passes", async () => {
        // Arrange
        const originalValue = "value";

        // Act
        const promise = $.Deferred().resolve().promise();
        const awaited = await promise
            .then(() => originalValue)
            .then(receivedValue => receivedValue);

        // Assert
        expect(awaited).to.be.equal(originalValue);
    });

    it("passes a value through a chain of three .then passes", async () => {
        // Arrange
        const originalValue = "value";

        // Act
        const promise = $.Deferred().resolve().promise();
        const awaited = await promise
            .then(() => originalValue)
            .then(receivedValue => receivedValue)
            .then(receivedValue => receivedValue);

        // Assert
        expect(awaited).to.be.equal(originalValue);
    });

    it("waits on timed promises", async () => {
        // Arrange
        const value = "value";
        const deferred = $.Deferred<string>();

        // Act
        const awaited = await deferred.promise();
        setTimeout(deferred.resolve, 10);

        // Assert
        expect(awaited).to.be.equal(value);
    });

    it("catches a synchronously thrown value", async () => {
        // Arrange
        const message = "This should be caught";

        // Act
        const promise = $.Deferred().resolve().promise()
            .then(() => {
                throw new Error(message);
            });

        // Assert
        await promise.catch(error => expect(error.message).to.be.equal(message));
    });

    it("catches a synchronously thrown value after a chain", async () => {
        // Arrange
        const message = "This should be caught";

        // Act
        const promise = $.Deferred().resolve().promise()
            .then(() => {})
            .then(() => {
                throw new Error(message);
            });

        // Assert
        await promise.catch(error => expect(error.message).to.be.equal(message));
    });

    it("catches a synchronously thrown value before a chain", async () => {
        // Arrange
        const message = "This should be caught";

        // Act
        const promise = $.Deferred().resolve().promise()
            .then(() => {
                throw new Error(message);
            })
            .then(() => {});

        // Assert
        await promise.catch(error => expect(error.message).to.be.equal(message));
    });

    it("catches an asynchronously thrown value", async () => {
        // Arrange
        const message = "This should be caught";

        // Act
        const deferred = $.Deferred();
        const promise = deferred.promise()
            .then(() => {
                throw new Error(message);
            });

        setTimeout(deferred.resolve);

        // Assert
        await promise
            .catch(error => chai.expect(error.message).to.be.equal(message));
    });

    it("catches an asynchronously thrown value before a chain", async () => {
        // Arrange
        const message = "This should be caught";

        // Act
        const deferred = $.Deferred();
        const promise = deferred.promise()
            .then(() => {
                throw new Error(message);
            })
            .then(() => {});

        setTimeout(deferred.resolve);

        // Assert
        await promise
            .catch(error => chai.expect(error.message).to.be.equal(message));
    });

    it("catches an asynchronously thrown value after a chain", async () => {
        // Arrange
        const message = "This should be caught";

        // Act
        const deferred = $.Deferred();
        const promise = deferred.promise()
            .then(() => {})
            .then(() => {
                throw new Error(message);
            });

        setTimeout(deferred.resolve);

        // Assert
        await promise
            .catch(error => chai.expect(error.message).to.be.equal(message));
    });

    it("catches a second thrown error after a first thrown error", async () => {
        // Arrange
        const firstMessage = "This should be caught first";
        const secondMessage = "This should be caught second";

        // Act
        const deferred = $.Deferred();
        const promise = deferred.promise()
            .then(() => {
                throw new Error(firstMessage);
            })
            .catch(error => {
                expect(error.message).to.be.equal(firstMessage);
            })
            .then(() => {
                throw new Error(secondMessage);
            });

        setTimeout(deferred.resolve);

        // Assert
        await promise
            .catch(error => chai.expect(error.message).to.be.equal(secondMessage));
    });

    it("returns through a chain after catching an error", async () => {
        // Arrange
        const value = "value";

        // Act
        const promise = $.Deferred()
            .resolve()
            .then(() => {
                throw new Error();
            })
            .catch(() => {})
            .then(() => value)
            .promise();

        const awaited = await promise;

        // Assert
        expect(awaited).to.be.equal(value);
    });

    it("returns through a chain after catching two errors", async () => {
        // Arrange
        const value = "value";

        // Act
        const promise = $.Deferred()
            .resolve()
            .then(() => {
                throw new Error();
            })
            .catch(() => {})
            .then(() => {
                throw new Error();
            })
            .catch(() => {})
            .then(() => value)
            .promise();

        const awaited = await promise;

        // Assert
        expect(awaited).to.be.equal(value);
    });

    it("throws", async () => {
        throw new Error("This last test should fail, to demonstrate errors aren't swallowed");
    });
});

mocha.run();
