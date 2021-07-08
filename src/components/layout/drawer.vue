<template>
  <v-navigation-drawer app>
    <v-list dense nav>
      <v-list-item v-for="item in drawerData" :key="item.text" link :to="item.link">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            {{ item.text }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawerData: [
      {
        text: '主页',
        icon: 'mdi-home',
        link: '/'
      },
      {
        text: '文档',
        icon: 'mdi-file-document',
        link: '/document'
      },
    ]
  })
}
</script>
