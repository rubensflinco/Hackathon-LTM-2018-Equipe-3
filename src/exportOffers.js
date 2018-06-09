const Excel = require('exceljs')

let workbook = new Excel.Workbook()
workbook.xlsx.readFile('./offers.xlsx')
  .then(function() {
    workbook.addWorksheet('resultados')
    var resultSheet = workbook.getWorksheet('resultados')

    //copia a linha da aba principal
    var primeiraLinha = workbook.getWorksheet('ESFERA').getRow(1).values
    //cola a linha na aba resultados
    resultSheet.getRow(1).values = primeiraLinha

    //estilos
    resultSheet.getColumn(1).width = 151,43
    resultSheet.getColumn(2).width = 20
    resultSheet.getColumn(3).width = 29,14
    resultSheet.getColumn(4).width = 21,29
    resultSheet.getColumn(5).width = 15,57
    resultSheet.getColumn(6).width = 18,29
    resultSheet.getColumn(7).width = 22,29
    resultSheet.getColumn(8).width = 15,71
    resultSheet.getColumn(9).width = 14,71
    resultSheet.getColumn(10).width = 198,57
    //fim estilo


    workbook.xlsx.writeFile('./offers.xlsx').then(function(){

    })
})
