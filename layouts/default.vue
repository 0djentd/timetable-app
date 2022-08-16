<template>
  <v-app dark>
    <AppBar />
    <v-main class="grey lighten-3">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar";
export default {
  name: 'DefaultLayout',
  components: { AppBar },
}
</script>
