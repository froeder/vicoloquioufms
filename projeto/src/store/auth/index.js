import Firebase from 'firebase'

export default {
  namespaced: true,

  state: {
    user: {},
    single: ''
  },

  getters: {
    user (state) {
      return state.user
    },
    isAuthenticated (state) {
      return !!state.user
    },
    single (state){
      return state.single
    }
  },

  mutations: {
    SET_USER (state, payload) {
      let user = payload
      state.user = user
    },

    RESET_USER (state) {
      state.user = null
    }
  },

  actions: {
    async signIn ({ commit }, payload) {
      let email = payload.email
      let password = payload.password

      await Firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit('SET_USER', user)
        })
        .catch(error => {
          throw error
        })
    },
    async logIn ({ commit }, payload) {
      let email = payload.email
      let password = payload.password

      await Firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
          commit('SET_USER', user)
        })
        .catch(error => {
          throw error
        })
    },

    async signOut ({ commit }) {
      await Firebase.auth().signOut()
        .then(() => {
          commit('SET_USER', {})
        })
    },
    async media (){

      let responses = []
      await Firebase.firestore().collection('singleguess').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          responses.push(doc.data().response)
        })
      })
      this.state.single = 129
      console.log(this.state.single)
      console.log(responses)
    }
  }
}
