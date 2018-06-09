const liveloMatcher = offer => (Promise.resolve({
  program: 'livelo',
  vendor: offer.vendor,
  pointsPrice: 100
}))

module.exports = liveloMatcher