<template>
  <v-app>
    <appbar/>

    <drawer/>

    <v-main>

    </v-main>
  </v-app>
</template>

<script>

import Appbar from "./components/layout/appbar";
import Drawer from "./components/layout/drawer";
export default {
  name: "App",
  components: {Drawer, Appbar},
  data: () => ({

  }),
};
</script>
