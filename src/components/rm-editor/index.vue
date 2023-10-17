<script setup>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import '@wangeditor/editor/dist/css/style.css'
const editorRef = shallowRef()
const toolbarConfig = ref({
})
function onCreated(editor) {
  editorRef.value = editor

  console.log('editor created!')
}
function onDestroyed() {
  if (editor.value) {
    editor.value.destroy()
  }
  console.log('editor destroyed!')
}
</script>
<template>
  <div class="rm-editor">
    <Toolbar :editor="editorRef" :defaultConfig="toolbarConfig" />
    <Editor v-bind="$attrs" @onCreated="onCreated" @onDestroyed="onDestroyed"
      style="height: 500px; overflow-y: hidden;" />
  </div>
</template>
<style lang="less" scoped>
.rm-editor {
  position: relative;
  width: 100%;
  border: 1px solid #ebeef5;

  :deep(.w-e-toolbar) {
    border-bottom: 1px solid #ebeef5;
  }
}
</style>