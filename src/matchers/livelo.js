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

      const items = $('div.clpfeatureddesc').map(function (i) {

        const vendor = $(this).find('span.partner-name').text();
        const pointsPrice = $(this).find('span.prodprice').text();
        const pointsPriceFrom = $(this).find('span.strikeprodprice').find('strike').text();
        const name = $(this).find('h5.proddesc').text();
        return { vendor, pointsPrice, pointsPriceFrom, name }
      });

      if (items.length == 0){
        var responseJSON = ({
          program: 'livelo',
          ERRO: 'Não achei nenhum resultado :('
        });
      }else{
        var responseJSON = ({
          program: 'livelo',
          vendor: items[0].vendor,
          name: items[0].name,
          pointsPriceFrom: items[0].pointsPriceFrom,
          pointsPrice: items[0].pointsPrice
        });
      }
      return (responseJSON);


    }).catch(function (error) {

      const responseJSON = ({
        program: 'livelo',
        ERRO: error
      });
      return (responseJSON);
    });


}

module.exports = liveloMatcher