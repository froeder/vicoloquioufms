<template>
    <q-layout-header>
      <q-toolbar
        color="tertiary"
        style="height:2.5em"
        :inverted="$q.theme === 'ios'"
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
          IVColoquioUFMS<small>  v{{versao_banco}}  </small>
        </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          @click="perfil"
          aria-label="Person"
        >
          <q-icon name="person" />
        </q-btn>
      </q-toolbar>
    </q-layout-header>
</template>

<script>
export default {
    name: 'Header'

}
</script>

<style>

</style>
