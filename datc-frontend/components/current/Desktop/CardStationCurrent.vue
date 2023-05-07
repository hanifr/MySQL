<!-- <template>
  <div>
    <v-row class="padding arragement mb-1">
      <v-col cols="6" lg="4" class="left">
        <v-card-subtitle class="center"><h3 style="color:deepskyblue; text-shadow: 1px 1px black;">PENTAS {{this.stations[0].name}}</h3></v-card-subtitle>
        <MultiGauge
        id="gauge-1"
        :disc="this.stations[0].sensorData[1].data"
        :temperature="this.stations[0].sensorData[0].data"/>
        <v-card-subtitle class="center">
          <v-row dense class="padding arragement">
            <v-col>
              <h3 bold style="color:gold; text-shadow: 2px 2px black;">
                {{this.stations[0].sensorData[0].data}}°C</h3>
            </v-col>
            <v-col>
              <h3 bold style="color:#bfff00; text-shadow: 1px 1px black;">
              {{this.stations[0].sensorData[1].data}}%</h3>
            </v-col>
          </v-row>
        </v-card-subtitle>
        
      </v-col>
      <v-col cols="6" lg="4" class="left">
        <v-card-subtitle class="center"><h3 style="color:deepskyblue; text-shadow: 1px 1px black;">COKMAR {{this.stations[5].name}}</h3></v-card-subtitle>
        <MultiGauge
        id="gauge-2"
        :disc="this.stations[5].sensorData[1].data"
        :temperature="this.stations[5].sensorData[0].data"/>
        <v-card-subtitle class="center">
          <v-row dense class="padding arragement">
            <v-col>
              <h3 bold style="color:gold; text-shadow: 2px 2px black;">
                {{this.stations[1].sensorData[0].data}}°C</h3>
            </v-col>
            <v-col>
              <h3 bold style="color:#bfff00; text-shadow: 1px 1px black;">
              {{this.stations[1].sensorData[1].data}}%</h3>
            </v-col>
          </v-row>
        </v-card-subtitle>
      </v-col>
      <v-col cols="6" lg="4" class="right">
        <v-card-subtitle class="center"><h3 style="color:deepskyblue; text-shadow: 1px 1px black;">GF {{this.stations[2].name}}</h3></v-card-subtitle>
        <MultiGauge
        id="gauge-3"
        :disc="this.stations[2].sensorData[1].data"
        :temperature="this.stations[2].sensorData[0].data"/>
        <v-card-subtitle class="center">
          <v-row dense class="padding arragement">
            <v-col>
              <h3 bold style="color:gold; text-shadow: 2px 2px black;">
                {{this.stations[2].sensorData[0].data}}°C</h3>
            </v-col>
            <v-col>
              <h3 bold style="color:#bfff00; text-shadow: 1px 1px black;">
              {{this.stations[2].sensorData[1].data}}%</h3>
            </v-col>
          </v-row>
        </v-card-subtitle>
      </v-col>
      <v-col cols="6" lg="4" class="left">
        <v-card-subtitle class="center"><h3 style="color:deepskyblue; text-shadow: 1px 1px black;">LV 1 {{this.stations[3].name}}</h3></v-card-subtitle>
        <MultiGauge
        id="gauge-4"
        :disc="this.stations[3].sensorData[1].data"
        :temperature="this.stations[3].sensorData[0].data"/>
        <v-card-subtitle class="center">
          <v-row dense class="padding arragement">
            <v-col>
              <h3 bold style="color:gold; text-shadow: 2px 2px black;">
                {{this.stations[3].sensorData[0].data}}°C</h3>
            </v-col>
            <v-col>
              <h3 bold style="color:#bfff00; text-shadow: 1px 1px black;">
              {{this.stations[3].sensorData[1].data}}%</h3>
            </v-col>
          </v-row>
        </v-card-subtitle>
      </v-col>
      <v-col cols="6" lg="4" class="left">
        <v-card-subtitle class="center"><h3 style="color:deepskyblue; text-shadow: 1px 1px black;">LV 2 {{this.stations[1].name}}</h3></v-card-subtitle>
        <MultiGauge
        id="gauge-5"
        :disc="this.stations[1].sensorData[1].data"
        :temperature="this.stations[1].sensorData[0].data"/>
        <v-card-subtitle class="center">
          <v-row dense class="padding arragement">
            <v-col>
              <h3 bold style="color:gold; text-shadow: 2px 2px black;">
                {{this.stations[1].sensorData[0].data}}°C</h3>
            </v-col>
            <v-col>
              <h3 bold style="color:#bfff00; text-shadow: 1px 1px black;">
              {{this.stations[1].sensorData[1].data}}%</h3>
            </v-col>
          </v-row>
        </v-card-subtitle>
      </v-col>
      <v-col cols="6" lg="4" class="right">
        <v-card-subtitle class="center"><h3 style="color:deepskyblue; text-shadow: 1px 1px black;">OUTSIDE {{this.stations[4].name}}</h3></v-card-subtitle>
        <MultiGauge
        id="gauge-6"
        :disc="this.stations[4].sensorData[1].data"
        :temperature="this.stations[4].sensorData[0].data"/>
        <v-card-subtitle class="center">
          <v-row dense class="padding arragement">
            <v-col>
              <h3 bold style="color:gold; text-shadow: 2px 2px black;">
                {{this.stations[4].sensorData[0].data}}°C</h3>
            </v-col>
            <v-col>
              <h3 bold style="color:#bfff00; text-shadow: 1px 1px black;">
              {{this.stations[4].sensorData[1].data}}%</h3>
            </v-col>
          </v-row>
        </v-card-subtitle>
      </v-col>
    </v-row>
  </div>
</template> -->
<template>
  <div>
    <v-row class="padding arragement mb-1">
      <template v-for="(station, index) in stations">
        <v-col cols="6" lg="4" class="left">
          <v-card-subtitle class="center">
            <h3 style="color:deepskyblue; text-shadow: 1px 1px black;">{{station.name}}</h3>
          </v-card-subtitle>
          <MultiGauge
            :id="`gauge-${index + 1}`"
            :disc="station.sensorData[1].data"
            :temperature="station.sensorData[0].data"/>
          <v-card-subtitle class="center">
            <v-row dense class="padding arragement">
              <v-col>
                <h3 bold style="color:gold; text-shadow: 2px 2px black;">
                  {{station.sensorData[0].data}}°C</h3>
              </v-col>
              <v-col>
                <h3 bold style="color:#bfff00; text-shadow: 1px 1px black;">
                  {{station.sensorData[1].data}}%</h3>
              </v-col>
            </v-row>
          </v-card-subtitle>
        </v-col>
      </template>
    </v-row>
  </div>
</template>

<script>
import Gauge from "~/components/current/Charts/Gauge.vue";
import MultiGauge from "~/components/current/Charts/TRHGauge.vue";
// noinspection NpmUsedModulesInstalled
import { mapState, mapMutations } from "vuex";
import mqtt from "mqtt";
export default {
  data() {
    return {
      theme: "blue-theme",
      fixed: false,
      right: true,
      rightDrawer: false,
      title: "DASHBOARD",
      connection: {
        host: "zr.txio.live",
        port: 8888,
        endpoint: "/mqtt",
        clean: true, // Reserved session
        connectTimeout: 3000, // Time out
        reconnectPeriod: 3000, // Reconnection interval
      },
      subscription: {
        topic: ["ea/#"],
        qos: 0,
      },
      receiveNews: "",
      qosList: [
        { label: 0, value: 0 },
        { label: 1, value: 1 },
        { label: 2, value: 2 },
      ],
      client: {
        connected: false,
      },
      subscribeSuccess: false,
      loadedData: false,
      loadedServer: false,
    };
  },
  components: { Gauge, MultiGauge },
  methods: {
    createConnection() {
      const { host, port, endpoint, ...options } = this.connection;
      const connectUrl = `wss://${host}:${port}${endpoint}`;
      try {
        this.client = mqtt.connect(connectUrl, options);
      } catch (error) {
        console.log("mqtt.connect error", error);
      }
      this.client.on("connect", () => {
        console.log("Connection succeeded!");
      });
      this.client.on("error", (error) => {
        console.log("Connection failed", error);
      });
      this.client.on("message", (topic, message) => {
        if (topic === "ea/datc/s/data") {
          this.adddata(0);
          // this.checkWarning(message);
          // this.countWarning(message);
          this.countOnline(message);
          this.currentData = new Date();
          message = JSON.parse(message);
                    console.log(message);
                  if (message.TID == 501){
                        const data = {
                        indexStation: 0,
                        indexSensor: 2,
                        TID: message.TID,
                        data: [message.TMP, message.RH],
                      };
                    this.clearWarningRemarks(0);
                    this.getData(data);
                    this.checkWarning3(data);
                  }
                  if (message.TID == 502){
                        const data = {
                        indexStation: 1,
                        indexSensor: 2,
                        TID: message.TID,
                        data: [message.TMP, message.RH],
                      };
                    this.clearWarningRemarks(1);
                    this.getData(data);
                    this.checkWarning3(data);
                  }
                  if (message.TID == 503){
                        const data = {
                        indexStation: 2,
                        indexSensor: 2,
                        TID: message.TID,
                        data: [message.TMP, message.RH],
                      };
                    this.clearWarningRemarks(2);
                    this.getData(data);
                    this.checkWarning3(data);
                  }
                  if (message.TID == 504){
                        const data = {
                        indexStation: 3,
                        indexSensor: 2,
                        TID: message.TID,
                        data: [message.TMP, message.RH],
                      };
                    this.clearWarningRemarks(3);
                    this.getData(data);
                    this.checkWarning3(data);
                  }
                  if (message.TID == 505){
                        const data = {
                        indexStation: 4,
                        indexSensor: 2,
                        TID: message.TID,
                        data: [message.TMP, message.RH],
                      };
                    this.clearWarningRemarks(4);
                    this.getData(data);
                    this.checkWarning3(data);
                  }
                  if (message.TID == 506){
                        const data = {
                        indexStation: 5,
                        indexSensor: 2,
                        TID: message.TID,
                        data: [message.TMP, message.RH],
                      };
                    this.clearWarningRemarks(5);
                    this.getData(data);
                    this.checkWarning3(data);
                  }
                  this.loadedData = true;
        }
      });
    },
    doSubscribe() {
      const { topic, qos } = this.subscription;
      this.client.subscribe(topic, { qos }, (error, res) => {
        if (error) {
          return;
        }
        this.subscribeSuccess = true;
      });
    },
    diff_minutes(dt2, dt1) {
      var diff = (dt2.getTime() - dt1.getTime()) / 1000;
      diff /= 60;
      return Math.abs(Math.round(diff));
    },
    adddata: function (index) {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      function checkTime(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }
      // add a zero in front of numbers<10
      m = checkTime(m);
      s = checkTime(s);
      this.realTime = h + ":" + m + ":" + s;
      const data = { index: index, realTime: this.realTime };
      // console.log(data)
      this.getCurrentTimeArray(data);
    },
    ...mapMutations({
      checkWarning3: "checkWarning3",
      countWarning: "countWarning",
      countOnline:"countOnline",
      getDuration: "getDuration",
      getCurrentTimeArray: "getCurrentTimeArray",
      clearWarningRemarks:"clearWarningRemarks",
      getData:"getData"
    }),
  },
  computed: {
    ...mapState({
      brandLogo: (state) => state.brandLogo,
      stations: (state) => state.stations,
      duration: (state) => state.duration,
    }),
    // ...mapGetters(["loggedInUser", "isAuthenticated"]),
  },
  mounted: function () {
    let elHtml = document.getElementsByTagName("html")[0];
    elHtml.style.overflowY = null;
  },
  async mounted() {
    this.createConnection();
    this.doSubscribe();
    this.timeData = new Date();
  },
  watch: {
    // Watch for data interval time
    loadedData: function () {
      if (this.loadedData == true) {
        setInterval(() => {
          this.timeData = new Date();
          let durationTime = this.diff_minutes(this.timeData, this.currentData);
          this.getDuration(durationTime);
        }, 1500);
      }
    },

    // // Watch for data interval time
    loadedServer: function () {
      if (this.loadedServer == true) {
        setInterval(() => {
          this.timeServer = new Date();
          let durationTime = this.diff_minutes(
            this.timeServer,
            this.currentServer
          );
          this.getDurationServer(durationTime);
        }, 1500);
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gruppo&display=swap');

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

h3 {
      font-family: Kdam Thmor Pro, sans-serif;
      font-size: large;
      /* font-weight:bolder; */
    }
</style>
