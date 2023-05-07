<template>
  <div>
    <v-card-subtitle>
      <h3 style="color:deepskyblue; text-align: center; text-shadow: 1px 1px black;">{{data[0].SID}}</h3>
    </v-card-subtitle>
      <Gauge :id="generateRandomId()" :data="data[0].TMP" :max="max.TMP" :unit="unit.TMP" />
    <v-card-subtitle>
      <v-row dense style="text-align: center;">
          <v-col>
            <h3 bold style="color:gold; text-shadow: 2px 2px black;">
                RH</h3>
          </v-col>
          <v-col>
             <h3 bold :style="{ color: data[0].RH < 40 ? '#FBC02D' : data[0].RH > 70 ? '#B388FF' : '#C6FF00' } ">
                {{data[0].RH}}%</h3>
          </v-col>
       </v-row>
    </v-card-subtitle>
  </div>
</template>
  
  <script>

  import axios from 'axios';
  import Gauge from '../../Charts/GaugeSimple.vue';
  
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
  

<!-- <style scoped>
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
  .arragement {
    display: flex;
    /* flex-direction: column; */
    justify-content: space-around;
    /* align-content: space-around; */
  }
h3 {
      font-family: Kdam Thmor Pro, sans-serif;
      font-size: medium;
      /* font-weight:bolder; */
}
.text-center {
  justify-content: left;
  padding-bottom: 0px;
  /* color: rgb(211, 239, 122) !important;
  text-shadow: 1px 2px black; */
  color: rgb(106, 214, 214) !important;
  text-shadow: 1px 1px rgb(21, 15, 15);
  font-size: 16px;
  font-family: Chakra Petch, sans-serif;
  font-weight: bold;
}
</style>   -->