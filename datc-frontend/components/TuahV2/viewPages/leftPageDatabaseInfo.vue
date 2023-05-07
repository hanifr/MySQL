<template>
    <div class="mt-2">
        <!-- <DatabaseStorage/> -->
        <div style="display: inline-block;">
          <!-- <dataHealthInfo/> -->
          <DataHealth/>
        </div>
        <div style="display: inline-block;">
          <DatabaseStorage/>
        </div>

    </div>
</template>

<script>
import dataHealthInfo from '../DialogBoxes/dataHealthInfo.vue';
import databaseStorageInfo from '../DialogBoxes/databaseStorageInfo.vue';
import DataHealth from '../RealTime/DataHealth.vue';
import diskSpaceInfo from '../DialogBoxes/diskSpaceInfo.vue';
import DatabaseStorage from '../RealTime/DatabaseStorage.vue';  
  export default {
    name: 'left-summary',
    components: {
        DataHealth,
        DatabaseStorage,
        dataHealthInfo,
        databaseStorageInfo,
        diskSpaceInfo
    },
    data() {
      return {

      };
    },
  };
  </script>