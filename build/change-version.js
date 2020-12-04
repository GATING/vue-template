const { resolve } = require('path')
const { writeFileSync } = require('fs')
const path = resolve(__dirname, '../package.json')
const version = process.argv[2]
const package = require(path)
package.version = version
writeFileSync(path, JSON.stringify(package, null, 2))
