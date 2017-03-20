const expect = chai.expect;

mocha.setup("bdd");

interface JQueryPromise<T> {
    catch(error: any): this;
}

function fakeAsyncFunction(test: (done: MochaDone) => Promise<void>): (done: MochaDone) => void {
    return (done: MochaDone): void => {
        test(done).catch(done);
    };
}

describe("async/await", function () {
    this.timeout(350);

    it("executes in the correct order", fakeAsyncFunction(async (done: MochaDone) => {
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
        done();
    }));

    it("returns an awaited value", fakeAsyncFunction(async (done: MochaDone) => {
        // Arrange
        const value = "value";

        // Act
        const promise = $.Deferred().resolve(value).promise();
        const awaited = await promise;

        // Assert
        expect(awaited).to.be.equal(value);
        done();
    }));

    it("returns an awaited promise's .then's value", fakeAsyncFunction(async (done: MochaDone) => {
        // Arrange
        const value = "value";

        // Act
        const promise = $.Deferred().resolve().promise();
        const awaited = await promise.then(function () {
            return value;
        });

        // Assert
        expect(awaited).to.be.equal(value);
        done();
    }));

    it("returns an awaited promise's .then chain's value", fakeAsyncFunction(async (done: MochaDone) => {
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
        done();
    }));

    it("passes a value through a chain of two .then passes", fakeAsyncFunction(async (done: MochaDone) => {
        // Arrange
        const originalValue = "value";

        // Act
        const promise = $.Deferred().resolve().promise();
        const awaited = await promise
            .then(() => originalValue)
            .then(receivedValue => receivedValue);

        // Assert
        expect(awaited).to.be.equal(originalValue);
        done();
    }));

    it("passes a value through a chain of three .then passes", fakeAsyncFunction(async (done: MochaDone) => {
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
        done();
    }));

    it("waits on a timed promise", fakeAsyncFunction(async (done: MochaDone) => {
        // Arrange
        const value = "value";
        const deferred = $.Deferred();

        // Act
        setTimeout(() => deferred.resolve(value), 10);
        const awaited = await deferred.promise();

        // Assert
        expect(awaited).to.be.equal(value);
        done();
    }));

    it("waits on two timed promises", fakeAsyncFunction(async (done: MochaDone) => {
        // Arrange
        const value = "value";
        const deferredA = $.Deferred();
        const deferredB = $.Deferred();

        // Act
        setTimeout(deferredA.resolve, 10);
        await deferredA.promise();

        setTimeout(() => deferredB.resolve(value), 20);
        const awaited = await deferredB.promise();

        // Assert
        expect(awaited).to.be.equal(value);
        done();
    }));

    it("catches a synchronously thrown value", fakeAsyncFunction(async (done: MochaDone) => {
        // Arrange
        const message = "This should be caught synchronously";

        // Act
        const promise = $.Deferred().resolve().promise()
            .then(() => {
                throw new Error(message);
            });

        // Assert
        await promise.catch(error => {
            expect(error.message).to.be.equal(message);
            done();
        });
    }));

    it("catches a synchronously thrown value after a chain", fakeAsyncFunction(async (done: MochaDone) => {
        // Arrange
        const message = "This should be caught synchronously";

        // Act
        const promise = $.Deferred().resolve().promise()
            .then(() => {})
            .then(() => {
                throw new Error(message);
            });

        // Assert
        await promise.catch(error => expect(error.message).to.be.equal(message));
        done();
    }));

    it("catches a synchronously thrown value before a chain", fakeAsyncFunction(async (done: MochaDone) => {
        // Arrange
        const message = "This should be caught synchronously";

        // Act
        const promise = $.Deferred().resolve().promise()
            .then(() => {
                throw new Error(message);
            })
            .then(() => {});

        // Assert
        await promise.catch(error => expect(error.message).to.be.equal(message));
        done();
    }));

    it("catches an asynchronously thrown value", fakeAsyncFunction(async (done: MochaDone) => {
        // Arrange
        const message = "This should be caught asynchronously";

        // Act
        const deferred = $.Deferred();
        const promise = deferred.promise()
            .then(() => {
                throw new Error(message);
            });

        setTimeout(deferred.resolve);

        // Assert
        await promise.catch(error => {
            expect(error.message).to.be.equal(message);
            done();
        });
    }));

    it("catches an asynchronously thrown value before a chain", fakeAsyncFunction(async (done: MochaDone) => {
        // Arrange
        const message = "This should be caught asynchronously";

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
        done();
    }));

    it("catches an asynchronously thrown value after a chain", fakeAsyncFunction(async (done: MochaDone) => {
        // Arrange
        const message = "This should be caught asynchronously";

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
        done();
    }));

    it("catches a second thrown error after a first thrown error", fakeAsyncFunction(async (done: MochaDone) => {
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
        done();
    }));

    it("returns through a chain after catching an error", fakeAsyncFunction(async (done: MochaDone) => {
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
        done();
    }));

    it("returns through a chain after catching two errors", fakeAsyncFunction(async (done: MochaDone) => {
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
        done();
    }));

    it("returns through a caught error in a try/catch block", fakeAsyncFunction(async (done: MochaDone) => {
        // Arrange
        const error = new Error();
        let caughtError;

        // Act
        try {
            throw error;
        } catch (error) {
            caughtError = error;
        }

        // Assert
        expect(caughtError).to.be.equal(error);
        done();
    }));
});

mocha.run();
