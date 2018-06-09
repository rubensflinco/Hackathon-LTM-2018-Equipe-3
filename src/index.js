const program = require('commander')
const productMatcher = require('./productMatcher')

const offer = {
  description: 'Chapinha | Prancha Mondial Chrome Pink P19 220°C Cerâmica e Tourmaline - Rosa',
  sku: '12358760',
  category: 'Beleza & Saúde',
  brand: 'Mondial',
  priceFrom: 'R$99,90',
  priceTo: 'R$39,90',
  pointsPrice: 2100,
  discount: 0.6,
  vendor: 'Ponto Frio'
}

const matches = productMatcher(offer)

console.log(matches)