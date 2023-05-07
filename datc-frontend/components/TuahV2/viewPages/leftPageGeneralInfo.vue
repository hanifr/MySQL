<template>
  <div class="temperature-humidity">
    <v-card style="background-color: #263238;">
      <v-card-title class="headline">
        <h6>Thermal Comfort Levels</h6>
      </v-card-title>
      <v-card-subtitle v-if="$vuetify.breakpoint.lgAndUp" style="color:#0091EA">
        This guide provides information on thermal comfort levels to help maintain a comfortable indoor temperature.
      </v-card-subtitle>
          <DataStatus/>
          <!-- <sensorStatus/> -->  
      <!-- <div v-if="$vuetify.breakpoint.lgAndUp">
        <v-card-title class="headline">
          <h6>Data Health</h6>
        </v-card-title>
          <leftPageDatabaseInfo/>
      </div> -->
      <div v-if="$vuetify.breakpoint.mdAndUp">
        <poweredBy/>
      </div>
    </v-card>
  </div>
</template>
  
<script>
import DataStatus from './DataStatus.vue';
import sensorStatus from '../viewPages/sensorStatus.vue'
import leftPageDatabaseInfo from './leftPageDatabaseInfo.vue';
import poweredBy from './poweredBy.vue';
  export default {
    name: "InfoPage",
    components: {
      sensorStatus,
      DataStatus,
      leftPageDatabaseInfo,
      poweredBy
    }
  };
  </script>
  
<style scoped>
.headline {
    color:#FBC02D;
    text-align: center; 
    line-height: 1.3;
    margin-bottom: 5px;
}
.temperature-humidity {
  margin: 0.2rem;

}

  </style>
  