<template>
  <div class="rm-table-wrap">
    <el-table border ref="tableRef" class="rm-table" v-bind="$attrs" v-on="$listeners" :height="height" :data="data"
      :row-class-name="rowClassName" :row-key="rowKey">
      <el-table-column v-if="selection" :fixed="selectionFixed" width="55px" align="center" type="selection"
        :selectable="selectInit" :reserve-selection="keepSelection"></el-table-column>
      <el-table-column v-if="showIndex" width="55px" align="center" :fixed="selectionFixed" label="序号" type="index"
        :index="(v) => v + 1"></el-table-column>
      <el-table-column :label="item.label" v-for="item in options" :type="item.type" :key="item.prop"
        :sortable="item.sortable" :show-overflow-tooltip="item.tooltip || true" :prop="item.prop" :width="item.width"
        :min-width="item.minWidth" :align="item.align" :fixed="item.fixed" :filters="item.filters"
        :filter-method="item.filterMethod">
        <template slot-scope="scope">
          <div class="rm-table-slot">
            <template v-if="item.image">
              <slot :name="item.prop" v-bind="scope"></slot>
            </template>
            <template v-else>
              <div class="slot-content" v-if="item.slot">
                <slot :name="item.slot" v-bind="scope"></slot>
              </div>
              <div class="slot-content" v-else-if="item.isPrice">
                {{ $utils.getNumfixed(scope.row[item.prop], item.precision) }}
              </div>
              <div class="slot-content" v-else>{{ scope.row[item.prop] }}</div>
            </template>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="rm-table-page">
      <el-pagination background v-if="pagination" class="table-pager" layout="total,prev, pager, next,  sizes, jumper"
        v-bind="$attrs" v-on="$listeners" @current-change="handlePageChange">
      </el-pagination>
    </div>
  </div>
</template>
<script setup>
const emits = defineEmits(['page-change'])
const props = defineProps({
  height: {
    type: [String, Number],
    default: '100%',
  },
  showIndex: {
    type: Boolean,
    default: true,
  },
  selection: {
    type: Boolean,
    default: true,
  },
  data: {
    type: Array,
    default: () => [],
  },
  options: {
    type: Array,
    default: () => [],
  },
  rendRow: {
    type: Function,
    default: () => { },
  },
  selectInit: {
    type: Function,
  },
  // 是否显示分页
  pagination: {
    type: Boolean,
    default: true,
  },
  rowClassName: {
    type: Function,
    default: () => { },
  },
  // 保持选择状态
  keepSelection: {
    type: Boolean,
  },
  rowKey: {
    type: String,
  },
  selectionFixed: {
    type: String,
    default: 'left',
  },
})
/**
 * 分页处理
 */
function handlePageChange(page) {
  emits('page-change', page)
}
</script>
<style lang="less" scoped>
.rm-table-slot {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  .slot-content {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.rm-table-wrap {
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;

  .rm-table {
    flex: 1;
  }

}



.rm-table-page {
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .table-pager {
    display: flex;
    align-items: center;
  }
}
</style>
<style lang="less">
.rm-table {
  width: 100%;
  flex: 1;

  &.el-table {
    th {
      background-color: var(--rm-bg-color);
      color: var(--rm-text-color);
      font-weight: bold;
    }


  }

  .el-table-column--selection .cell {
    padding-right: 10px;
  }

  &.el-table--enable-row-hover .el-table__body tr:hover>td.el-table__cell {
    background-color: #DEE9F5;
  }

}
</style>