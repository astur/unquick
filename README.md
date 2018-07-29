# unquick

Ensures that the function will be executed for at least the specified time.

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]

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

const runForAtLeast1000ms = unquick(someFunc, 1000);
```

## License

MIT

[npm-url]: https://npmjs.org/package/unquick
[npm-image]: https://badge.fury.io/js/unquick.svg
[travis-url]: https://travis-ci.org/astur/unquick
[travis-image]: https://travis-ci.org/astur/unquick.svg?branch=master