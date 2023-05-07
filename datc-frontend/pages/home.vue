<template>
  <div class="mt-5">
    <div class="d-flex justify-space-between align-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" dark>
            <v-icon left>mdi-menu</v-icon>
            <h6>{{ selectedType }}</h6>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="item in computedTypes" :key="item" @click="selectedType = item">
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <div class="mr-10 ml-2 justify-space-between">
        <v-btn @click="fetchData('daily')"><h6>Daily</h6></v-btn>
        <v-btn @click="fetchData('weekly')"><h6>Weekly</h6></v-btn>
        <v-btn @click="fetchData('monthly')"><h6>Monthly</h6></v-btn>
      </div>
    </div>
    <div class=" mt-2 " ref="chart" style="height: 550px;"></div>
  </div>
</template>
<script>
import option from '~/assets/chartOptions/multiLinesHourly'
import option2 from '~/assets/chartOptions/multiLinesMonthly'
export default {
  name: 'Chart',
  data() {
    return {
      chartData: [],
      selectedType: 'HT-01',
      types: ['HT-01', 'HT-02', 'HT-03'],
      menu: false
    }
  },
  computed: {
    computedTypes() {
      return this.types.map((type) => type);
    },
  },
  async mounted() {
    await this.fetchData()
    this.initChart()
  },
  watch: {
    selectedType: {
      handler: async function () {
        await this.fetchData()
        this.initChart()
      }
    }
  },
  methods: {
    async fetchData(timePeriod = '') {
      try {
        let url = `https://nr.txio.live/tuah/${this.selectedType}`;
        console.log(url);
        if (timePeriod === 'daily') {
          url += '/daily';
        } else if (timePeriod === 'monthly') {
          url += '/monthly';
          this.chartOption = option2; // set chart option to option2
        } else if (timePeriod === 'weekly') {
          url += '/weekly';
          this.chartOption = option2; // set chart option to option
        } else {
          // Set a default time period of 'daily'
          url += '/daily';
          this.chartOption = option; // set chart option to option
        }
        const response = await fetch(url);
        const data = await response.json();
        this.chartData = data;
        this.initChart();
      } catch (error) {
        console.error(error);
      }
    },
    initChart() {
      const chart = this.$refs.chart;
      const echarts = require('echarts');
      const myChart = echarts.init(chart);
      myChart.setOption(this.chartOption(this.chartData), true); // use the dynamic chart option
    },
  }
}
</script>


  <style scoped>
    .menuSelect {
      display: flex; 
      justify-content: space-around;
      font-family: Kdam Thmor Pro, sans-serif;
    }
    
    .v-btn {
      border: 1px solid rgb(13, 185, 238); 
      color: rgb(106, 214, 214) !important;
      text-shadow: 2px 2px rgb(21, 15, 15);
    }
    </style>
  
  