<template>
    <div>
    <v-row dense>
        <v-col cols="2">
            <stackGauge :endpoint="'https://nr.txio.live/tuah/HT-01'"/>
        </v-col>
        <v-col cols="2">
            <stackGauge :endpoint="'https://nr.txio.live/tuah/HT-02'"/>
        </v-col>
        <v-col cols="2">
            <stackGauge :endpoint="'https://nr.txio.live/tuah/HT-03'"/>
        </v-col>
        <v-col cols="2">
            <stackGauge :endpoint="'https://nr.txio.live/tuah/HT-04'"/>
        </v-col>
        <v-col cols="2">
            <stackGauge :endpoint="'https://nr.txio.live/tuah/HT-01'"/>
        </v-col>
        <v-col cols="2">
            <stackGauge :endpoint="'https://nr.txio.live/tuah/HT-02'"/>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="2">
            <TwoGauges :endpoint="'https://nr.txio.live/tuah/HT-04'"/>
        </v-col>
        <v-col cols="2">
            <TwoGauges :endpoint="'https://nr.txio.live/tuah/HT-03'"/>
        </v-col>
        <v-col cols="2">
            <TwoGauges :endpoint="'https://nr.txio.live/tuah/HT-02'"/>
        </v-col>
        <v-col cols="2">
            <TwoGauges :endpoint="'https://nr.txio.live/tuah/HT-01'"/>
        </v-col>
        <v-col cols="2">
            <TwoGauges :endpoint="'https://nr.txio.live/tuah/HT-02'"/>
        </v-col>
        <v-col cols="2">
            <TwoGauges :endpoint="'https://nr.txio.live/tuah/HT-03'"/>
        </v-col>
    </v-row>
    </div>
</template>
<script>

import TwoGauges from '../RealTime/twoGauges.vue';
import stackGauge from '../RealTime/Gauge.vue';
export default {
  name: 'center-summary',
  components: {
    stackGauge,
    TwoGauges
},
  data() {
    return {}
  }
}
</script>