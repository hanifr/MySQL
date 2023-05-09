<template>
    <div>
      <v-card-subtitle>
        <h3 style="color:deepskyblue; text-align: center; text-shadow: 1px 1px black;">{{data[0].TID}}</h3>
      </v-card-subtitle>
        <Gauge :id="generateRandomId()" :data="data[0].ULT" :max="max.ULT" :unit="unit.ULT" />
      <!-- <v-card-subtitle>
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
      </v-card-subtitle> -->
    </div>
  </template>
    
<script>

import axios from 'axios';
import Gauge from '../../Charts/BigGaugeSimple.vue';
    
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
            { TID: '', TMP: 0, RH: 0 },
          ],
          items: ['TMP', 'RH', 'ULT'],
          max: { TMP: 40, RH: 100, ULT: 1000 },
          unit: { TMP: '°C', RH: '%', ULT: 'cm' },
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
    
