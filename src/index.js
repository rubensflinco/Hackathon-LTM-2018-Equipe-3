const program = require('commander')
const offers = require('./offers')
const productMatcher = require('./productMatcher')

offers('./offers.xlsx')
  .then(offers => Promise.all(offers.map(productMatcher)))
  .then(console.log)
  .catch(console.log)
