var express = require('express');
const offers = require('../../offers');
const productMatcher = require('../../productMatcher');
const util = require('util');
var router = express.Router();
  
/* GET home page. */
router.get('/', function(req, res, next) {

   offers('../offers.xlsx', 5)
    .then(offers => offers.map(offer => {
      return Promise.all(productMatcher(offer))
        .then(match => ({
          offer: { ...offer },
          matches: match
        }))
    }))
    .then(futureMatches => Promise.all(futureMatches))
    .then(results => {
      res.render('index', {results});
    })
    .catch(function(error) {
      res.render('error', { error });
    })

});

module.exports = router;
