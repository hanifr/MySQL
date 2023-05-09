<template>
    <div>
      <v-card class="table-card" flat>
        <v-simple-table class="mt-4 custom-table">
          <thead>
            <tr>
              <th style=" text-align: center; font-size: small; text-shadow: 2px 1px black; color: #C6FF00;">TID</th>
              <!-- <th style=" text-align: center; font-size: small; text-shadow: 2px 1px black; color: #40C4FF;">TMP</th> -->
              <!-- <th style=" text-align: center; font-size: small; text-shadow: 2px 1px black; color: #40C4FF;">RH</th> -->
              <th style=" text-align: center; font-size: small; text-shadow: 2px 1px black; color: #C6FF00;">Last Update</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(datum, index) in data" :key="datum.TID" :class="{ 'custom-row': index % 2 === 0 }">
              <td class="custom-cell">{{ datum.TID }}</td>
              <!-- <td class="custom-cell" :style="{ color: datum.TMP < 22 ? '#84FFFF' : datum.TMP > 27 ? '#FF5252' : '#C6FF00' }">{{ datum.TMP }}°C</td> -->
              <!-- <td class="custom-cell" :style="{ color: datum.RH < 40 ? '#FBC02D' : datum.RH > 70 ? '#B388FF' : '#C6FF00' }">{{ datum.RH }}%</td> -->
              <td class="custom-cell">{{ formatTimestamp(datum.timestamp) }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card>
    </div>
  </template>
<script>  
  import axios from "axios"; 
    export default {
        props: {
            sensorEndpoint: String
        },
        data() {
                return {
                data: [],
                };
            },
      mounted() {
        setInterval(async () => {
            const response = await axios.get(this.sensorEndpoint);
            if (response.status !== 200) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = response.data;
            this.data = data;
            }, 10000);
        },
      computed: {
          timestampOptions() {
              if (window.innerWidth <= 600) {
              // if screen width is less than or equal to 600px, only display time
              return { timeZone: 'Asia/Kuala_Lumpur', timeStyle: 'medium', hour12: false, hourCycle: 'h23' };
              } else {
              // otherwise, display both date and time
              return { timeZone: 'Asia/Kuala_Lumpur', timeStyle: 'medium', dateStyle: 'medium' };
              }
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
  .custom-card {
    /* background-color: #C5E1A5; */
    background-color: #ec3f62;
    opacity: 0.7;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-radius: 8px; 
    padding: 3px;
  }
  
  .custom-title {
    color: #0c458c;
    font-weight: bolder;
  }
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
  @media (min-width: 100%) {
    .custom-table {
      width: 80%;
    }
  }
  
  @media screen and (max-width: 600px) {
    .custom-cell {
      font-size: 11px !important;
    }
  }
  
  </style>