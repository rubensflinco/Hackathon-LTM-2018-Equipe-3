const matchers = require('./matchers')

const match = (offer) => Promise.all(Object.keys(matchers).map(key => {
  return matchers[key](offer)
}))

module.exports = match
