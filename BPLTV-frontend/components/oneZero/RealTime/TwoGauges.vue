<template>
    <div>
      <v-card-subtitle>
        <h3 style="color:deepskyblue; text-align: center; text-shadow: 1px 1px black;">{{data[0].TID}}</h3>
      </v-card-subtitle>
        <Gauge :id="generateRandomId()" :dew="data[0].RH" :temperature="data[0].TMP" class="center-gauge" />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Gauge from '../../Charts/BigTwoGauges.vue';
  
  export default {
    props: {
      endpoint: {
        type: String,
        required: true
      },
      title: {
        type: String,
        default: 'Stage'
      }
    },
    data() {
      return {
        data: [
          { SID: '', TMP: 0, RH: 0 },
        ],
        items: ['TMP', 'RH'],
        max: { TMP: 40, RH: 100 },
        unit: { TMP: '°C', RH: '%' },
      };
    },
    components: {
      Gauge,
    },
    mounted() {
      setInterval(() => {
        axios
          .get(this.endpoint)
          .then((response) => {
            this.data = response.data;
            // console.log(this.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, 5000);
    },
    methods: {
      generateRandomId() {
        return Math.random().toString(36).substring(2, 10);
      }
    }
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

.center-gauge {
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>