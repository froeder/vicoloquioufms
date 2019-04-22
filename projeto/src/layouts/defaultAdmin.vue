<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Admin
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-item :to="'admin'">
          <q-item-main>Home</q-item-main>
        </q-item>
        <q-item :to="{ name: 'presencas' }">
          <q-item-main>Presenças</q-item-main>
        </q-item>
        <q-item :to="{ name: 'avaliacoes' }">
          <q-item-main>Avaliacoes</q-item-main>
        </q-item>
        <q-item :to="{name: 'sorteio'}">
          <q-item-main>Sorteio</q-item-main>
        </q-item>
        <q-item @click.native="signOut()">
          <q-item-main>Sign Out</q-item-main>
        </q-item>

      </q-list>
    </q-layout-drawer>

    <q-page-container class="container">
      <router-view />
    </q-page-container>

    <q-layout-footer style="background-color:#00A34F ; heigth:1em">
      Desenvolvido por <a target="_blank" href="http://froeder.github.io">Jhonatan Froeder</a>
    </q-layout-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: true
    }
  },
  methods: {
    signOut () {
      this.$store.dispatch('auth/signOut')
    }
  }
}
</script>

<style>

</style>
