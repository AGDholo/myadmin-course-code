<template>
  <v-app-bar app>
    <v-toolbar-title>首页</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          用户

          <v-icon right>mdi-menu-down </v-icon>
        </v-btn>
      </template>
      <v-list>
        <template v-for="item in toolbarData" >

          <v-list-item  :key="item.text">
            <v-list-item-title>
              {{item.text}}
            </v-list-item-title>


          </v-list-item>

          <v-divider :key="item.text" v-if="item.divider"></v-divider>
        </template>


      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    toolbarData: [
      {text: '用户中心'},
      {text: '项目地址', divider: true},
      {text: '退出登录'},
    ]
  })
}
</script>
