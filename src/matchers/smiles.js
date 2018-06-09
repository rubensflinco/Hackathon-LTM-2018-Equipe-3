const axios = require('axios')
const cheerio = require('cheerio')

const vendors = {
  extra: 'extra',
  casasBahia: 'casasbahia',
  pontoFrio: 'pontofrio',
  fastShop: 'fastshop'
}

const search = (offer) => {
  const options = {
    method: 'get',
    url: 'https://www.shoppingsmiles.com.br/smiles/super_busca.jsf',
    params: {
      a: false,
      b: offer.description,
      f: vendors[offer.vendor]
    }
  }

  return axios(options)
    .then(response => { return response.data; })
    .then(cheerio.load)
}

const parse = $ => {
  return $('span.itens-section a')
    .map(function () {
      return {
        name: $(this).find('span.item-name').text(),
        pointsPrice: parseFloat($(this).find('span.item-main-pricing').text()),
        pointsPriceFrom: parseFloat($(this).find('span.block-from-price-value').text())
      }
    }).toArray()
}

const evaluate = results => {
  return Promise.resolve(results[0] || null)
}

const smilesMatcher = offer => search(offer)
  .then(parse)
  .then(evaluate)
  .then(product => ({ program: 'smiles', vendor: offer.vendor, ...product }))

module.exports = smilesMatcher