<template>
    <!-- <v-container> -->
    <div v-if="$vuetify.breakpoint.smAndUp" class="text mb-2 text-right">{{ today }}, {{ date }}, {{ time }}
           <!-- <v-card-subtitle class="center time">
            <p class="title ma-1 font-weight-black blue-grey--text">
                </p>
          </v-card-subtitle> -->
    
          <!-- <v-card-title class="center time">
          <v-btn color="blue-grey">
          <p class="headline ma-1 font-weight-black yellow--text text--lighten-1">{{ time }}</p></v-btn>
          </v-card-title> -->
    
    
    </div>

    <div v-else class="textSmall mb-2 text-right">
      {{ today }}, {{ date }}, {{ time }}
    </div>
    <!-- </v-container> -->
    </template>
    
    
    <script>
    export default {
      data() {
        return {
          time: "",
          hour: "",
          min: "",
          sec: "",
          date: "",
          day: [
            "SUNDAY",
            "MONDAY",
            "TUESDAY",
            "WEDNESDAY",
            "THURSDAY",
            "FRIDAY",
            "SATURDAY",
          ],
          today: "",
        };
      },
      methods: {
        startTime: function () {
          var today = new Date();
          var h = today.getHours();
          var m = today.getMinutes();
          var s = today.getSeconds();
          var d = today.getDate();
    
          var day = today.getDay();
          this.today = this.day[day];
          var month = today.getMonth() + 1;
          var year = today.getFullYear();
          m = this.checkTime(m);
          s = this.checkTime(s);
          h = this.checkTime(h);
    
          d = this.checkTime(d);
          month = this.checkTime(month);
    
          //   document.getElementById('txt').innerHTML =
          this.time = h + ":" + m + ":" + s;
          this.hour = h;
          this.min = m;
          this.sec = s;
          this.date = d + "-" + month + "-" + year;
    
          var t = setTimeout(this.startTime, 500);
        },
        checkTime: function (i) {
          if (i < 10) {
            i = "0" + i;
          } // add zero in front of numbers < 10
          return i;
        },
      },
      mounted() {
        this.startTime();
      },
    };
    </script>
    
    <style scoped>
    
    .textSmall {
        letter-spacing: 1px;
        font-size: 12px;
        color: #ffffff;
        text-align: center;
        position: absolute;
        left: 25%;
        top: 30%;
        transform: translate(5%, 0%);
        color: #daefe1;
        text-shadow: 0 20 20px rgb(4, 84, 111),  0 0 20px rgba(10, 230, 72, 0);
        }
     .text {
        /* font-family: 'Share Tech Mono', monospace; */
        /* font-family: Arial, Helvetica, sans-serif; */
        /* font-family: "Poiret One", sans-serif; */
        letter-spacing: 1px;
        font-size: 24px;
        color: #ffffff;
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: #daefe1;
        text-shadow: 0 20 20px rgb(4, 84, 111),  0 0 20px rgba(10, 230, 72, 0);
        }
    </style>