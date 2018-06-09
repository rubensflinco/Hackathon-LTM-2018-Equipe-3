const multiplusMatcher = offer => (Promise.resolve({
  program: 'multiplus',
  vendor: offer.vendor,
  pointsPrice: 200
}))

module.exports = multiplusMatcher