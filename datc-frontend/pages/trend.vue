<template>
  <div>
    <!-- <h2 class='header'>TRENDS</h2> -->
    <CardStationTrend :items="items" class="pb-7 pt-5" />
    <!-- <CardStationTrend class="pb-7" /> -->
  </div>
</template>

<script>
import CardStationTrend from "~/components/trend/CardStationTrend";

import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  // middleware: ["auth", "isUser", "isTopic"],
  // middleware: ["auth", "isUser", "isTopic"],

  components: { CardStationTrend },

  computed: {
    ...mapState({
      items: (state) => state.items,
    }),
    // ...mapGetters(["loggedInUser", "isAuthenticated"])
  },

  methods: {
    ...mapMutations({
      getDaily: "getDaily",
      getWeekly: "getWeekly",
      getMonthly: "getMonthly",
    }),

    getDataHourly: function (deviceID, sensorVal, indexSensor) {
      // console.log(this.loggedInUser.deviceID)
      this.$axios
        .$get(`https://nexplex-back.herokuapp.com/api/daily/`, {
          params: {
            // .$get(`/daily/`,{params:{
            deviceID: deviceID,
            val: sensorVal,
          },
        })
        .then((response) => {
          let data = {};
          let max = [];
          let min = [];
          let avg = [];
          let hour = [];
          response.forEach((item) => {
            max.push(item.max);
            avg.push(item.avg);
            min.push(item.min);
            hour.push(item.hour);
          });
          data = { deviceID, indexSensor, min, max, avg, hour };
          // console.log(data)
          this.getDaily(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getDataDaily: function (deviceID, sensorVal, indexSensor) {
      this.$axios
        .$get("https://nexplex-back.herokuapp.com/api/weekly/", {
          params: {
            // .$get("/weekly/",{params:{
            deviceID: deviceID,
            val: sensorVal,
          },
        })
        .then((response) => {
          let data = {};
          let min = [];
          let max = [];
          let avg = [];
          let day = [];
          response.forEach((item) => {
            max.push(item.max);
            avg.push(item.avg);
            min.push(item.min);
            day.push(item.day);
          });
          data = { deviceID, indexSensor, min, max, avg, day };
          this.getWeekly(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getDataMonthly: function (deviceID, sensorVal, indexSensor) {
      this.$axios
        .$get("https://nexplex-back.herokuapp.com/api/monthly/", {
          params: {
            // .$get("/monthly/",{params:{
            deviceID: deviceID,
            val: sensorVal,
          },
        })
        .then((response) => {
          let data = {};
          let min = [];
          let max = [];
          let avg = [];
          let month = [];
          let monthName = [];

          response.forEach((item) => {
            max.push(item.max);
            avg.push(item.avg);
            min.push(item.min);
            monthName.push(item.monthname);
          });
          data = { deviceID, indexSensor, min, max, avg, monthName };
          this.getMonthly(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  async created() {
    // const station=['stationOne','stationTwo','stationThree','stationFour']
    const val = ["DO_val", "TMP_val", "PH_val", "DD_val", "DG_val"];

    // daily
    // for(let i=0;i<station.length;i++){
    for (let j = 0; j < val.length; j++) {
      // this.getDataHourly(this.loggedInUser.deviceID, val[j], j);
    }
    // }

    // weekly
    //  for(let i=0;i<station.length;i++){
    for (let j = 0; j < val.length; j++) {
      // this.getDataDaily(this.loggedInUser.deviceID, val[j], j);
    }

    // }
    //monthly
    // for(let i=0;i<station.length;i++){
    for (let j = 0; j < val.length; j++) {
      // this.getDataMonthly(this.loggedInUser.deviceID, val[j], j);
    }
  },
  // },
};
</script>

<style>
.header {
  padding: 20px 0;
}

/* .v-main__wrap{
  background: rgb(224,224,224)!important;

} */
</style>
