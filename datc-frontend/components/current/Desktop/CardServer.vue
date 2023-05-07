<template>
  <!-- <div class="d-none d-md-flex size"> -->
  <div class="size">
    <v-card class="card-color elevation-12 card-box size">
      <v-card-title class="color"> SERVER HEALTH </v-card-title>
      <MultiGauge2
        id="gauge"
        :disc="server.disc"
        :temperature="server.temperature"
        :speed="server.speed"
      />
      <hr class="hr" />
      <v-row>
        <v-col class="flex-card">
          <v-icon class="mdi mdi-refresh" size="20" color="grey"></v-icon>
          <v-card-subtitle class="card-subtitle">{{
            duration
          }}</v-card-subtitle>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import MultiGauge2 from "~/components/current/Charts/MultiGauge2.vue";
// noinspection NpmUsedModulesInstalled
import { mapState } from "vuex";
export default {
  components: {
    MultiGauge2,
  },
  computed: {
    ...mapState({
      duration: (state) => state.durationServer,
      server: (state) => state.server,
      // duration: (state) => state.duration
    }),
  },
};
</script>

<style scoped>
.font {
  font-size: 1.2em;
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

.flex-card {
  display: flex;
  padding: 0;
  padding-top: 12px;
  padding-left: 10px;
}

.card-color {
  /* background: rgb(240,244,230); */
  background: rgb(0, 0, 0, 0.4) !important;
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
}

.color {
  color: white;
}
</style>
