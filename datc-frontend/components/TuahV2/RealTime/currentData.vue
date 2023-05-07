<template>
    <div>
      <v-card-subtitle>
        <h3 :class="{ 'text-green': txLocationStatus, 'text-orange': !txLocationStatus }">{{ txLocationStatus ? data[0].SID : title }}</h3>
        <template v-if="txLocationStatus">
          <v-row dense style="text-align: center;">
            <v-col>
              <h3 class="font-weight-bold" :style="{ color: data[0].TMP < 22 ? '#84FFFF' : data[0].TMP > 27 ? '#FF5252' : '#C6FF00' }">{{data[0].TMP}}°C</h3>
            </v-col>
            <v-col>
              <h3 class="font-weight-bold" :style="{ color: data[0].RH < 40 ? '#FBC02D' : data[0].RH > 70 ? '#B388FF' : '#C6FF00' } ">{{data[0].RH}}%</h3>
            </v-col>
          </v-row>
          <div>
            <h6 class="font-weight-bold" style="color:#09ff00; font-size: xx-small; opacity: 0.7;">Updated at {{formatTimestamp(this.timestamp)}}</h6>
          </div>
        </template>
      </v-card-subtitle>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: {
      endpoint: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        default: 'Stage'
      }
    },
    data() {
      return {
        data: [{ SID: '', TMP: 0, RH: 0 }],
        max: { TMP: 40, RH: 100 },
        unit: { TMP: '°C', RH: '%' },
        txLocationStatus: false,
        timestamp: 0
      };
    },
    mounted() {
      setInterval(() => {
        axios
          .get(this.endpoint)
          .then((response) => {
            this.data = response.data;
            this.timestamp = this.data[0].timestamp; 
            this.txLocationStatus = this.data.map((value) => value[0] !== 0);
            // console.log(this.txLocationStatus);
            // console.log(this.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, 5000);
    },
    computed: {
      timestampOptions() {
        return { timeZone: 'Asia/Kuala_Lumpur', timeStyle: 'medium', hour12: false, hourCycle: 'h23' };
      },
    },
    methods: {
      formatTimestamp(timestamp) {
        const utcDate = new Date(timestamp);
        const malaysiaTimezoneOffset = 8; // Malaysia is UTC+8
        const malaysiaDate = new Date(utcDate.getTime() - (malaysiaTimezoneOffset * 60 * 60 * 1000));
        return malaysiaDate.toLocaleString('en-MY', this.timestampOptions).toUpperCase();
      }
    }
  };
  </script>
  
  <style scoped>
  .text-green {
    color: #09ff00;
    font-weight: bold;
  }
  .text-orange {
    color: #f5740a;
    font-weight: bold;
  }
  </style>
  