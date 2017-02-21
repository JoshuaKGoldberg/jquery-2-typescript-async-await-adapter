const expect = chai.expect;

mocha.setup("bdd");

interface JQueryPromise<T> {
    catch(error: any): this;
}

describe("async/await", () => {
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
            .catch(error => chai.expect(error.message).to.be.equal(message))
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
            .catch(error => chai.expect(error.message).to.be.equal(secondMessage))
    });
});

mocha.run();
