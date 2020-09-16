<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="primary">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title> judOn </q-toolbar-title>
        <q-btn flat dense round :to="{ name: 'perfil' }" aria-label="Person">
          <q-icon name="person" />
        </q-btn>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list no-border link inset-delimiter>
        <q-item :to="{ name: 'dashboard' }">
          <q-item-main>Home</q-item-main>
        </q-item>
        <q-item :to="{ name: 'chamada' }">
          <q-item-main>Chamada</q-item-main>
        </q-item>
        <!-- <q-item :to="{ name: 'avaliar' }">
          <q-item-main>Avaliar</q-item-main>
        </q-item> -->
        <q-item :to="{ name: 'sobre' }">
          <q-item-main>Sobre</q-item-main>
        </q-item>
        <q-item @click.native="signOut()">
          <q-item-main>Sair</q-item-main>
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <q-slide-transition
        appear
        enter="fadeInRight"
        leave="fadeInRight"
        mode="fadeInRight"
      >
        <router-view />
      </q-slide-transition>
    </q-page-container>

    <q-layout-footer style="background-color: #00a34f; heigth: 1em">
      Desenvolvido por
      <a target="_blank" href="http://froeder.github.io">Jhonatan Froeder</a>
    </q-layout-footer>
  </q-layout>
</template>

<script>
export default {
  name: "LayoutDefault",
  data() {
    return {
      leftDrawerOpen: true,
    };
  },
  methods: {
    signOut() {
      this.$store.dispatch("auth/signOut");
    },
  },
};
</script>

<style>
body {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#c9de96+0,8ab66b+44,398235+100;Green+3D+%233 */
  background: rgb(201, 222, 150); /* Old browsers */
  background: -moz-linear-gradient(
    45deg,
    rgba(201, 222, 150, 1) 0%,
    rgba(138, 182, 107, 1) 44%,
    rgba(57, 130, 53, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    45deg,
    rgba(201, 222, 150, 1) 0%,
    rgba(138, 182, 107, 1) 44%,
    rgba(57, 130, 53, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    45deg,
    rgba(201, 222, 150, 1) 0%,
    rgba(138, 182, 107, 1) 44%,
    rgba(57, 130, 53, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#c9de96', endColorstr='#398235',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

.q-card {
  background-color: rgba(255, 255, 255, 0.76);
  border-radius: 10px;
}
.q-btn {
  border-radius: 10px;
}
</style>
