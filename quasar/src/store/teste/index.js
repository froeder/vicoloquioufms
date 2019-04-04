import Firebase from 'firebase'

export default {
  namespaced: true,

  state: {
    dev: {}
  },

  getters: {
    dev (state) {
      return state.dev
    }
  },

  mutations: {
    SET_DEV (state, payload) {
      let dev = payload
      state.dev = dev
    },

    RESET_DEV (state) {
      state.dev = null
    }
  },

  actions: {
    async logs ({ commit }) {
      let docRef = Firebase.firestore().collection('dev')
      await docRef.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              return doc.data().version
          });
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
    }
  }
}
