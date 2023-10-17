<script setup>
import vcard from './components/vcard.vue'
import { LineOptions, BarOptions, PieOptions, SalesOptions, getRadarOptions, getPieOptions, getPieGroupOptions, getLineOptions } from './options/index.js'
const salesRank = [
  {
    name: '长沙市第一医院',
    value: 100000
  },
  {
    name: '长沙市第二医院',
    value: 90000
  },
  {
    name: '长沙市第三医院',
    value: 80000
  },
  {
    name: '长沙市第四医院',
    value: 70000
  },
  {
    name: '长沙市第五医院',
    value: 60000
  },
  {
    name: '长沙市第六医院',
    value: 50000
  },
  {
    name: '长沙市第七医院',
    value: 40000
  },
  {
    name: '长沙市第八医院',
    value: 30000
  },
  {
    name: '长沙市第九医院',
    value: 20000
  },
  {
    name: '长沙市第十医院',
    value: 10000
  }
]
const radarData = [
  {
    name: '销售',
    value: 234
  },
  {
    name: '管理',
    value: 342
  },
  {
    name: '信息技术',
    value: 264
  },
  {
    name: '客服',
    value: 124
  },
  {
    name: '研发',
    value: 368
  }
]
const radarOpt = getRadarOptions(radarData)
//各指标占比 
const pieData = [
  {
    name: '支付宝',
    value: [234, 342, 264, 124, 368, 234, 342, 264, 124, 368, 123, 222]
  },
  {
    name: '微信',
    value: [234, 342, 264, 124, 368, 234, 342, 264, 124, 368, 123, 222]
  },
  {
    name: '医保个账',
    value: [234, 342, 264, 124, 368, 234, 342, 264, 124, 368, 123, 222]
  },
  {
    name: '银行卡',
    value: [234, 342, 264, 124, 368, 234, 342, 264, 124, 368, 123, 222]
  }
]
const pieOpt = getPieOptions(pieData)
//交易情况
const lineData = [
  {
    name: '支付宝',
    value: 234
  },
  {
    name: '微信',
    value: 342
  },
  {
    name: '医保个账',
    value: 264
  },
  {
    name: '银行卡',
    value: 124
  }
]
const lineOpt = getLineOptions(lineData)
//活动预测
const pieGroupData = [
  {
    name: '支付宝',
    value: 234
  },
  {
    name: '微信',
    value: 342
  },
  {
    name: '医保个账',
    value: 264
  },
  {
    name: '银行卡',
    value: 124
  }
]
const pieGroupOpt = getPieGroupOptions(pieGroupData)
</script>
<template>
  <rm-card title="数据总揽">
    <el-row :gutter="20" style="margin-bottom: 20px;">
      <el-col :span="6">
        <div class="c-card">
          <div class="c-card-title">
            <h3>总支付额</h3>
            <el-tooltip content="总支付额说明内容">
              <i class="el-icon-question"></i>
            </el-tooltip>
          </div>
          <div class="c-card-content">
            <div class="c-num">¥ 100,000</div>
            <div class="c-chart">
              <RmChart :options="LineOptions"></RmChart>
            </div>
          </div>
          <div class="c-card-meta">
            <div class="meta">较前日 0.00%</div>
            <div class="meta">日环比 0.00%</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="c-card">
          <div class="c-card-title">
            <h3>总支付额</h3>
            <el-tooltip content="总支付额说明内容">
              <i class="el-icon-question"></i>
            </el-tooltip>
          </div>
          <div class="c-card-content">
            <div class="c-num">¥ 100,000</div>
            <div class="c-chart">
              <RmChart :options="BarOptions"></RmChart>
            </div>
          </div>
          <div class="c-card-meta">
            <div class="meta">较前日 0.00%</div>
            <div class="meta">日环比 0.00%</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="c-card">
          <div class="c-card-title">
            <h3>总支付额</h3>
            <el-tooltip content="总支付额说明内容">
              <i class="el-icon-question"></i>
            </el-tooltip>
          </div>
          <div class="c-card-content">
            <div class="c-num">¥ 100,000</div>
            <div class="c-chart">
              <RmChart :options="BarOptions"></RmChart>
            </div>
          </div>
          <div class="c-card-meta">
            <div class="meta">较前日 0.00%</div>
            <div class="meta">日环比 0.00%</div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="c-card">
          <div class="c-card-title">
            <h3>总支付额</h3>
            <el-tooltip content="总支付额说明内容">
              <i class="el-icon-question"></i>
            </el-tooltip>
          </div>
          <div class="c-card-content">
            <div class="c-num">¥ 100,000</div>
            <div class="c-chart">
              <RmChart :options="PieOptions"></RmChart>
            </div>
          </div>
          <div class="c-card-meta">
            <div class="meta">较前日 0.00%</div>
            <div class="meta">日环比 0.00%</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-bottom: 20px;">
      <el-col :span="8">
        <vcard title="各指标占比" shadow="hover">
          <div style="height: 360px;">
            <RmChart :options="pieOpt"></RmChart>
          </div>
        </vcard>
      </el-col>
      <el-col :span="8">
        <vcard title="交易情况" shadow="hover">
          <div style="height: 360px;">
            <RmChart :options="lineOpt"></RmChart>
          </div>
        </vcard>
      </el-col>
      <el-col :span="8">
        <vcard title="活动预测" shadow="hover">
          <div style="height: 360px;">
            <RmChart :options="pieGroupOpt"></RmChart>
          </div>
        </vcard>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="16">
        <vcard title="销售额" shadow="hover">
          <template #extra>
            <el-button type="text">查看更多</el-button>
          </template>
          <div class="salse-card">
            <div class="salse-chart">
              <RmChart :options="SalesOptions"></RmChart>
            </div>
            <div class="salse-rank">
              <h3>销售排行榜</h3>
              <div class="rank-item" v-for="(item, index) in salesRank" :key="item.label">

                <div class="rank-item-label">
                  <span class="rank-num">{{ index + 1 }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="rank-item-value">{{ item.value }}</div>
              </div>
            </div>
          </div>
        </vcard>
      </el-col>
      <el-col :span="8">
        <vcard title="销售指数" shadow="hover">
          <div style="height: 360px;">
            <RmChart :options="radarOpt"></RmChart>
          </div>

        </vcard>
      </el-col>
    </el-row>
  </rm-card>
</template>
<style lang="less" scoped>
.c-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 12px;
  border-radius: 2px;
  border: 1px solid var(--rm-border-color-lighter);

  .c-card-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--rm-text-color-light);

    h3 {
      font-size: 14px;
      font-weight: normal;
      color: var(--rm-text-color-light);
    }
  }

  .c-card-content {
    padding: 12px 0;

    .c-num {
      font-size: 30px;
      font-weight: bold;
    }

    .c-chart {
      width: 100%;
      height: 80px;
    }
  }

  .c-card-meta {
    padding: 12px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--rm-text-color-light);
    border-top: 1px solid var(--rm-border-color-lighter);
  }
}

.salse-card {
  width: 100%;
  height: 360px;
  display: flex;
  align-items: flex-start;

  .salse-chart {
    flex: 1;
    height: 100%;
  }

  .salse-rank {
    width: 300px;

    h3 {
      margin-bottom: 12px;
    }

    .rank-item {
      height: 32px;
      padding: 0 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 13px;

      .rank-num {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: var(--rm-bg-color);
      }

      //排行前三
      &:nth-child(-n + 4) {
        color: var(--rm-primary-color);

        .rank-num {
          background-color: var(--rm-primary-color);
          color: #fff;
        }
      }

      // //斑马纹
      // &:nth-child(odd) {
      //   background-color: var(--rm-bg-color);
      // }
    }
  }
}
</style>