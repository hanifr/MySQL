<template>
    <div>
      <v-btn dark @click="dialog = true">
        <v-icon left color="#00C853">mdi-trending-up</v-icon>
        <h6 v-if="$vuetify.breakpoint.xsOnly">Health</h6>
      </v-btn>
  
      <v-dialog v-model="dialog" persistent max-width="500">
        <v-card>
          <v-card-title style="color:#66BB6A;"><h5>Total Stored Data</h5></v-card-title>
          <v-card-text>
            <DataHealth/>
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
  import DataHealth from '../DangerZone/resetDatabaseTable.vue';
  export default {
    name: 'database-storage-space',
    components: {
        DataHealth
    },
    data() {
      return {
        dialog: false,
      };
    },
  };
  </script>
  