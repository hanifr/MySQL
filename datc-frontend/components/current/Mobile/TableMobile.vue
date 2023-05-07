<template>
  <div>
    <v-card class="elevation-12 card-border card-color mt-5">
      <v-card-title class="color no-padding">MONITORING REMARKS</v-card-title>
      <v-data-table
        :headers="headers"
        :items="status"
        :items-per-page="6"
        hide-default-footer
      >
        <template v-slot:item="{ item }">
          <tr class="row-pointer">
            <td style="width: 20%">
              <div class="text-truncate" style="max-width: 300px">
                <h5 style="color: deepskyblue; text-shadow: 1px 1px black;">{{ item.name }}</h5>
              </div>
            </td>
            <td :class="item.isHigh ? 'HIGH' : 'GOOD'" style="width: 30%">
              <h5>{{ item.remarks }}</h5>
            </td>
          </tr>
        </template>
      </v-data-table>
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
            text: "Station",
            align: "start",
            sortable: false,
            value: "name",
          },
          // { text: "Remarks", value: "remarks" },
          { text: "Remarks", value: "isHigh" },
        ],
      };
    },
    computed: {
      ...mapState({
        status: (state) => state.stations,
        duration: (state) => state.duration,
      }),
    },
  };
  </script>
  <style>
  .HIGH {
    color: rgb(246, 118, 34) !important;
  }
  .GOOD {
    color: rgb(51, 240, 110) !important;
  }
  </style>
  <style scoped>
  .card-border {
    border-radius: 8px;
    /* height:200px; */
  }
  
  .card-color {
    /* background: rgb(240,244,230); */
    border-radius: 8px !important;
    /* background: rgb(238, 248, 248) !important; */
    background: rgba(140, 157, 32, 0.4) !important;
  }
  .no-padding {
    justify-content: center;
    padding-bottom: 2px;
    color: rgb(211, 239, 122) !important;
    text-shadow: 1px 2px black;
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
    /* color: #eee; */
  }
  
  tbody tr:nth-of-type(even) {
    background-color: rgba(0, 0, 0, 0.4);
    /* background-color: red; */
    /* background-color: rgb(255, 255, 255); */
    padding: 0px !important;
    color: rgb(120, 204, 250);
    height: 5vh !important;
  }
  .v-data-table > .v-data-table__wrapper > table > thead > tr > th {
    /* font-size: 0.9em !important; */
    height: 5vh !important;
    /* color: #eee; */
  }
  .v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
    /* font-size: 0.9em !important; */
    height: 5vh !important;
    /* color: #eee; */
  }
  tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.3);
    /* background-color: rgb(230, 242, 244); */
    padding: 0px !important;
    color: rgb(120, 204, 250);
    height: 5vh !important;
  }
  .v-data-table__wrapper {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  /* End of table */
  </style>
  