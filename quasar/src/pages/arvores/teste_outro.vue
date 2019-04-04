<template>
    <div>
        <h1>teste 2</h1>
    </div>
</template>

<script>
import firebase from 'quasar'

export default {
    data(){
        return{
            teste: {},
        }
    },
    mounted(){
        this.banco()
    },
    methods: {
        banco(){
            let db = this.$firebase.firestore()
            var first = db.collection("arvores")
            .orderBy("numero")
            .limit(25);

                return first.get().then(function (documentSnapshots) {
                // Get the last visible document
                var lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
                console.log("last", lastVisible);

                // Construct a new query starting at this document,
                // get the next 25 cities.
                var next = db.collection("arvores")
                        .orderBy("numero")
                        .startAfter(lastVisible)
                        .limit(25);
                });
            }
    }
}
</script>

<style>

</style>
