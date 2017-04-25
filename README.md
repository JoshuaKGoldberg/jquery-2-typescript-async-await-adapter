# jQuery 2 - TypeScript `async/await` Adapter

Replaces TypeScript's generated `async/await` support code so jQuery 2's crappy `JQueryPromise` can be used with `async/await`.


## Usage

This only works in the browser with jQuery 2 and TypeScript >= 2.1 set to output ES3 or ES5 JavaScript.
Include `lib/index.js` so that it's run before any code using the `await` keyword.


## Technical Details

TypeScript emits a global `__awaiter` method for `async/await` code.
It assumes the existence of a `Promise` constructor and other sane standards.
This library replaces it with a similar versions that instead uses `$.Deferred().promise()`.


## Caveats

You should move to jQuery 3. It has standards-compliant Promises.
This library should only be used as a polyfill while your team works on the update.

jQuery 2's `.then` is synchronous by default but can by asynchronous.
Standards-compliant Promise implementations are always asynchronous.
Don't structure your code assuming `.then` callbacks are run synchronously.

Because `.then` is synchronous, if an error is thrown synchronously in a `JQueryPromise`, any subsequent code (including `await`s) will not be run.
That means you can't use `await` within `try` blocks on this adapter.
Put the risky logic in a non-`async` function instead.


## Development

This requres NodeJS >= 6.0.

1. Clone the repository with `git clone https://github.com/joshuakgoldberg/jquery-2-typescript-async-await-adapter`
2. Install tools with `npm install && npm install -g gulp`
3. Build the test case with `gulp tsc`
4. Run the test on the command-line with `gulp test` or in the browser by opening `test/index.html`
