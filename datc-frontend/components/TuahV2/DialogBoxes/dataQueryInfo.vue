<template>
    <div>
      <v-btn color="white" dark @click="dialog = true">
        <v-icon left color="#00C853">mdi-information-outline</v-icon>
        <h6>Info</h6>
      </v-btn>
      <v-dialog v-model="dialog" persistent max-width="500">
        <v-card>
          <v-card-title style="color:#66BB6A;"><h5>Data Query Usage Info</h5></v-card-title>
          <v-card-text>
            <ol>
              <li>Select the time period that you want to query - today or a specific date and time.</li>
              <li>Click the "Query" button to start the data query process.</li>
              <li>Once the data is received, it will be displayed in a table format. Please carefully observe the data to ensure it is correct.</li>
              <li>If the data looks correct, download it as an Excel-based dataset for further analysis by clicking the "CSV" button.</li>
              <li>Alternatively, generate a report based on the selected data by clicking the "PDF" button.</li>
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
  