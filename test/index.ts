import test = require('tape')
import path = require('path')
import checkPackage from '@pnpm/check-package'

test('checkPackage()', async t => {
  const matchedIntegrity = await checkPackage(path.join(__dirname, 'fixtures', 'good', 'pkg'))
  t.deepEqual(matchedIntegrity, require(path.join(__dirname, 'fixtures', 'good', 'integrity.json')))

  const notOk = await checkPackage(path.join(__dirname, 'fixtures', 'bad', 'pkg'))
  t.notOk(notOk)

  t.end()
})
