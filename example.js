'use strict'
const checkPackage = require('@pnpm/check-package').default

checkPackage('test/fixtures/good/pkg')
  .then(ok => {
    console.log(Boolean(ok))
  })
  .catch(err => console.error(err))
