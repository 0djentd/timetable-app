<script>
import AppBar from "@/components/AppBar";
export default {
  name: "App",
  components: { AppBar },
  data: () => ({}),
};
</script>

<template>
  <v-app>
    <AppBar />
    <v-main class="grey lighten-3">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
