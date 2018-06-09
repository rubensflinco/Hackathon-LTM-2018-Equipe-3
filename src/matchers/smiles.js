const axios = require('axios')
const cheerio = require('cheerio')

const vendors = {
  extra: 'extra',
  casasBahia: '',
  pontoFrio: '',
  fastShop: ''
}

const search = (offer) => {
  const options = {
    method: 'get',
    url: 'https://www.shoppingsmiles.com.br/smiles/super_busca.jsf',
    params: {
      a: false,
      b: 'Rel%C3%B3gio+Masculino+Digital+Casio+W215H1AVDF+-+Preto' || offer.description,
      f: 'extra' || vendors[offer.vendor]
    }
  }

  return axios(options)
    .then(response => { console.log(response); return response; })
    .then(response => cheerio.load(response, {  }))
    .then(a => { console.log(a); return a })
}

const parse = $ => {
  return $('span.itens-section').html()
}

const smilesMatcher = offer => (Promise.resolve({
  program: 'smiles',
  vendor: offer.vendor,
  pointsPrice: 200
}))

module.exports = offer => {
  // search(offer)
  // .then(parse)
  // .then(console.log)

  return smilesMatcher(offer)
}