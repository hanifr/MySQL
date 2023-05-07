<template>
  <div>
    <v-card class="elevation-12 card-border card-color">
      <v-card-title class="color no-padding">ACTUATOR STATUS</v-card-title>
      <v-data-table
        :headers="headers"
        :items="statusActuator"
        :items-per-page="5"
        hide-default-footer
      ></v-data-table>
      <!-- <hr class='hr'> -->
      <!-- <v-row>
        <v-col class="flex-card">
          <v-icon  class='mdi mdi-refresh' size="20" color="grey"></v-icon>
          <v-card-subtitle class='card-subtitle'>{{duration}}</v-card-subtitle>
        </v-col>
      </v-row> -->
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      headers: [
        {
          text: "Actuator",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "State", value: "remarks" },
      ],
    };
  },
  computed: {
    ...mapState({
      statusActuator: (state) => state.statusActuator,
    //   duration: (state) => state.duration,
    }),
  },
};
</script>

<style scoped>
.card-border {
  border-radius: 8px;
}

.card-color {
  /* background: rgb(240,244,230); */
  border-radius: 8px !important;
  /* background: rgb(238, 248, 248) !important; */
  background: rgba(0, 0, 0, 0.4) !important;
}

.v-data-table {
  background: rgba(0, 0, 0, 0.4) !important;
}

.hr {
  margin: 0 20px;
  /* border-top: 1px solid rgb(189, 199, 199); */
}

.card-subtitle {
  padding-left: 20px;
}

.flex-card {
  display: flex;
  padding: 0;
  padding-top: 12px;
  padding-left: 10px;
}

.v-card__subtitle {
  padding: 12px;
}

.no-padding {
  padding-bottom: 5px;
}
</style>

<style>
/* Table */
.v-data-table.table-font.theme--dark {
  background-color: transparent !important;
  border-radius: 10px;
  overflow: hidden;
}
tr {
  /* background-color: rgb(162, 216, 224); */
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0px !important;
  /* font-size: 0.8em; */
  height: 5vh !important;
}

tbody tr:nth-of-type(even) {
  background-color: rgba(0, 0, 0, 0.4);
  /* background-color: red; */
  /* background-color: rgb(255, 255, 255); */
  padding: 0px !important;
  color: #eee;
  height: 6vh !important;
}
.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  /* font-size: 0.9em !important; */
  height: 6vh !important;
}
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
  /* font-size: 0.9em !important; */
  height: 6vh !important;
}
tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.3);
  /* background-color: rgb(230, 242, 244); */
  padding: 0px !important;
  color: #eee;
  height: 6vh !important;
}
.v-data-table__wrapper {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
/* End of table */
</style>
