const program = require('commander')
const productMatcher = require('./productMatcher')

const offer = {
  description: 'Relógio',
  sku: '12358760',
  category: 'Beleza & Saúde',
  brand: 'Mondial',
  priceFrom: 'R$99,90',
  priceTo: 'R$39,90',
  pointsPrice: 2100,
  discount: 0.6,
  vendor: 'fastshop'
}

const offers = [ offer ]

const matches = offers.map(productMatcher)

Promise.all(matches).then(console.log)
