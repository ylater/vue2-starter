<script setup>
import { watch } from 'vue';
const { proxy } = getCurrentInstance()
const { $api, $msg, $watch, $router } = proxy
const emits = defineEmits(['submit', 'cancel'])
const props = defineProps({
  editId: {
    type: String,
    default: ''
  }
})
const editFormRef = ref(null)
const editForm = ref({
  name: '',
  age: '',
  phone: '',
  cost: '',
  date: '',
  diagnosis: '',
  address: '',
})
function getdetail() {
  const params = {
    id: props.editId
  }
  $api.getMockDetail(params).then(res => {
    editForm.value = { ...res }
  })
}
watch(() => props.editId, (newVal, oldVal) => {
  if (newVal) {
    getdetail()
  } else {
    editForm.value = {
      name: '',
      age: '',
      phone: '',
      cost: '',
      date: '',
      diagnosis: '',
      address: '',
    }
    editFormRef.value.resetFields()
  }
})
//提交
const rules = reactive({
  name: [
    { required: true, message: '请输入姓名', trigger: ['blur', 'change'] },
    { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: ['blur', 'change'] }
  ],
  age: [
    { required: true, message: '请输入年龄', trigger: ['blur', 'change'] },
    { type: 'number', message: '年龄必须为数字值' }
  ],
  phone: [
    { required: true, message: '请输入电话', trigger: ['blur', 'change'] },
  ],
  cost: [
    { required: true, message: '请输入费用', trigger: ['blur', 'change'] },
    { type: 'number', message: '费用必须为数字值' }
  ],
  date: [
    { required: true, message: '请选择就诊时间', trigger: ['blur', 'change'] }
  ],
  diagnosis: [
    { required: true, message: '请输入诊断名称', trigger: ['blur', 'change'] }
  ],
  address: [
    { required: true, message: '请输入地址', trigger: ['blur', 'change'] }
  ]
})
function handleSubmit() {
  editFormRef.value.validate((valid) => {
    if (!valid) return
    $msg('提交成功')
    emits('submit')
  })
}
function handleCancel() {
  emits('cancel')
  editFormRef.value.resetFields()
}
</script>
<template>
  <el-dialog v-bind="$attrs" v-on="$listeners" width="800px" title="编辑">
    <el-form :model="editForm" :rules="rules" ref="editFormRef" label-position="right" label-width="120px">
      <el-form-item required label="姓名：" prop="name">
        <el-input v-model="editForm.name" placeholder="姓名" clearable></el-input>
      </el-form-item>
      <!-- 性别 -->
      <el-form-item label="性别：" prop="sex">
        <el-radio-group v-model="editForm.sex">
          <el-radio label="男">男</el-radio>
          <el-radio label="女">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item required label="年龄：" prop="age">
        <el-input v-model="editForm.age" placeholder="请输入年龄" clearable></el-input>
      </el-form-item>
      <el-form-item required label="电话：" prop="phone">
        <el-input v-model.number="editForm.phone" placeholder="请输入电话" clearable show-word-limit
          :maxlength="11"></el-input>
      </el-form-item>
      <el-form-item required label="费用：" prop="cost">
        <el-input-number v-model="editForm.cost" :precision="2" :step="0.1" controls-position="right"></el-input-number>
        元
      </el-form-item>
      <el-form-item required label="就诊时间：">
        <el-date-picker v-model="editForm.date" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item required label="诊断名称：" prop="diagnosis">
        <el-input v-model="editForm.diagnosis" placeholder="请输入诊断名称" clearable></el-input>
      </el-form-item>
      <el-form-item required label="地址：" prop="address">
        <el-input type="textarea" v-model="editForm.address" placeholder="请输入地址" clearable show-word-limit
          :maxlength="100"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleCancel">取 消</el-button>
      <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>
<style lang="less" scoped></style>