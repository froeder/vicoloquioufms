
function convertData (data) {
  data = data.split('-')
  let dia = data[2].split('T')[0]
  let mes = data[1]
  let ano = data[0]

  let dataFormatada = dia + '/' + mes + '/' + ano
  return dataFormatada
}

export default convertData
