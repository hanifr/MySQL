<template>
    <v-col align="center">
      <v-card-subtitle class="center">
        <h4 style="color: deepskyblue; text-shadow: 1px 1px black;">{{pidName}} : {{ stationName }}</h4>
      </v-card-subtitle>
      <v-card-subtitle class="center">
        <v-row dense>
          <v-col>
            <h5 bold style="color: gold; text-shadow: 2px 2px black;">{{ tempData }}°C</h5>
          </v-col>
          <v-col>
            <h5 bold style="color: #bfff00; text-shadow: 1px 1px black;">{{ humidityData }}%</h5>
          </v-col>
        </v-row>
      </v-card-subtitle>
    </v-col>
    </template>
    
    <script>
    export default {
      props: {
        pidName: {
            type: String,
            required: true
        },
        stationName: {
            type: String,
            required: true
        },
        tempData: {
            type: Number,
            required: true
        },
        humidityData: {
            type: Number,
            required: true
        }
      }
    }
    </script>
    <style scoped>
    .center {
    justify-content: center;
    /* background: rgba(0, 0, 0, 0.4) !important; */
    border-radius: 8px;
    padding: 5px;
    text-align: center;
    margin:0%;
  }
    </style>