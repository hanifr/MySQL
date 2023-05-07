<template>
    <!-- <div class="d-none d-md-flex size"> -->
    <div class="size">
      <v-card class="card-color elevation-12 card-box" style="height:200px; opacity: 0.85;">
        <v-card-title class="center"> 
            TUAH DASHBOARD </v-card-title>
            <v-card-subtitle align="center" class="footnote">Thermal Uniformity & Humidity Monitoring</v-card-subtitle>
                <div 
                class="compact text-justify"
                style="color:deepskyblue; text-shadow: 1px 1px black;"
                >REQUEST CURRENT DATA</div>
                <!-- <div style="text-align: center;"><Timex/></div> -->
                <div class="comment">
                    Check TID before requesting. TID = 50X for Transmitter X, TID = 200 for all Data.</div>
                <v-row>
                  <v-col>
                    <v-card-actions><ReqButton/></v-card-actions>
                  </v-col>
                  <v-col style="margin-right:10px; margin-top: 10px;">
                    <a href="https://www.eagleattech.com/">
                    <button><img src="https://raw.githubusercontent.com/hanifr/logos/master/SEAICrev%205%20Kusanagi%20rev%202%20no%20line.png" width="110" height="40px"/></button></a>
                  </v-col>
                </v-row>
                    
                <!-- <div class="compact text-center"
                style="color:gold; text-shadow: 1px 1px black;">Powered By</div>
                <a  href="https://www.eagleattech.com/">
                    <button><img :src="brandLogo" width="150px" height="120px" /></button></a> -->
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
  import Timex from "~/components/current/Utils/rtc.vue";
  import ReqButton from "~/components/current/Utils/ReqButton.vue";
  // noinspection NpmUsedModulesInstalled
  import { mapState } from "vuex";
  export default {
    components: {
      ReqButton,
      Timex
    },
    computed: {
      ...mapState({
        duration: (state) => state.duration,
        brandLogo: (state) => state.brandLogo,
      }),
    },
  };
  </script>
  
  <style scoped>
  .comment {
    text-align: justify;
    font-size: 0.7em; 
    margin-bottom: 1px;
    margin-left: 7px;
    margin-right: 7px;
    color:azure;
    text-shadow: 1px 1px black;
  }
  
  .hr {
    margin: 0 20px;
    border-top: 1px solid rgb(189, 199, 199);
  }
  .footnote {
    font-size:small;
    color:gold !important; 
    text-shadow: 1px 2px black;
  }
  
  .flex-card {
    display: flex;
    /* padding: 0; */
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
    margin-top: 1em;
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
    margin-bottom: 1ch;
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
  /* margin: 7px 7px 5px 0; */
  font-size: 14px;
  text-align: justify;
  margin-left: 7px;
  margin-right: 7px;
  /* font-weight: bold; */
}
  </style>
  