const matchers = require('./matchers')

const match = (offer) => Object.keys(matchers).map(key => matchers[key](offer))

module.exports = match
