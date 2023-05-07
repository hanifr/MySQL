<template>
    <div>
      <div v-if="$vuetify.breakpoint.mdAndUp" class="mt-4 menuSelect">
        <v-btn @click="setIndex(1)">
          <h6 class="btn-font">Summary</h6>
          <v-icon left>mdi-table</v-icon></v-btn>
        <v-btn @click="setIndex(2)">
          <h6 class="btn-font">Monitoring</h6>
          <v-icon left>mdi-gauge</v-icon></v-btn>
        <v-btn @click="setIndex(3)">
          <h6 class="btn-font">Trends & Analytics</h6>
          <v-icon left>mdi-trending-up</v-icon></v-btn>
          <v-btn @click="setIndex(4)">
          <h6 class="btn-font">Reporting</h6>
          <v-icon left>mdi-cloud-download</v-icon></v-btn>
          <v-btn @click="setIndex(5)">
          <h6 class="btn-font">Sensor</h6><v-icon left>mdi-map-marker</v-icon></v-btn>
      </div>
      <div v-else class="mt-4 menuSelect">
        <v-btn @click="setIndex(1)">
          <v-icon left>mdi-table</v-icon></v-btn>
        <v-btn @click="setIndex(3)">
          <v-icon left>mdi-google-analytics</v-icon></v-btn>
          <v-btn @click="setIndex(6)">
            <v-icon left>mdi-speedometer</v-icon></v-btn>
            <v-btn @click="setIndex(7)">
            <v-icon left>mdi-database</v-icon></v-btn>
      </div>
      <div class="mt-1">
        <component :is="selectedComponent"/>
      </div>
    </div>
  </template>
  
  <script>

//   import { VBtnGroup, VBtn } from 'vuetify/lib'
  import Trends from '../Trends/trendsAnalytics.vue';
  import realTimeTable from '../RealTime/Table.vue'
  import GaugeView from '../RealTime/GaugeView.vue';
  import rawDataQuery from '../Trends/rawDataQuery.vue';
  import sensorLocations from './sensorLocations.vue';
  import DataHealth from '../RealTime/DataHealth.vue';
  import DatabaseStorage from '../RealTime/DatabaseStorage.vue';
  import resetDatabaseTable from '../DangerZone/resetDatabaseTable.vue';
  
  export default {
    name: 'center-summary',
    components: {
      Trends,
      realTimeTable,
      GaugeView,
      rawDataQuery,
      sensorLocations,
      DataHealth,
      DatabaseStorage,
      resetDatabaseTable
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
            return 'realTimeTable';
          case 2:
            return 'GaugeView';
          case 3:
            return 'Trends';
          case 4:
            return 'rawDataQuery';
          case 5:
            return 'sensorLocations';
          case 6:
            return 'DataHealth';
          case 7:
            return 'DatabaseStorage';
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
  