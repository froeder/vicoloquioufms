import firebase from 'firebase'
function getDados () {
  let dados = []
  firebase
    .firestore()
    .collection('arvores')
    .orderBy('numero')
    .where('ativo', '==', 'S')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        dados.push(doc.data())
      })
    })
  return dados
}

export default getDados
