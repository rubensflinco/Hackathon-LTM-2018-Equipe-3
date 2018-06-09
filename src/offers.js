var Excel = require('exceljs')

const vendors = {
  'Ponto Frio': 'pontoFrio',
  'Extra': 'extra',
  'Fast Shop': 'fastShop',
  'Ponto Frio': 'pontoFrio'
}

const read = filename => {
  const workbook = new Excel.Workbook()
  return workbook.xlsx.readFile(filename)
    .then(() => {
      let workbookOffers = []
      workbook.eachSheet(function (worksheet, sheetId) {
        let sheetOffers = []
        worksheet.eachRow(function (row, rowNumber) {
          const [_, description, sku, category, brand, priceFrom, priceTo, pointsPrice, discount, vendorKey, url] = row.values

          let vendor = vendors[vendorKey]
          if (vendor)
            sheetOffers = [
              ...sheetOffers,
              { description, sku, category, brand, priceFrom, priceTo, pointsPrice, discount, vendor, url }
            ]
        })
        workbookOffers = [...workbookOffers, ...sheetOffers]
      })
      return workbookOffers.slice(1, 5)
    })
}

module.exports = read
