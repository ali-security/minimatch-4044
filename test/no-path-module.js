var t = require('tap')

var pathCacheKey = require.resolve('path')
var mmCacheKey = require.resolve('../')
var originalPathEntry = require.cache[pathCacheKey]

delete require.cache[mmCacheKey]
require.cache[pathCacheKey] = {
  id: pathCacheKey,
  filename: pathCacheKey,
  loaded: true,
  exports: null
}

var mm = require('../')

require.cache[pathCacheKey] = originalPathEntry
delete require.cache[mmCacheKey]

t.equal(mm.sep, '/')
