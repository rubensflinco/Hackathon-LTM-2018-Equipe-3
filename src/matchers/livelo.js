const axios = require('axios');
const cheerio = require('cheerio');

const liveloMatcher = offer => {

  const Nvendor = {
    extra: "363586019",
    pontoFrio: "3958921117",
    casasBahia: "2042780991",
    fastShop: "2772514182"
  };

  return axios.get('http://www.pontoslivelo.com.br/browse', {
    params: {
      N: Nvendor[offer.vendor],
      Ntt: offer.description
    }
  })
  .then(function (response) {
    const $ = cheerio.load(response.data);

    const vendor = $('span.partner-name').text();
    const pointsPrice = $('span.prodprice').text();

    const responseJSON = ({
      program: 'livelo',
      vendor: vendor,
      pointsPrice: parseInt(pointsPrice.replace(".", ""))
    });
    return (responseJSON);


  }).catch(function (error) {

    const responseJSON = ({
      ERRO: error
    });
    return (responseJSON);
  });


}

module.exports = liveloMatcher