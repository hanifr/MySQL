<template>
  <div v-if="$vuetify.breakpoint.mdAndUp">
    <v-row dense>
      <v-col cols="4">
        <TwoGauges :endpoint="`${sensorEndpoint}501`" />
      </v-col>
      <v-col cols="4">
        <TwoGauges :endpoint="`${sensorEndpoint}502`" />
      </v-col>
      <v-col cols="4">
        <LevelGauge :endpoint="`${sensorEndpoint}503`" />
      </v-col>
    </v-row>
    <v-card class="temperature-humidity">
      <v-card-subtitle class="headline">
        <h6>Latest Update Data Information</h6>
      </v-card-subtitle>
      <Table />
    </v-card>
  </div>
  <div v-else>
    <v-row dense>
      <v-col cols="12">
        <v-select v-model="selectedComponent" 
        :items="componentOptions" 
        label="Select a View"></v-select>
      </v-col>
    </v-row>
    <v-row dense v-if="selectedComponent === 'Office'">
      <v-col cols="12">
        <TwoGauges :endpoint="`${sensorEndpoint}501`" />
        <IndividualTable :sensorEndpoint="`${sensorEndpoint}501`"/>
      </v-col>
    </v-row>
    <v-row dense v-if="selectedComponent === 'Soil'">
      <v-col cols="12">
        <TwoGauges :endpoint="`${sensorEndpoint}502`" />
        <IndividualTable :sensorEndpoint="`${sensorEndpoint}502`"/>
      </v-col>
    </v-row>
    <v-row dense v-if="selectedComponent === 'Ultrasonic'">
      <v-col cols="12">
        <LevelGauge :endpoint="`${sensorEndpoint}503`" />
          <IndividualTable :sensorEndpoint="`${sensorEndpoint}503`"/>
      </v-col>
    </v-row>
    <v-card v-if="selectedComponent === 'Summary'" class="temperature-humidity">
      <v-card-subtitle class="headline">
        <h6>Latest Update Data Information</h6>
      </v-card-subtitle>
      <IndividualTableThermal :sensorEndpoint="`${sensorEndpoint}501`"/>
      <IndividualTableThermal :sensorEndpoint="`${sensorEndpoint}502`"/>
      <IndividualTableUltrasonic :sensorEndpoint="`${sensorEndpoint}503`"/>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Table from '../RealTime/Table.vue';
import IndividualTable from './IndividualTable.vue';
import TwoGauges from '../RealTime/TwoGauges.vue';
import LevelGauge from './LevelGauge.vue';
import IndividualTableThermal from './IndividualTableThermal.vue';
import IndividualTableUltrasonic from './IndividualTableUltrasonic.vue';

export default {
  name: 'center-summary',
  components: {
    LevelGauge,
    TwoGauges,
    Table,
    IndividualTable,
    IndividualTableThermal,
    IndividualTableUltrasonic
  },
  data() {
    return {
      selectedComponent: null,
      componentOptions: ['Office', 'Soil', 'Ultrasonic', 'Summary']
    }
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
  color: #FBC02D;
  text-align: left;
  line-height: 1.3;
  margin-bottom: 5px;
}
</style>
