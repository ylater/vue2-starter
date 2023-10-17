<script setup>
import EditForm from './components/edit.vue'
const { proxy } = getCurrentInstance()
const { $api, $msg, $confirm, $router, $route } = proxy
const { id } = $route.query
// 获取详情
const detail = ref({})
function getdetail() {
  $api.getMockDetail().then(res => {
    detail.value = res
  })
}
getdetail()
// 刷新
function handleRefesh() {
  getdetail()
  $msg('刷新成功')
}
// 编辑
const editId = ref('')
const visibleEdit = ref(false)
function handleEdit() {
  visibleEdit.value = true
  //随机
  editId.value = id
}
function handleClose() {
  editId.value = ''
  visibleEdit.value = false
}
</script>
<template>
  <rm-page title="表格详情" showBack footer>
    <template #actions>
      <el-button type="default" icon="el-icon-refresh" @click="handleRefesh">刷新</el-button>
      <el-button type="warning" icon="el-icon-edit" @click="handleEdit">编辑</el-button>
    </template>
    <el-descriptions title="用户信息">
      <el-descriptions-item label="姓名">{{ detail.name }}</el-descriptions-item>
      <el-descriptions-item label="年龄">{{ detail.age }}</el-descriptions-item>
      <el-descriptions-item label="手机号">{{ detail.phone }}</el-descriptions-item>
      <el-descriptions-item label="费用">{{ detail.cost }}</el-descriptions-item>
      <el-descriptions-item label="就诊时间">{{ detail.date }}</el-descriptions-item>
      <el-descriptions-item label="诊断说明">{{ detail.diagnosis }}</el-descriptions-item>
      <el-descriptions-item label="地址">{{ detail.address }}</el-descriptions-item>


    </el-descriptions>
    <el-divider></el-divider>
    <el-descriptions title="垂直带边框列表" direction="vertical" :column="4" border>
      <el-descriptions-item label="姓名">{{ detail.name }}</el-descriptions-item>
      <el-descriptions-item label="年龄">{{ detail.age }}</el-descriptions-item>
      <el-descriptions-item label="手机号">{{ detail.phone }}</el-descriptions-item>
      <el-descriptions-item label="费用">{{ detail.cost }}</el-descriptions-item>
      <el-descriptions-item label="就诊时间">{{ detail.date }}</el-descriptions-item>
      <el-descriptions-item label="诊断说明">{{ detail.diagnosis }}</el-descriptions-item>
      <el-descriptions-item label="地址">{{ detail.address }}</el-descriptions-item>

    </el-descriptions>

    <template #footer>
      <el-button type="primary">确认</el-button>
      <el-button type="default">取消</el-button>
    </template>

    <!-- 编辑 -->
    <EditForm :visible.sync="visibleEdit" :editId="editId" @close="handleClose" width="800px" title="编辑"
      @cancel="handleClose"></EditForm>
  </rm-page>
</template>
<style lang="less" scoped></style>