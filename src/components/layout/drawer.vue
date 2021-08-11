<template>
  <v-navigation-drawer app>
    <v-list dense nav>
      <v-list-item v-for="item in $router.options.routes" :key="item.data.text" link :to="item.path">
        <v-list-item-icon>
          <v-icon>{{ item.data.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            {{ item.data.text }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
}
</script>
