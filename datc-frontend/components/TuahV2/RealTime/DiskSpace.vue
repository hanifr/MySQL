<template>
    <div class="mt-4">
      <v-simple-table class="custom-table">
        <thead>
          <tr>
            <th style="text-align: center; font-size: small; text-shadow: 2px 1px black; color: #C6FF00;">Database</th>
            <th style="text-align: center; font-size: small; text-shadow: 2px 1px black; color: #40C4FF;">Size</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="disk" :class="{ 'custom-row': data.length % 2 === 0 }">
            <td class="custom-cell">Disk Space</td>
            <td class="custom-cell">{{ disk }} %</td>
          </tr>
          <tr>
            <td colspan="2" style="text-align: start;">
              <h5>Note: The current state of available cloud server disk space is about {{diskInGB}} GB. The total disk space for the server is 25 GB.</h5> 
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        data: [],
        disk: null,
      };
    },
    computed: {
        diskInGB() {
        if (!this.disk) {
            return "";
        }
        const totalDiskSpace = 25; // GB
        const diskInGB = ((this.disk / 100) * totalDiskSpace).toFixed(2);
        return diskInGB;
        },
    },
    mounted() {
      const INTERVAL_TIME = 2000;
      setInterval(async () => {
        const endpoints = [
          "https://nr.txio.live/api/disk",
        ];
        const requests = endpoints.map((endpoint) => axios.get(endpoint));
        const responses = await Promise.all(requests);
        this.disk = responses[0].data.space;
      }, INTERVAL_TIME);
    },
  };
  </script>
  
    
  <style scoped>
  .custom-table {
      /* background-color: #226823; */
      background-color: #041d27;
      border-collapse: collapse;
      width: 100%;
      margin: 0 auto; /* center the table horizontally */
      opacity: 0.8; /* Adjust the value to your desired opacity */
      border: 1px solid #40C4FF;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border-radius: 5px;
      padding: 2px;
    }
    
    .custom-table th {
      background-color: #020407;
      color: #e9f3f7;
      font-size: smaller;
      font-weight: bold;
      text-align: center;
    }
    .custom-table td {
    color: #C6FF00;
    font-weight: bold;
    /* height: 50px !important; */
    /* font-size:smaller !important; */
    text-align: center;
    text-shadow: 2px 1px black;
    }
    
    .custom-row {
      /* background-color: #82894f; */
      background-color: #eaf8f6;
    }
  
    
  .custom-table td, .custom-table th {
    padding-top: 4px;
    padding-bottom: 4px;
    line-height: 1.2;
  }
  
  </style>