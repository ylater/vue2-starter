<script setup>
import exportXlsx from '@/utils/exportExcel.js'
import EditForm from './components/edit.vue'
import { onMounted } from 'vue';
const { proxy } = getCurrentInstance()
const { $api, $msg, $confirm, $router } = proxy
const columns = [
  {
    prop: 'name',
    label: '姓名',
    width: 180,
    align: 'center',
    fixed: 'left',
  },
  {
    prop: 'date',
    label: '日期',
    width: 180,
    align: 'center',
    sortable: true,
  },
  {
    prop: 'sex',
    label: '性别',
    width: 80,
    align: 'center',
    filters: [
      {
        text: '男',
        value: '男'
      },
      {
        text: '女',
        value: '女'
      }
    ],
    filterMethod: filterSex
  },
  {
    prop: 'age',
    label: '年龄',
    width: 80,
    align: 'center'
  },
  {
    prop: 'phone',
    label: '电话',
    width: 180,
    align: 'center'
  },
  {
    prop: 'cost',
    label: '费用(元)',
    width: 120,
    align: 'center',
    sortable: true,
  },
  {
    label: '就诊时间',
    prop: 'time',
    width: 180,
    align: 'center'
  },
  {
    label: '诊断名称',
    prop: 'diagnosis',
    align: 'left'
  },
  {
    prop: 'address',
    label: '地址',
    width: 380,
    align: 'left'
  },
  {
    prop: 'action',
    label: '操作',
    align: 'center',
    width: 180,
    fixed: 'right',
    slot: 'action'
  }
]
//list
const query = ref({
  name: '',
  diagnosis: ''
})
const list = ref([])
const loading = ref(false)
const total = ref(0)
const size = ref(10)
const page = ref(1)
function getList() {
  loading.value = true
  const params = {
    ...query.value,
    pageNum: page.value,
    pageSize: size.value
  }
  $api.getMockList(params).then(res => {
    loading.value = false
    list.value = res.list
    total.value = Number(res.total)
  }).catch(err => {
    loading.value = false
  })
}

//分页--每页条数
function handleSizeChange() {
  page.value = 1
  getList()
}
//分页--当前页
function handleCurrentChange() {
  getList()
}
//search 
function getListBySearch() {
  page.value = 1
  getList()
}
getList()

//勾选
const tableRef = ref(null)
const selection = ref([])
const selectionIds = ref([])
const selectionFixed = 'left'
function handleSelectionChange(val) {
  selection.value = val
  selectionIds.value = selection.value.map(item => item.id)
  console.log(selection.value)
}
//分页勾选
function handlePageChange(val) {
  selection.value = []
}
//取消勾选
function cancelSelection() {
  tableRef.value.$refs.tableRef.clearSelection()
}
//导出勾选项
function exportSelection() {
  //删除操作列
  const header = columns.map(item => item.label).filter(item => item !== '操作')
  const keys = columns.map(item => item.prop)
  const data = selection.value.map(item => {
    const obj = {}
    keys.forEach(key => {
      obj[key] = item[key]
    })
    //删除操作列
    delete obj.action
    return obj
  })
  exportXlsx(data, header, 'list')
}
function exportCurrentPage() {
  const header = columns.map(item => item.label).filter(item => item !== '操作')
  const keys = columns.map(item => item.prop)
  const data = list.value.map(item => {
    const obj = {}
    keys.forEach(key => {
      obj[key] = item[key]
    })
    //删除操作列
    delete obj.action
    return obj
  })
  exportXlsx(data, header, 'list')
}
//费用统计
function getSummaries(param) {
  const { columns, data } = param
  const sums = []
  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = '合计'
      return
    }
    if (index === 7) {
      const values = data.map(item => Number(item[column.property]))
      if (!values.every(value => isNaN(value))) {
        sums[index] = values.reduce((prev, curr) => {
          const value = Number(curr)
          if (!isNaN(value)) {
            return prev + curr
          } else {
            return prev
          }
        }, 0)
        sums[index] += '元'
      } else {
        sums[index] = ' '
      }
    } else {
      sums[index] = ' '
    }
  })
  return sums
}
onMounted(() => {
  console.log(tableRef.value)
  tableRef.value.$refs.tableRef.doLayout()
})
/**
 * edit from
 */
const visibleEdit = ref(false)
const editId = ref('')
function handleEdit(row) {
  visibleEdit.value = true
  //随机
  editId.value = row.id
}
function handleClose() {
  editId.value = ''
  visibleEdit.value = false
}
function handleAdd() {
  visibleEdit.value = true
  editId.value = ''
}
/**
 * del
 */
function handleDel(row) {
  console.log(row)
  $confirm('此操作将永久删除该文件, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'error',
    center: true
  }).then(() => {
    // del api
    $msg('删除成功')
  }).catch(() => {
    // $msg('已取消删除', 'info')
  })
}
//filter
function filterSex(value, row) {
  return row.sex === value;
}
/**
 * 
 */
function handleDetail(row) {
  $router.push({
    path: '/table/detail',
    query: {
      id: row.id
    }
  })
}
</script>
<template>
  <div class="rm-page">

    <rm-filter :model="query" label-position="left" @search="getListBySearch" :loading="loading">
      <el-form-item label="姓名：" prop="name">
        <el-input v-model="query.name" placeholder="姓名" clearable></el-input>
      </el-form-item>
      <el-form-item label="诊断名称：" prop="diagnosis">
        <el-input v-model="query.diagnosis" placeholder="请输入诊断名称" clearable></el-input>
      </el-form-item>
    </rm-filter>
    <el-divider></el-divider>
    <div class="list">
      <div class="list-actions">
        <div class="actions">
          <el-button type="success" @click="handleAdd">新增</el-button>
          <el-button type="primary" @click="exportCurrentPage">导出</el-button>
          <div class="selection-actions" v-if="selectionIds.length">
            <el-button type="primary" @click="exportSelection">导出勾选项</el-button>
            <el-button type="default" @click="cancelSelection">取消勾选</el-button>
          </div>
        </div>
        <div class="right">
          <el-tooltip content="刷新" placement="bottom">
            <el-button icon="el-icon-refresh" :loading="loading" @click="getList">刷新</el-button>
          </el-tooltip>
        </div>
      </div>
      <rm-table ref="tableRef" :summary-method="getSummaries" show-summary :options="columns" :data="list"
        v-loading="loading" rowKey="id" keepSelection :total="total" :page-size.sync="size" :current-page.sync="page"
        @size-change="handleSizeChange" @page-change="handleCurrentChange" @selection-change="handleSelectionChange">
        <template #action="scope">
          <el-button type="text" size="small" @click="handleDetail(scope.row)">查看</el-button>
          <el-button type="text" size="small" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button type="text" size="small" @click="handleDel(scope.row)">删除</el-button>
        </template>
      </rm-table>
    </div>
    <!-- edit from  -->

    <!-- 编辑 -->
    <EditForm :visible.sync="visibleEdit" :editId="editId" @close="handleClose" @cancel="handleClose" width="800px"
      :title="editId ? '编辑' : '新增'">
    </EditForm>
  </div>
</template>
<style scoped lang="less">
.list-actions {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;

  .actions {
    display: flex;
  }
}

.selection-actions {
  margin-left: 10px;
}
</style>