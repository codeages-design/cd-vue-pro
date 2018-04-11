<template>
  <div>
    <cd-alert
      :isShowIcon="true"
      type="info"
      @close="alertClose">
      这是你的控制台
    </cd-alert>
    <x-panel>
      <span slot="title">今日数据</span>
      <ul class="subfield-list">
        <li class="subfield-item" v-for="item in todayData" :key="item.title">
          <div class="subfield-item__title">{{ item.title }}</div>
          <div class="subfield-item__number">{{ item.number }}</div>
          <div class="subfield-item__subtitle">{{ item.subtitle }}: {{ item.total }}</div>
        </li>
      </ul>
    </x-panel>
    <el-row :gutter="24" v-if="isAdmin || isSuperAdmin">
      <el-col :span="10">
        <x-panel>
          <span slot="title">付费订单</span>
          <x-pie-chart
            :height="400"
            :data="payOrderData">
          </x-pie-chart>
        </x-panel>
      </el-col>
      <el-col :span="14">
        <x-panel>
          <span slot="title">付费订单</span>
          <x-line-chart
            :height="400"
            :data="orderData">
          </x-line-chart>
        </x-panel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import G2 from 'g2';
import createG2 from '@/containers/components/g2';

import { mapState, mapActions, mapGetters } from 'vuex';

const XLineChart = createG2((chart, data) => {
  let Frame = G2.Frame;
  let frame = new Frame(data);
  frame = Frame.combinColumns(frame, ['newOrder', 'payOrder'], 'value', 'order', 'date');
  console.log('frame', frame)
  chart.source(frame, {
    date: {
      alias: '日期',
      type: 'time',
      mask: 'yyyy.mm.dd',
    },
    value: {
      alias: '订单数'
    }
  });
  chart.legend({
    position: 'bottom'
  });
  chart.line().position('date*value').color('order', ['#1f77b4', '#ff7f0e']).shape('spline').size(2);
  chart.render();
});

const XPieChart = createG2((chart, data) => {
  var Stat = G2.Stat;
  chart.source(data);
  chart.coord('theta', {
    radius: 1 // 设置饼图的大小
  });
  chart.legend('name', {
    position: 'bottom',
    itemWrap: true,
  });
  chart.intervalStack()
    .position(Stat.summary.percent('value'))
    .color('name')
    .label('name*..percent', function(name, percent) {
      percent = (percent * 100).toFixed(2) + '%';
      return name + ' ' + percent;
    });
  chart.render();
});

export default {
  components: {
    XLineChart,
    XPieChart
  },
  data() {
    return {
    }
  },
  created() {
    this.fetchData();
  },
  computed: {
    ...mapState({
      todayData: state => state.homepage.todayData,
      orderData: state => state.homepage.orderData,
      payOrderData: state => state.homepage.payOrderData,
    }),
    ...mapGetters({
      isAdmin: 'isAdmin',
      isSuperAdmin: 'isSuperAdmin'
    })
  },
  methods: {
    ...mapActions('homepage', [
      'getTodayData',
      'getOrderStatistic',
      'getPayOrderStatistic'
    ]),
    fetchData() {
      this.getTodayData().then((res) => {
        console.log('getTodayData', res);
      });
      this.getOrderStatistic().then((res) => {
        console.log('getOrderStatistic', res);
      });
      this.getPayOrderStatistic().then((res) => {
        console.log('getPayOrderStatistic', res);
      });
    },
    alertClose(e) {
      console.log('alert被关闭了', e)
    }
  }
}
</script>

<style lang="less" scoped>
.subfield-list {
  display: flex;
  padding-left: 0;
  margin: 0 auto;
  .subfield-item {
    flex: 1;
    color: #616161;
    text-align: center;
    list-style: none;
    + .subfield-item {
      border-left: 1px solid #f5f5f5;
    }
  }
  .subfield-item__title {
    font-size: 14px;
    color: #313131;
    margin-top: 0;
  }
  .subfield-item__number {
    font-size: 24px;
    /* margin-bottom: 10px; */
    display: block;
    color: #313131;
  }
  .subfield-item__subtitle {
    color: #919191;
  }
}
</style>
