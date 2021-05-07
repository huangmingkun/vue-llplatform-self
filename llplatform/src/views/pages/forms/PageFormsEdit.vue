<template>
  <div>
    <el-card>
      {{$t('else.learn')}}
      <a style="color: #409eff"
         href="https://www.awesomes.cn/repo/surmon-china/vue-quill-editor">vue-quill-editor</a><br/>
      {{$t('else.example')}}
      <a href="https://github.com/linjinze999/vue-llplatform/blob/vue-cli3/llplatform/src/views/pages/forms/PageFormsEdit.vue"
         style="color: #409eff" target="_blank">
        https://github.com/linjinze999/vue-llplatform/blob/vue-cli3/llplatform/src/views/pages/forms/PageFormsEdit.vue
      </a>
    </el-card>
    <br/>
    <el-card style="height: 610px;">
      <quill-editor
        v-model="content"
        ref="myQuillEditor"
        style="height: 500px;"
        :options="editorOption">
      </quill-editor>
    </el-card>
    <textarea v-model="content1"></textarea>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default {
  name: 'PageFormsEdit',
  components: {
    quillEditor
  },
  data () {
    return {
      content: '123',
      content1: '<script>alert(1)</sript>',
      editorOption: {}
    }
  }
}
</script>

<style scoped>
</style>
