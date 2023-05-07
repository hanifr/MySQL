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
          <tr v-for="(datum, index) in data" :key="datum.tracker" :class="{ 'custom-row': index % 2 === 0 }">
            <td class="custom-cell">{{ datum.tracker === 'tracker' ? 'TUAH' : datum.tracker }}</td>
            <td class="custom-cell">{{ (datum.SizeMB).toFixed(2) }}MB</td>
          </tr>
          <tr>
            <td colspan="2" style="text-align: start;">
              <h5>Note: The current usage of storage space, measured in megabytes.</h5> 
            </td>
          </tr>
        </tbody>
      </v-simple-table>
      <div>
        <!-- <resetDatabaseTable/> -->
      </div>
    </div>
  </template>
  
  <script>
  import resetDatabaseTable from "../DangerZone/resetDatabaseTable.vue";
  import axios from "axios";
  
  export default {
    components: {
      resetDatabaseTable
    },
    data() {
      return {
        data: [],
      };
    },
    // mounted() {
    //   const INTERVAL_TIME = 2000;
    //   setInterval(async () => {
    //     const endpoints = [
    //       "https://nr.txio.live/api/storage",
    //     ];
    //     const requests = endpoints.map((endpoint) => axios.get(endpoint));
    //     const responses = await Promise.all(requests);
    //     this.data = responses.flatMap(({ data }) =>
    //       data.filter((datum) => datum.tracker !== "performance_schema").map((datum) => ({
    //         tracker: datum.tracker === "information_schema" ? "information" : datum.tracker,
    //         SizeMB: datum.SizeMB,
    //       }))
    //     );
    //     // console.log(this.data);
    //   }, INTERVAL_TIME);
    // },
    mounted() {
      const INTERVAL_TIME = 2000;
      setInterval(async () => {
        const endpoints = [
          "https://nr.txio.live/api/storage",
        ];
        const requests = endpoints.map((endpoint) => axios.get(endpoint));
        const responses = await Promise.all(requests);
        this.data = responses.flatMap(({ data }) =>
          data
            .filter((datum) =>
              !["bintulu", "sys", "mbsa", "mysql", "ppas", "information_schema", "performance_schema"].includes(datum.tracker)
            )
            .map((datum) => ({
              tracker: datum.tracker,
              SizeMB: datum.SizeMB,
            }))
        );
        // console.log(this.data);
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