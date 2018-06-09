const matchers = require('./matchers')

const match = (offer) =>
  Promise.all(Object.keys(matchers)
    .map(key => matchers[key](offer)))

module.exports = match
