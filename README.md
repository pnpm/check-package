# @pnpm/check-package

[![Greenkeeper badge](https://badges.greenkeeper.io/pnpm/check-package.svg)](https://greenkeeper.io/)

> Checks the integrity of a package

<!--@shields('npm', 'travis')-->
[![npm version](https://img.shields.io/npm/v/@pnpm/check-package.svg)](https://www.npmjs.com/package/@pnpm/check-package) [![Build Status](https://img.shields.io/travis/pnpm/check-package/master.svg)](https://travis-ci.org/pnpm/check-package)
<!--/@-->

## Install

Install it via npm.

    npm install @pnpm/npm-resolver

## Usage

<!--@example('example.js')-->
```js
'use strict'
const checkPackage = require('@pnpm/check-package').default

checkPackage('test/fixtures/good/pkg')
  .then(ok => {
    console.log(Boolean(ok))
    //> true
  })
  .catch(err => console.error(err))
```
<!--/@-->

## License

[MIT](./LICENSE) © [Zoltan Kochan](https://www.kochan.io/)
