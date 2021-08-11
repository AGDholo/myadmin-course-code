<template>
  <div>
    <v-row>
      <v-col v-for="item in documentData" :key="item.text" cols="12" sm="6" lg="2">
        <v-btn x-large color="black" dark>
          {{item.text}}
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: ()=> ({
    documentData: [
      {text: 'Documentation', link: 'https://heroui.net'},
      {text: 'Github Repository', link: 'https://github.com'},
      {text: '国内文档', link: 'https://heroui.net'},
      {text: '系列文章', link: 'https://heroui.net'},
      {text: '内推招聘', link: 'https://heroui.net'},
    ]
  })
}
</script>
