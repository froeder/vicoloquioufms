<template>
  <q-layout class="background">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "LayoutAuth",
  data() {
    return {};
  },
};
</script>

<style>
.background {
  background-image: url("~assets/judon.jpg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
}
</style>
