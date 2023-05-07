<template>

  <v-card class="mt-5 background">
    <!-- <p class="cokmar" :class="{ 'text-green': txLocationStatus[0], 'text-orange': !txLocationStatus[0] }">{{ TxLocation1 }}</p> -->
    <!-- <p class="depan-pentas" :class="{ 'text-green': txLocationStatus[1], 'text-orange': !txLocationStatus[1] }">{{ TxLocation2 }}</p> -->
    <!-- <p class="ground-kiri" :class="{ 'text-green': txLocationStatus[2], 'text-orange': !txLocationStatus[2] }">{{ TxLocation3 }}</p> -->
    <!-- <p class="ground-kanan" :class="{ 'text-green': txLocationStatus[3], 'text-orange': !txLocationStatus[3] }">{{ TxLocation4 }}</p> -->
    <!-- <p class="ground-tengah" :class="{ 'text-green': txLocationStatus[4], 'text-orange': !txLocationStatus[4] }">{{ TxLocation5 }}</p> -->
    <!-- <p class="ground-kekiri" :class="{ 'text-green': txLocationStatus[5], 'text-orange': !txLocationStatus[5] }">{{ TxLocation6 }}</p> -->
    <!-- <p class="ground-kekanan" :class="{ 'text-green': txLocationStatus[6], 'text-orange': !txLocationStatus[6] }">{{ TxLocation7 }}</p> -->
    <!-- <p class="satu-kiri" :class="{ 'text-green': txLocationStatus[7], 'text-orange': !txLocationStatus[7] }">{{ TxLocation8 }}</p> -->
    <!-- <p class="satu-kanan" :class="{ 'text-green': txLocationStatus[8], 'text-orange': !txLocationStatus[8] }">{{ TxLocation9 }}</p> -->
    <!-- <p class="satu-tengah" :class="{ 'text-green': txLocationStatus[9], 'text-orange': !txLocationStatus[9] }">{{ TxLocation10 }}</p> -->
    <!-- <p class="dua-kiri" :class="{ 'text-green': txLocationStatus[10], 'text-orange': !txLocationStatus[10] }">{{ TxLocation11 }}</p> -->
    <!-- <p class="dua-kanan" :class="{ 'text-green': txLocationStatus[11], 'text-orange': !txLocationStatus[11] }">{{ TxLocation12 }}</p> -->
    <!-- <p class="dua-tengah" :class="{ 'text-green': txLocationStatus[12], 'text-orange': !txLocationStatus[12] }">{{ TxLocation12 }}</p> -->
    <div class="cokmar" cols="2">
      <stackData :title="`COKMAR`" :endpoint="'https://nr.txio.live/tuah/HT-01'"/>
    </div>
    <div class="depan-pentas" cols="2">
      <stackData :title="`FR STAGE`" :endpoint="'https://nr.txio.live/tuah/HT-02'"/>
    </div>
    <div class="ground-kiri" cols="2">
      <stackData :title="`GR LEFT`" :endpoint="'https://nr.txio.live/tuah/HT-03'"/>
    </div>
    <div class="ground-kanan" cols="2">
      <stackData :title="`GR RIGHT`" :endpoint="'https://nr.txio.live/tuah/HT-04'"/>
    </div>
    <div class="ground-kekiri" cols="2">
      <stackData :title="`GR LEFT 2`" :endpoint="'https://nr.txio.live/tuah/HT-02'"/>
    </div>
    <div class="ground-kekanan" cols="2">
      <stackData :title="`GR RIGHT 2`" :endpoint="'https://nr.txio.live/tuah/HT-03'"/>
    </div>
    <div class="satu-kiri" cols="2">
      <stackData :title="`LV-1 LEFT`" :endpoint="'https://nr.txio.live/tuah/HT-04'"/>
    </div>
    <div class="satu-kanan" cols="2">
      <stackData :title="`LV-1 RIGHT`" :endpoint="'https://nr.txio.live/tuah/HT-03'"/>
    </div>
    <div class="dua-tengah" cols="2">
      <stackData :title="`LV-2 CENTER`" :endpoint="'https://nr.txio.live/tuah/HT-01'"/>
    </div>
    <div class="dua-kiri" cols="2">
      <stackData :title="`LV-2 LEFT`" :endpoint="'https://nr.txio.live/tuah/HT-02'"/>
    </div>
    <div class="dua-kanan" cols="2">
      <stackData :title="`LV-2 RIGHT`" :endpoint="'https://nr.txio.live/tuah/HT-01'"/>
    </div>
    <div class="sensor-status">
    <sensorStatus/>
    </div>
  </v-card>

</template>

<script>
import sensorStatus from './sensorStatus.vue'
import stackData from '../RealTime/currentData.vue';
import axios from 'axios';
  export default {
    components: {
      sensorStatus,
      stackData
    },
    data() {
      return {
        TxLocation1: "COKMAR",
        TxLocation2: "FR STAGE",
        TxLocation3: "GR LEFT",
        TxLocation4: "GR RIGHT",
        TxLocation5: "GR CENTER",
        TxLocation6: "GR LEFT 2",
        TxLocation7: "GR RIGHT 2",
        TxLocation8: "LV-1 L",
        TxLocation9: "LV-1 R",
        TxLocation10: "LV-1 C",
        TxLocation11: "LV-2 L",
        TxLocation12: "LV-2 R",
        data: [],
        // txLocationStatus: [],
        backgroundImage: require('../../../static/datc-hall.png')
      }
    },
    // mounted() {
    //   setInterval(() => {
    //     const endpoints = [
    //       "https://nr.txio.live/tuah/HT-01",
    //       "https://nr.txio.live/tuah/HT-02",
    //       "https://nr.txio.live/tuah/HT-03",
    //       "https://nr.txio.live/tuah/HT-04",
    //       // "https://nr.txio.live/tuah/HT-05",
    //       // "https://nr.txio.live/tuah/HT-06",
    //       // "https://nr.txio.live/tuah/HT-07",
    //       // "https://nr.txio.live/tuah/HT-08",
    //       // "https://nr.txio.live/tuah/HT-09",
    //       // "https://nr.txio.live/tuah/HT-10",
    //       // "https://nr.txio.live/tuah/HT-11",
    //       // "https://nr.txio.live/tuah/HT-12",
    //     ];
    //     const requests = endpoints.map((endpoint) => axios.get(endpoint));
    //     Promise.all(requests).then((responses) => {
    //       const data = [].concat(...responses.map((response) => response.data));
    //       // update txLocationStatus based on the data received from the endpoints
    //       this.txLocationStatus = data.map((value) => value[0] !== 0);
    //       console.log(this.txLocationStatus)
    //     });
          
    //   }, 10000);
    // },
  }
  </script>
  <style>
  .background {
    margin: 0 auto; /* horizontally center the grid */
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 10px;
    background-image: url('../../../static/datc-hall.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 80vh;
    width: 90vw;
    color: white;
    text-align: center;
  }
  .cokmar {
    position: absolute;
    top: 80%;
    left: 44%;
    /* transform: translate(-50%, -50%); */
    color: white;
    text-align: center;
  }
  .depan-pentas {
    position: absolute;
    top: 60%;
    left: 43.8%;
    /* transform: translate(-50%, -50%); */
    color: white;
    text-align: center;
  }
  .ground-tengah {
    position: absolute;
    top: 35%;
    left: 48%;
    /* transform: translate(-50%, -50%); */
    color: white;
    text-align: center;
  }  
  .ground-kiri {
    position: absolute;
    top: 68%;
    left: 58%;
    /* transform: translate(-50%, -50%); */
    color: white;
    text-align: center;
  }
  .ground-kanan {
    position: absolute;
    top: 68%;
    left: 31%;
    /* transform: translate(-50%, -50%); */
    color: white;
    text-align: center;
  }
  .ground-tengah {
    position: absolute;
    top: 45%;
    left: 44.5%;
    /* transform: translate(-50%, -50%); */
    color: white;
    text-align: center;
  }
  .ground-kekiri {
    position: absolute;
    top: 43%;
    left: 57%;
    /* transform: translate(-50%, -50%); */
    color: white;
    text-align: center;
  }
  .ground-kekanan {
    position: absolute;
    top: 43%;
    left: 32%;
    /* transform: translate(-50%, -50%); */
    /* color: white;  */
    text-align: center;
  }
  .satu-kiri {
    position: absolute;
    top: 56%;
    left: 70%;
    /* transform: translate(-50%, -50%); */
    /* color: white; */
    text-align: center;
  }
  .satu-kanan {
    position: absolute;
    top: 56%;
    left: 18%;
    /* transform: translate(-50%, -50%); */
    /* color: white; */
    text-align: center;
  }
  .satu-tengah {
    position: absolute;
    top: 33%;
    left: 44.5%;
    /* transform: translate(-50%, -50%); */
    /* color: white; */
    text-align: center;
  }
  .dua-kiri {
    position: absolute;
    top: 36%;
    left: 71%;
    /* transform: translate(-50%, -50%); */
    /* color: white; */
    text-align: center;
  }
  .dua-kanan {
    position: absolute;
    top: 36%;
    left: 18%;
    /* transform: translate(-50%, -50%); */
    /* color: white; */
    text-align: center;
  }
  .dua-tengah {
    position: absolute;
    top: 20%;
    left: 44%;
  }
  .sensor-status {
    position: absolute;
    top: 75%;
    left: 75%;
    /* transform: translate(-50%, -50%); */
    /* color: white;  */
    text-align: left;
  }
  .text-green {
  color: #C6FF00;
  font-weight: bold;
}

  .text-orange {
    color: #EF6C00;
    font-weight: bold;
  }
  </style>
  