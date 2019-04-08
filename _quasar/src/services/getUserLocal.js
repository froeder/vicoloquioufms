import { LocalStorage } from 'quasar'

function getUserLocal () {
  console.log('entrou')
  let user = LocalStorage.get.item('usuario')
  return user
}

export default getUserLocal
