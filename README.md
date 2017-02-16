# jQuery 2 - TypeScript `async/await` Adapter

Replaces TypeScript's generated `async/await` support code so jQuery 2's crappy `JQueryPromise` can be used with `async/await`.


## Usage

This only works in the browser with jQuery 2 and TypeScript >= 2.1 set to output ES3 or ES5 JavaScript.
Include `lib/index.js` so that it's run before any code uses the `await` keyword.


## Technical Details

TypeScript emits global `__awaiter` and `__generator` methods for `async/await` code.
Those assume the existance of a `Promise` constructor and other sane standards.
This library replaces them with near-identical versions that instead use `$.Deferred().promise()`.


## Caveats

You should move to jQuery 3. It has standards-compliant Promises.
This library should only be used as a polyfill while your team works on the update.

jQuery 2's `.then` is synchronous by default but can by asynchronous.
Standards-compliant Promise implementations are always asynchronous.
Don't structure your code assuming `.then` callbacks are run synchronously.

Because `.then` is synchronous, if an error is thrown synchronously in a `JQueryPromise`, any subsequent code (including `await`s) will not be run.


## Development

This requres NodeJS >= 6.0.

1. Clone the repository with `git clone https://github.com/joshuakgoldberg/jquery-2-typescript-async-await-adapter`
2. Install tools with `npm install && npm install -g gulp`
3. Build the test case with `gulp tsc`
4. Run the test on the command-line with `gulp test` or in the browser by opening `test/index.html`
