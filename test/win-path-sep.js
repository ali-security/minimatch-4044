var t = require('tap')

var pathCacheKey = require.resolve('path')
var mmCacheKey = require.resolve('../')
var originalPathEntry = require.cache[pathCacheKey]

delete require.cache[mmCacheKey]
require.cache[pathCacheKey] = {
  id: pathCacheKey,
  filename: pathCacheKey,
  loaded: true,
  exports: { sep: '\\' }
}

var mm = require('../')

require.cache[pathCacheKey] = originalPathEntry
delete require.cache[mmCacheKey]

t.equal(mm('x\\y\\z', 'x/y/*/z'), false)
t.equal(mm('x\\y\\w\\z', 'x/y/*/z'), true)
