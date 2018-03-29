import G2 from 'g2';

// 创建唯一的 ID
let uniqueId = 0;
function generateUniqueId() {
  uniqueId += 1;
  return `el-g2-${uniqueId}`;
}

export default function createG2(__operation) {
  return {
    data() {
      return {
        chart: null,
        chartId: generateUniqueId(),
      };
    },

    props: {
      width: Number,
      height: {
        type: Number,
        default: 300,
      },
      data: {
        type: Array,
        default: [],
      },
      plotCfg: {
        type: Object,
      },
      forceFit: {
        type: Boolean,
        default: true,
      },
    },

    watch: {
      data(newData, oldData) {
        if (newData !== oldData) {
          this.chart.changeData(newData);
        }
      },
      width(val, oldVal) {
        if (val !== oldVal) {
          this.chart.changeSize(val, this.height);
        }
      },
      height(val, oldVal) {
        if (val !== oldVal) {
          this.chart.changeSize(this.width, val);
        }
      },
    },

    mounted() {
      this.initChart();
    },

    beforeDestory() {
      this.chart.destroy();
      this.chart = null;
      this.chartId = null;
    },

    methods: {
      initChart() {
        const { width, height, data, plotCfg, forceFit } = this;

        const chart = new G2.Chart({
          id: this.chartId,
          width,
          height,
          plotCfg,
          forceFit,
        });
        __operation(chart, data);
        this.chart = chart;
      },
    },

    render(createElement) {
      return createElement('div', {
        attrs: {
          id: this.chartId,
        },
      });
    },
  };
}
