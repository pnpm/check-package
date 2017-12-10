# @pnpm/check-package

> Checks the integrity of a package

<!--@shields('npm', 'travis')-->
[![npm version](https://img.shields.io/npm/v/@pnpm/check-package.svg)](https://www.npmjs.com/package/@pnpm/check-package) [![Build Status](https://img.shields.io/travis/pnpm/check-package/master.svg)](https://travis-ci.org/pnpm/check-package)
<!--/@-->

When [pnpm](https://github.com/pnpm/pnpm) saves a package to the store, it creates an `integrity.json` file.
`integrity.json` contains a hash for each file of the package.
`@pnpm/check-package` can check whether the resources of the package were modified, using `integrity.json`.

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

## API

### `checkPackage(packagePath) => Promise<matchedIntegrity | false>`

If the package has been touched, `false` is returned. If the package has its "canonical" form, the content
of `integrity.json` is returned.

## License

[MIT](./LICENSE) © [Zoltan Kochan](https://www.kochan.io/)
