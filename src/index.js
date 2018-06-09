const program = require('commander')
const offers = require('./offers')
const productMatcher = require('./productMatcher')
const util = require('util')

offers('./offers.xlsx')
  .then(offers => offers.map(offer => {
    return Promise.all(productMatcher(offer))
      .then(match => ({
        offer: { ...offer },
        matches: match
      }))
  }))
  .then(futureMatches => Promise.all(futureMatches))
  .then(results => console.log(util.inspect(results, false, null)))
  .catch(console.log)
