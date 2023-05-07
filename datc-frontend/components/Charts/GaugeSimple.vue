<template>
    <div class="level">
      <div :id="this.id" style="width: 100%; height: 150px" :data="data"></div>
    </div>
  </template>
  
  <script>
  import option from '~/assets/chartOptions/optionGaugeSimple.js'
  export default {
    data() {
      return {
      };
    },
    updated() {
        this.updateChart();
    },
    mounted() {
        this.updateChart();
    },
    props: ["id", "data", "max", "unit"],
    components: {},
    methods: {
      updateChart(){

      setTimeout(() => {
        const chartEl = document.getElementById(this.id);
        if (!chartEl) return;

        const chart = this.$echarts.init(chartEl);
        chart.setOption(option(this.data, this.unit, this.max), true);
        window.addEventListener("resize", function () {
        chart.resize();
        });
      }, 1);
        },
    },
  };
  </script>
  <style>
  .level {
    display: flex;
    justify-content: center;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  </style>
  