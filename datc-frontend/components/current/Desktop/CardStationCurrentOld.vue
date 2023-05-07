<template>
    <div>
      <!-- <v-card class="card-color elevation-12"> -->
      <!-- <v-card-title class='color'>REAL-TIME DATA</v-card-title> -->
      <v-row class="padding arragement">
        <v-col cols="6" lg="4" class="left">
          <v-card-subtitle class="center">STATION 1</v-card-subtitle>
          <Gauge id="TEMP-1" :data="items[0].TEMP" max="35" unit="°C" />
        </v-col>
        <v-col cols="6" lg="4" class="left">
          <v-card-subtitle class="center">STATION 2 RH: {{this.items[0].RH}}</v-card-subtitle>
          <Gauge id="TEMP-2" :data="items[0].TEMP" max="35" unit="°C" />
        </v-col>
        <v-col cols="6" lg="4" class="right">
          <v-card-subtitle class="center">STATION 3</v-card-subtitle>
          <Gauge id="TEMP-3" :data="items[0].TEMP" max="35" unit="°C" />
        </v-col>
        <v-col cols="6" lg="4" class="left">
          <v-card-subtitle class="center">STATION 4</v-card-subtitle>
          <Gauge id="TEMP-4" :data="items[0].TEMP" max="35" unit="°C" />
        </v-col>
        <v-col cols="6" lg="4" class="left">
          <v-card-subtitle class="center">STATION 5</v-card-subtitle>
          <Gauge id="TEMP-5" :data="items[0].TEMP" max="35" unit="°C" />
        </v-col>
        <v-col cols="6" lg="4" class="right">
          <v-card-subtitle class="center">STATION 6</v-card-subtitle>
          <Gauge id="TEMP-6" :data="items[0].TEMP" max="35" unit="°C" />
        </v-col>
      </v-row>
      <!-- </v-card> -->
    </div>
  </template>
  
  <script>
  import Gauge from "~/components/current/Charts/Gauge.vue";
  export default {
    data() {
      return {
        index: "0",
        theme: "blue-theme",
      };
    },
  
    methods: {
      console: function (index) {
        this.index = index;
        const active = document.getElementById(index).classList.add("active");
        for (let i = 0; i <= 3; i++) {
          if (i != index) {
            let deactive = document.getElementById(i).classList.remove("active");
          }
        }
      },
    },
    props: ["items","stations"],
    components: { Gauge },
    mounted() {
      // const active = document.getElementById(0).classList.add("active");
    },
  };
  </script>
  
  <style scoped>
  .center {
    justify-content: center;
    background: rgba(0, 0, 0, 0.4) !important;
    /* background: #271f40 !important; */
    color: #fff !important;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-radius: 8px;
    padding: 6px;
    text-align: center;
  }
  
  .padding {
    padding: 0 1em;
  }
  
  .active {
    background: #64d3e4 !important;
  }
  
  .card {
    border-radius: 8px;
  }
  
  .card-color {
    /* background: rgb(240,244,230); */
    background: rgb(238, 248, 248);
    border-radius: 8px;
  }
  
  .arragement {
    display: flex;
    /* flex-direction: column; */
    justify-content: space-around;
    /* align-content: space-around; */
  }
  </style>
  