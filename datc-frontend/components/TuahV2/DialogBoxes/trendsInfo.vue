<template>
    <div>
      <v-btn color="white" dark @click="dialog = true">
        <v-icon left color="#00C853">mdi-information-outline</v-icon>
        <h6>Info</h6>
      </v-btn>
      <v-dialog v-model="dialog" persistent max-width="500">
        <v-card>
          <v-card-title style="color:#66BB6A;"><h5>Data Trends Usage Info</h5></v-card-title>
          <v-card-text v-if="$vuetify.breakpoint.mdAndUp">
            <ol>
              <li>Select the sensor ID that you want to query.</li>
              <li>Choose the data trend period - daily, weekly, or monthly - to initiate the data query process.</li>
              <li>Once the data is received, it will be displayed in a multiple line graph. You can select or deselect parameters you wish to include or ignore.</li>
              <li>Download the graph in PNG format by clicking the download button on the top right of the graph.</li> 
              <li>Download the data as an Excel-based dataset for further analysis by clicking the "CSV" button.</li>
              <li>Alternatively, generate a report based on the selected data by clicking the "PDF" button.</li>
            </ol>
          </v-card-text>
          <v-card-text v-else>
            <ol>
              <li>Select the sensor ID that you want to query.</li>
              <li>Choose the data trend period - daily, weekly, or monthly - to initiate the data query process.</li>
              <li>Once the data is received, it will be displayed in a multiple line graph. You can select or deselect parameters you wish to include or ignore.</li>
              <li>Download the graph in PNG format by clicking the download button on the top right of the graph.</li> 
            </ol>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="dialog = false"><h6>Close</h6></v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dialog: false,
      };
    },
  };
  </script>
  