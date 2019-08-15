'use strict'
const convert = (from, to) => str => Buffer.from(str, from).toString(to)
const utf8ToHex = convert('utf8', 'hex')
exports.hexToUtf8 = convert('hex', 'utf8')
