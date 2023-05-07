<template>
  <div>
    <v-row dense>
      <v-col cols="4">
        <TwoGauges :endpoint="`${sensorEndpoint}501`"/>
      </v-col>
      <v-col cols="4">
        <TwoGauges :endpoint="`${sensorEndpoint}502`"/>
      </v-col>
      <v-col cols="4">
        <LevelGauge :endpoint="`${sensorEndpoint}505`"/>
      </v-col>
    </v-row>
    <v-card class="temperature-humidity">
      <v-card-subtitle class="headline">
        <h6>Latest Update Data Information</h6>
      </v-card-subtitle>
      <Table/>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Table from '../RealTime/Table.vue';
import TwoGauges from '../RealTime/TwoGauges.vue';
import LevelGauge from './LevelGauge.vue';

export default {
  name: 'center-summary',
  components: {
    LevelGauge,
    TwoGauges,
    Table
  },
  computed: {
    ...mapState(['sensorEndpoint'])
  }
}
</script>

<style scoped>
.temperature-humidity {
  margin: 0.2rem;
  background-color: transparent !important;
}

.headline {
  color:#FBC02D;
  text-align: left; 
  line-height: 1.3;
  margin-bottom: 5px;
}
</style>
