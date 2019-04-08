import Firebase from 'firebase/app'

var config = {
  messagingSenderId: '233057959547'
}
Firebase.initializeApp(config)

let messaging = Firebase.messaging()