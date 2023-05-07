<template>
  <div class="main-block">
    <v-row dense>
      <v-col v-for="i in 2" :key="i" align="center">
        <StationData
          :pid-name="pidName[i-1]"
          :station-name="stations[i-1].name"
          :temp-data="stations[i-1].sensorData[0].data"
          :humidity-data="stations[i-1].sensorData[1].data"
        />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col v-for="i in [3,4]" :key="i" align="center">
        <StationData
          :pid-name="pidName[i-1]"
          :station-name="stations[i-1].name"
          :temp-data="stations[i-1].sensorData[0].data"
          :humidity-data="stations[i-1].sensorData[1].data"
        />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col v-for="i in [5,6]" :key="i" align="center">
        <StationData
          :pid-name="pidName[i-1]"
          :station-name="stations[i-1].name"
          :temp-data="stations[i-1].sensorData[0].data"
          :humidity-data="stations[i-1].sensorData[1].data"
        />
      </v-col>
    </v-row>
  </div>
</template>


  <script>
  import StationData from "../Mobile/CardStationSingle.vue";
  // noinspection NpmUsedModulesInstalled
  import { mapState, mapMutations } from "vuex";
  import mqtt from "mqtt";
  export default {
    data() {
      return {
        pidName: ['Pentas', 'Cokmar', 'GF', 'LV 1', 'LV 2', 'Outside'],
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
    components: { StationData },
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
                          data: [message.TMP, message.RH]
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
  .main-block{
    background: rgba(0, 0, 0, 0.4) !important;
    border-radius: 8px;
  }
  </style>
  