import Firebase from 'firebase'

export default ({ app, router, Vue, store }) => {
  
  // Register the Firebase authentication listener
  Firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // Signed in. Let Vuex know.
      Firebase.firestore().collection('usuarios').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let usuario = doc.data()
          if (user.email === usuario.email) {
            if (usuario.papel === 'super' || usuario.papel === 'edit' || usuario.papel === 'admin') {
              store.commit('auth/SET_USER', user)
              router.replace({ name: 'index' })
            } else {
              store.commit('auth/SET_USER', user)
              router.replace({ name: 'signIn' })
            }
          }
        })
      })
      new Vue(app) /* eslint-disable-line no-new */
    } else {
      // Signed out. Let Vuex know.
      store.commit('auth/RESET_USER')
      router.replace({ name: 'signIn' })
      new Vue(app) /* eslint-disable-line no-new */
    }
  })
}
