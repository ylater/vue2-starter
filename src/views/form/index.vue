<script setup>
const payTypese = [
  { label: '支付宝', value: 'alipay' },
  { label: '微信', value: 'wechat' },
  { label: '医保个账', value: 'medical' },
  { label: '银行卡', value: 'bank' }
]
const insureInclude = [
  {
    label: '手术费', value: 'surgery'
  },
  { label: '门诊费', value: 'outpatient' },
  { label: '诊疗费', value: 'treatment' },
  { label: '药费', value: 'medicine' },
  { label: '住院费', value: 'hospitalization' },
  { label: '罕见病药费', value: 'special' },
  { label: '检验检查费', value: 'physical' },
  { label: '其他', value: 'other' }
]
const ruleForm = reactive({
  name: '长沙惠民保',
  region: '',
  cost: 120,
  daterange: [],
  date1: '',
  date2: '',
  immediate: true,
  type: [],
  resource: '',
  options: [],
  qa: [
    { q: '', a: '' }
  ],
  desc: '',
  file: '',
  content: ''
})
const rules = reactive({
  name: [
    { required: true, message: '请输入活动名称', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  ],
  region: [
    { required: true, message: '请选择活动区域', trigger: 'change' }
  ],
  date1: [
    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
  ],
  date2: [
    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
  ],
  type: [
    { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
  ],
  resource: [
    { required: true, message: '请选择活动资源', trigger: 'change' }
  ],
  desc: [
    { required: true, message: '请填写活动形式', trigger: 'blur' }
  ]
})
const ruleFormRef = ref(null)
const submitForm = () => {
  ruleFormRef.value.validate((valid) => {
    if (valid) {
      alert('submit!')
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
const resetForm = () => {
  ruleFormRef.value.resetFields()
}
</script>
<template>
  <rm-page title="表单页面"  footer>
    <div class="form-wrap">
      <el-form :model="ruleForm" :rules="rules" ref="ruleFormRef" label-width="100px">
        <el-form-item label="产品名称" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入活动名称" clearable></el-input>
        </el-form-item>
        <el-form-item label="销售区域" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择活动区域" clearable>
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="保费" required prop="cost">
          <rm-number-input v-model="ruleForm.cost" :precision="2" placeholder="请输入金额" controls-position="right"
            unit="元/年"></rm-number-input>
        </el-form-item>

        <el-form-item label="支付方式" props="pay" required>
          <el-select v-model="ruleForm.pay" multiple placeholder="请选择">
            <el-option v-for="item in payTypese" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="保障期限" required prop="daterange">
          <el-date-picker v-model="ruleForm.daterange" type="daterange" range-separator="至" start-placeholder="开始日期"
            end-placeholder="结束日期" placeholder="选择日期" clearable></el-date-picker>
        </el-form-item>
        <el-form-item label="投保期限" required>
          <el-date-picker clearable type="daterange" start-placeholder="开始日期" end-placeholder="结束日期" placeholder="选择日期"
            range-separator="至" v-model="ruleForm.date1"></el-date-picker>
        </el-form-item>
        <el-form-item label="即时生效" prop="immediate">
          <el-switch v-model="ruleForm.immediate"></el-switch>
        </el-form-item>
        <el-form-item label="保险覆盖" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox v-for="item in insureInclude" :key="item.value" :label="item.label"
              :name="item.value"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="代理平台" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="蚂蚁保"></el-radio>
            <el-radio label="微保"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="常见问题" prop="qa ">
          <div class="qa" v-for="(item, index) in ruleForm.qa" :key="index">
            <div class="qa-input">
              <el-input v-model="item.q" show-word-limit :maxlength="20">
                <template #prefix>Q：</template>
              </el-input>
              <el-input show-word-limit :maxlength="100" v-model="item.a" :rows="4">
                <template #prefix>A：</template>
              </el-input>
            </div>
            <div class="qa-actions">
              <el-button size="small" circle icon="el-icon-plus" @click="ruleForm.qa.push({ q: '', a: '' })"></el-button>
              <el-button size="small" v-if="ruleForm.qa.length > 1" circle icon="el-icon-minus"
                @click="ruleForm.qa.splice(index, 1)"></el-button>
            </div>

          </div>
        </el-form-item>
        <el-form-item label="产品说明" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc" clearable placeholder="请输入产品说明"></el-input>
        </el-form-item>
        <el-form-item label="产品附件" prop="file">
          <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :limit="3">
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="产品详情" prop="file">
          <rm-editor v-model="ruleForm.content"></rm-editor>
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <el-button type="primary" @click="submitForm">立即创建</el-button>
      <el-button @click="resetForm">重置</el-button>
    </template>
  </rm-page>
</template>
<style lang="less" scoped>
.form-wrap {
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  padding-top: 50px;
}

.qa {
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  .qa-input {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .qa-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 70px;
  }
}
</style>