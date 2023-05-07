<template>
    <div>
      <v-btn dark @click="dialog = true">
        <v-icon left color="#FF5722">mdi-database</v-icon>
        <h6 v-if="$vuetify.breakpoint.xsOnly">Database</h6>
      </v-btn>
      <v-dialog v-model="dialog" persistent max-width="500">
        <v-card>
          <v-card-title style="color:#66BB6A;"><h5>Database Usage Details</h5></v-card-title>
          <v-card-text>
            <DatabaseStorage/>
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
  import DatabaseStorage from '../RealTime/DatabaseStorage.vue';
  export default {
    name: 'database-storage-space',
    components: {
      DatabaseStorage
    },
    data() {
      return {
        dialog: false,
      };
    },
  };
  </script>
  