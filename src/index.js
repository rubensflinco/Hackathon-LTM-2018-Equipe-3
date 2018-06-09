const program = require('commander')
const offers = require('./offers')
const productMatcher = require('./productMatcher')

offers('./offers.xlsx').then(productMatcher)
  .then(offers => console.log(offers))
  .catch(console.log)

//Promise.all(matches).then(console.log)
