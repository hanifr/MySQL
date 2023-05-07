<template>
    <div>
      <v-btn dark @click="dialog = true">
        <v-icon left color="#EA80FC">mdi-harddisk</v-icon>
        <h6 v-if="$vuetify.breakpoint.xsOnly">Disk</h6>
      </v-btn>
      <v-dialog v-model="dialog" persistent max-width="500">
        <v-card>
          <v-card-title style="color:#66BB6A;"><h5>Database Usage Details</h5></v-card-title>
          <v-card-text>
            <DiskStorage/>
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
  import DiskStorage from '../RealTime/DiskSpace.vue';
  export default {
    name: 'cloud-storage-space',
    components: {
      DiskStorage
    },
    data() {
      return {
        dialog: false,
      };
    },
  };
  </script>
  