<template>
    <!-- <div class="d-none d-md-flex size"> -->
    <div class="size">
      <v-card class="card-color elevation-12 card-box size" style="height:285px; opacity: 0.85;">
        <v-card-title class="center"> 
            TUAH DASHBOARD </v-card-title>
            <!-- <hr class="hr" /> -->
            <v-card-subtitle align="center" class="footnote mt-0.5">Thermal Uniformity & Humidity Monitoring</v-card-subtitle>
        <div 
        class="d-md-flex align-items-center justify-content-center">
        <v-row dense align="center" justify="center" class="padding arragement mt-1 mb-4">
            <!-- <div class="compact text-center">INSERT VEHICLE ID TO TRACE</div> -->

            <v-col cols="8">
                <p 
                class="compact text-justify"
                style="color:deepskyblue; text-shadow: 1px 1px black;"
                >REQUEST CURRENT DATA</p>
                <div class="comment">
                    Check TID before requesting. TID = 50X for Transmitter X, TID = 200 for all Data. If you have requested incorrect TID, make sure to refresh the page before making new request.</div>
                <v-card-actions><ReqButton/></v-card-actions>
            </v-col>
            <v-col cols="4">
                <div class="compact text-center"
                style="color:gold; text-shadow: 1px 2px black;">Powered By</div>
                <a  href="https://www.eagleattech.com/">
                    <button><img :src="brandLogo" width="100px" height="70px" /><img src="https://raw.githubusercontent.com/hanifr/logos/master/SEAICrev%205%20Kusanagi%20rev%202%20no%20line.png" width="120" alt="Avatar"/></button></a>
            </v-col>
        </v-row>
        </div>
        <hr class="hr" />
        <v-row>
          <v-col class="flex-card">
            <v-icon class="mdi mdi-refresh" size="20" color="gold"></v-icon>
            <v-card-subtitle class="card-subtitle">{{
              duration
            }}</v-card-subtitle>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </template>
  
  <script>
  import ReqButton from "~/components/current/Utils/ReqButton.vue";
  // noinspection NpmUsedModulesInstalled
  import { mapState } from "vuex";
  export default {
    components: {
      ReqButton,
    },
    computed: {
      ...mapState({
        duration: (state) => state.duration,
        // server: (state) => state.server,
        brandLogo: (state) => state.brandLogo,
      }),
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Armata&display=swap');
  .comment {
    font-family: Armata, sans-serif;
    text-align: justify;
    font-size: 0.7em; 
    margin-bottom: 1px;
    color:aliceblue;
    text-shadow: 1px 1px black;
  }
  
  .hr {
    margin: 0 20px;
    border-top: 1px solid rgb(189, 199, 199);
  }
  
  /* .v-card__subtitle{
    padding: 0;
    padding-right:20px ;
  }
  
  .card-subtitle{
    padding-left:20px ;
  } */
  .footnote {
    font-size:medium;
    color:gold !important; 
    text-shadow: 2px 2px black;
    margin-top: 1px;
  }
  
  .flex-card {
    display: flex;
    padding: 0;
    padding-top: 12px;
    padding-left: 10px;
  }
  
  .card-color {
    /* background: rgb(240,244,230); */
    background: #53684d !important;
    /* background: rgb(238, 248, 248) !important; */
  }
  
  .card-box {
    border-radius: 8px !important;
  }
  
  .size {
    width: 100%;
  }
  
  .v-card__subtitle {
    padding: 12px;
    color:gold; 
    text-shadow: 1px 1px black;
  }

  .center {
    justify-content: center;
    background: rgba(0, 0, 0, 0.4) !important;
    /* background: #271f40 !important; */
    color: #fff !important;
    text-shadow: 1px 2px black;
    /* border-top-left-radius: 8px;
    border-top-right-radius: 8px; */
    /* border-radius: 8px; */
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

  .compact {
  /* padding: 0; */
  margin: 0 0 5px 0;
  /* font-size: 16px; */
  /* font-weight: bold; */
}
  </style>
  