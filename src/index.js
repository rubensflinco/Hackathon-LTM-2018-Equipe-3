#!/usr/bin/env node

const program = require('commander')
const offers = require('./offers')
const productMatcher = require('./productMatcher')
const util = require('util')

program
  .version('0.1.0')
  .command('compare')
  .description('Compare Offers between Loyalty Programs')
  .option('-f, --file <fileName>', 'Offers file')
  .option('-l, --limit <limit>', '')
  .action(function (cmd) {
    const { file, limit } = cmd

    offers(file, limit)
      .then(offers => offers.map(offer => {
        return Promise.all(productMatcher(offer))
          .then(match => ({
            offer: { ...offer },
            matches: match
          }))
      }))
      .then(futureMatches => Promise.all(futureMatches))
      .then(results => console.log(util.inspect(results, false, null)))
      .catch(console.log)
  })

program.parse(process.argv)