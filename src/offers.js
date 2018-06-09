var Excel = require('exceljs')

const read = filename => {
  const workbook = new Excel.Workbook()
  return workbook.xlsx.readFile(filename)
    .then(() => {
      let workbookOffers = []
      workbook.eachSheet(function(worksheet, sheetId) {
        let sheetOffers = []
        worksheet.eachRow(function(row, rowNumber) {
          const [ _, description, sku, category, brand, priceFrom, priceTo, pointsPrice, discount, vendor, url ] = row.values
          sheetOffers = [
            ...sheetOffers,
            { description, sku, category, brand, priceFrom, priceTo, pointsPrice, discount, vendor, url }
          ]
        })
        workbookOffers = [...workbookOffers,  ...sheetOffers]
      })
      return workbookOffers
    })
    .catch(console.log);
}

module.exports = read
