<template>
  <v-navigation-drawer app>
    <v-list dense nav>
      <v-list-item-group v-for="item in $router.options.routes" :key="item.data.text">
        <v-list-item exact link :to="`${item.path}/${item.children[0].path}`" v-if="item.children.length <= 1">
          <v-list-item-icon>
            <v-icon>{{ item.data.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              {{ item.data.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group v-else :prepend-icon="item.data.icon" :value="item.data.open">
          <template v-slot:activator>
            <v-list-item-title>
              {{ item.data.text }}
            </v-list-item-title>
          </template>

          <v-list-item
              v-for="i in item.children"
              :key="i.path"
              :to="`${item.path}/${i.path}`"
              exact
              link
          >
            <v-list-item-icon>
              <v-icon>mdi-circle-medium</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ i.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  mounted() {
    console.log(this.$router.options.routes)
  }
}
</script>
