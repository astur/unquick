# unquick

Ensures that the function will be executed for at least the specified time.

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]

## FAQ

> __Q:__ Why not [p-min-delay](https://github.com/sindresorhus/p-min-delay#readme)?
>
> __A:__ Because `p-min-delay` works with promise, not function.

## Install

```bash
npm i unquick
```

## Usage

```js
const unquick = require('unquick');

const runForAtLeast1000ms = unquick(fn, delay);
```

* `fn` - any sync or async function.
* `delay` - number of milliseconds.

Returns async function, that takes same parameters as `fn` and do the same things, but do it at least `delay` milliseconds or longer.

## License

MIT

[npm-url]: https://npmjs.org/package/unquick
[npm-image]: https://badge.fury.io/js/unquick.svg
[travis-url]: https://travis-ci.org/astur/unquick
[travis-image]: https://travis-ci.org/astur/unquick.svg?branch=master