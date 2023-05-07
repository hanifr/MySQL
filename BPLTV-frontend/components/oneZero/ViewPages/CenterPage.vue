<template>
    <div>
      <div v-if="$vuetify.breakpoint.mdAndUp" class="mt-4 menuSelect">
        <v-btn @click="setIndex(1)">
          <h6 class="btn-font">Monitoring</h6>
          <v-icon left>mdi-gauge</v-icon></v-btn>
        <v-btn @click="setIndex(2)">
          <h6 class="btn-font">Trends & Analytics</h6>
          <v-icon left>mdi-trending-up</v-icon></v-btn>
          <v-btn @click="setIndex(3)">
          <h6 class="btn-font">Reporting</h6>
          <v-icon left>mdi-cloud-download</v-icon></v-btn>
      </div>
      <div v-else class="mt-4 menuSelect">
        <v-btn @click="setIndex(1)">
          <v-icon left>mdi-gauge</v-icon></v-btn>
        <v-btn @click="setIndex(2)">
          <v-icon left>mdi-google-analytics</v-icon></v-btn>
      </div>
      <div class="mt-1">
        <component :is="selectedComponent"/>
      </div>
    </div>
  </template>
  
  <script>
  import Trends from '../Trends/TrendsAnalytics.vue';
  import GaugeView from '../RealTime/GaugeView.vue';
  import rawDataQuery from '../Trends/RawDataQuery.vue';
  
  export default {
    name: 'center-summary',
    components: {
      Trends,
      GaugeView,
      rawDataQuery,
    },
    data() {
      return {
        index: 1,
      };
    },
    computed: {
      selectedComponent() {
        switch (this.index) {
          case 1:
            return 'GaugeView';
          case 2:
            return 'Trends';
          case 3:
            return 'rawDataQuery';
        }
      }
    },
    methods: {
      setIndex(value) {
        this.index = value;
      }
    }
  };
  </script>
  
  <style scoped>
  .menuSelect {
    display: flex; 
    justify-content: space-around;
    font-family: Kdam Thmor Pro, sans-serif;
  }
  </style>
  