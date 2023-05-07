<template>
  <div>
            <v-row class='pb-5'>
          <v-col class='flex-btn'>
            <v-btn
            v-for="(sensor, index) in sensorsID"
            :id="sensor"
            :key="sensor"
            @click="console2(sensor,index)"
            class="button card card-color elevation-12 "
            style="width:200px"
            >{{ sensors[index] }}</v-btn
            >
          </v-col>
        </v-row>
    <!-- <v-row class="pb-3">
      <v-col
        v-for="(item, index) in items"
        :key="item.title"
        :cols="item.cols"
        sm="3"
      >
        <v-card @click="console(index)" :id="index" class="card card-color  elevation-12 ">
          <v-img :src="item.image" height="180px"></v-img>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row> -->
    <v-card class="card-color elevation-12">
      <!-- <v-card-title class="color">DETAILS</v-card-title> -->
        <!-- <v-row>
          <v-col class='flex-btn'>
            <v-btn
            v-for="(sensor, index) in sensorsID"
            :id="sensor"
            :key="sensor"
            @click="console2(sensor,index)"
            class="button card card-color elevation-12"
            style="width:200px"
            >{{ sensors[index] }}</v-btn
            >
          </v-col>
        </v-row> -->
      <v-row class="padding">
        <!-- <v-col cols="6" lg="6" class="left">
          <v-card class="elevation-8 card-detail">
            <v-card-title>
              {{ station }}
            </v-card-title>
            <v-row>
              <v-col cols="6">
                <Timeline :station="station" />
              </v-col>
              <v-col class="flex-column">
                <v-btn
                  v-for="(sensor, index) in sensorsID"
                  :id="sensor"
                  :key="sensor"
                  @click="console2(sensor,index)"
                  class="button card card-color elevation-8"
                  >{{ sensors[index] }}</v-btn
                >
              </v-col>
            </v-row>
          </v-card>
        </v-col> -->
        <v-col cols="6" lg="6" class="left">
          <v-card-subtitle class="center">Current</v-card-subtitle>
          <LineChartSingleData
            id="current"
            :data="trends.current[index2]"
            :dailyHour="arrayTime[index]"
            x-axis="Hour"
            :index="index2"
          />
        </v-col>
        <v-col cols="6" lg="6" class="left">
          <v-card-subtitle class="center">Hourly</v-card-subtitle>
          <LineChart
            id="houry"
            :dailyMax="trends.daily[index2].max"
            :dailyMin="trends.daily[index2].min"
            :dailyAvg="trends.daily[index2].avg"
            :dailyHour="trends.daily[index2].hour"
            x-axis="Hour"
            :index="index2"

          />
        </v-col>
        <v-col cols="6" lg="6" class="right">
          <v-card-subtitle class="center">Daily</v-card-subtitle>
          <LineChart
            id="weekly"
            :dailyMax="trends.weekly[index2].max"
            :dailyMin="trends.weekly[index2].min"
            :dailyAvg="trends.weekly[index2].avg"
            :dailyHour="trends.weekly[index2].day"
            x-axis="Day"
            :index="index2"
          />
        </v-col>

        <v-col cols="6" lg="6" class="left">
          <v-card-subtitle class="center">Monthly</v-card-subtitle>
          <LineChart
            id="monthly"
            :dailyMax="trends.monthly[index2].max"
            :dailyMin="trends.monthly[index2].min"
            :dailyAvg="trends.monthly[index2].avg"
            :dailyHour="trends.monthly[index2].monthName"
            x-axis="Month"
            :index="index2"
          />
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import LineChart from "~/components/trend/LineChart";
import LineChartSingleData from "~/components/trend/LineChartSingleData";
import Timeline from "~/components/trend/Timeline";

import { mapState } from "vuex";

export default {
  data() {
    return {
      index: "0",
      index2: "0",
      station: "Station A",
      sensorsID: ["DissolvedOxygen", "Temperature","pHValue", "Salinity", "Ammonia"],
      sensors: ["Dissolved Oxygen","Temperature", "pH Value", "Salinity", "Ammonia"],
      theme: "blue-theme",
    };
  },

  methods: {
    // console: function (index) {
    //   this.station = this.items[index].title;
    //   this.index = index;
    //   const active = document.getElementById(index).classList.add("active");
    //   for (let i = 0; i <= 3; i++) {
    //     if (i != index) {
    //       let deactive = document.getElementById(i).classList.remove("active");
    //     }
    //   }
    // },

    console2: function (sensor,index) {
      this.index2=index;
      const active2 = document
        .getElementById(sensor)
        .classList.add("active");
      for (let i = 0; i <= 4; i++) {
        let Classes=this.sensorsID[i]
        if (Classes != sensor) {
          let deactive = document.getElementById(Classes).classList.remove("active");
        }
      }
    },
  },

  computed: {
    ...mapState({
      trends: (state) => state.trends,
      arrayTime: (state)=> state.arrayTime
    }),
  },

  props: ["items"],

  components: { LineChart, Timeline, LineChartSingleData },

  mounted() {
    // const active = document.getElementById(0).classList.add("active");
    const active2 = document.getElementById('DissolvedOxygen').classList.add("active");
  },

};
</script>

<style scoped>

.center {
  justify-content: center;
  background: #271f40 !important;
  color: #fff !important;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  /* background: rgb(240, 244, 230); */
  background: rgb(238,248,248);
  border-radius: 8px;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.button {
  margin: 15px;
}

.card-detail {
  background-color: rgb(241, 241, 241) !important;
  border-radius: 8px;
}

.flex-btn{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
