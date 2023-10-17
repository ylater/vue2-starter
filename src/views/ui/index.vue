<script setup>
const colorList = [
  {
    name: 'primary',
    label: '主色',
    value: 'var(--rm-primary-color)'
  },
  {
    name: 'secondary',
    label: '辅色',
    value: 'var(--rm-secondary-color)'
  },
  {
    name: 'success',
    label: '成功',
    value: 'var(--rm-success-color)'
  },
  {
    name: 'warning',
    label: '警告',
    value: 'var(--rm-warning-color)'
  },
  {
    name: 'danger',
    label: '危险',
    value: 'var(--rm-danger-color)'
  },
  {
    name: 'info',
    label: '信息',
    value: 'var(--rm-info-color)'
  }, {
    name: 'gradient',
    label: '渐变色',
    value: 'var(--rm-gradient-color)'
  }
]
const textColor = [
  {
    label: '标题、正文',
    value: 'var(--rm-text-color)'
  },
  {
    label: '正文',
    value: 'var(--rm-text-color-light)'
  },
  {
    label: '次级正文、辅助文字',
    value: 'var(--rm-text-color-lighter)'
  },
  {
    label: '输入框辅助说明、禁用状态文本',
    value: 'var(--rm-text-color-lightest)'
  }
]

const borderColor = [
  {
    label: '边框悬停',
    value: 'var(--rm-border-color)'
  },
  {
    label: '默认边框、分割线',
    value: 'var(--rm-border-color-light)'
  },
  {
    label: '次级边框',
    value: 'var(--rm-border-color-lighter)'
  },
  {
    label: '辅助边框',
    value: 'var(--rm-border-color-lightest)'
  }
]

const bgColor = [
  {
    label: '表格表头背景色',
    value: 'var(--rm-bg-color)'
  },
  {
    label: '默认背景色、下拉框悬停背景色、警用状态背景色',
    value: 'var(--rm-bg-color-light)'
  },
]
const fontSize = [
  {
    label: '大标题',
    value: 'var(--rm-font-size-h1)'
  },
  {
    label: '标题',
    value: 'var(--rm-font-size-h2)'
  },
  {
    label: '副标题',
    value: 'var(--rm-font-size-h3)'
  },
  {
    label: '小标题',
    value: 'var(--rm-font-size-h4)'
  },
  {
    label: '正文',
    value: 'var(--rm-font-size-base)'
  },
  {
    label: '次级正文',
    value: 'var(--rm-font-size-sm)'
  },
  {
    label: '辅助文字',
    value: 'var(--rm-font-size-xs)'
  },
]
</script>	
<template>
  <div class='ui-page'>
    <h1>医疗保障信息平台用户界面规范</h1>
    <section>
      <h3>颜色</h3>
      <div class="color-list">
        <div class="color-item" v-for="item in colorList" :key="item.name">
          <label>{{ item.label }}</label>
          <div :class="item.name" class="color-box"></div>
          <p>{{ item.value }}</p>
        </div>
      </div>

    </section>

    <section>
      <h3>文本色</h3>
      <div class="color-list">
        <div class="color-item" v-for="item in textColor" :key="item.value">
          <label :style="`color:${item.value}`">{{ item.label }}</label>
          <div :class="item.name" class="color-box" :style="`background:${item.value}`"></div>
          <p>{{ item.value }}</p>
        </div>
      </div>

    </section>
    <section>
      <h3>边框色</h3>
      <div class="color-list">
        <div class="color-item" v-for="item in borderColor" :key="item.value">
          <label :style="`border:1px solid ${item.value};padding:4px 12px`">{{ item.label }}</label>
          <div :class="item.name" class="color-box" :style="`background:${item.value}`"></div>
          <p>{{ item.value }}</p>
        </div>
      </div>

    </section>

    <section>
      <h3>背景色</h3>
      <div class="color-list">
        <div class="color-item" v-for="item in bgColor" :key="item.value">
          <label :style="`background: ${item.value};padding:4px 12px`">{{ item.label }}</label>
          <div :class="item.name" class="color-box" :style="`background:${item.value}`"></div>
          <p>{{ item.value }}</p>
        </div>
      </div>

    </section>
    <section>
      <h3>文字大小</h3>
      <div class="fontsize-list">
        <div class="fontsize" v-for="item in fontSize" :key="item.value">
          <label :style="`font-size: ${item.value};padding:4px 12px`">{{ item.label }}</label>
          <p>{{ item.value }}</p>
        </div>
      </div>
    </section>

    <section>
      <h3>按钮</h3>
      <el-row style="margin-bottom: 20px;">
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>

      <el-row style="margin-bottom: 20px;">
        <el-button type="primary" size="large">大型按钮</el-button>
        <el-button type="primary">默认按钮</el-button>
        <el-button type="primary" size="small">小型按钮</el-button>
      </el-row>

    </section>

  </div>
</template>

<style lang="less" scoped>
.ui-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px;
  background-color: #fff;

  section {
    width: 100%;
    max-width: 1200px;
    padding: 30px 0;

    h3 {
      padding: 12px 0;
      margin-bottom: 20px;
      border-top: 1px solid var(--rm-border-color-light);
    }
  }

  .color-list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    .color-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 10px;

      p {
        margin: 0;
      }

      label {
        margin: 0;
      }
    }
  }

  .color-box {
    width: 50px;
    height: 50px;
    margin: 10px;
    border-radius: 50%;
    display: inline-block;

    &.primary {
      background-color: var(--rm-primary-color);
    }

    &.secondary {
      background-color: var(--rm-secondary-color);
    }

    &.success {
      background-color: var(--rm-success-color);
    }

    &.warning {
      background-color: var(--rm-warning-color);
    }

    &.danger {
      background-color: var(--rm-danger-color);
    }

    &.info {
      background-color: var(--rm-info-color);
    }

    &.gradient {
      background: var(--rm-gradient-color);
    }
  }
}

.fontsize-list {
  display: flex;
  flex-direction: column;

  .fontsize {
    margin: 6px 0;
    display: flex;
    align-items: center;

    label {
      width: 120px;
    }
  }
}
</style>	
