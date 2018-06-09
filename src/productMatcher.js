const matchers = require('./matchers')

const match = (offer) => Object.keys(matchers).map(key => {
  return matchers[key](offer)
})

module.exports = match
