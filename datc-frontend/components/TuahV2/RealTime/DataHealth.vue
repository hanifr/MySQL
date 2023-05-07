<template>
  <div class="mt-5">
    <div class="justify-space-between mb-2 ml-2">
      <v-menu v-model="menu" :close-on-content-click="true" offset-y>
        <template v-slot:activator="{ on }">
          <v-btn color="#DCEDC8" dark v-on="on">
            <v-icon left>mdi-menu</v-icon>
            <h6>{{ queryType === 'sinceCreated' ? 'All' : 'Today' }}</h6>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(type, index) in queryTypes" :key="index" @click="queryType = type.value">
            <v-list-item-title class="popup-text">{{ type.label }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn @click="queryData" color="#ECEFF1">
        <v-icon left color="#FF5722">mdi-database-search</v-icon></v-btn>
    </div>
    <v-card class="table-card" flat>
    <v-simple-table class="custom-table" :loading="loading">
      <thead>
        <tr>
          <th style="text-align: center; font-size: small; text-shadow: 2px 1px black; color: #C6FF00;">SID</th>
          <th style="text-align: center; font-size: small; text-shadow: 2px 1px black; color: #40C4FF;">Total Data</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="(datum, index) in queriedData" :key="datum.SID" :class="{ 'custom-row': index % 2 === 0 }">
          <td class="custom-cell">{{ datum.SID }}</td>
          <td class="custom-cell">{{ datum.count }}</td>
        </tr>
        <tr>
          <td colspan="2" style="text-align: start;">
            <h5 style="text-align: start;">Note: Total data refers to the total number of data collected and stored. "All" represents data collected since the beginning, while "Today" represents data collected on a daily basis until the current time.</h5>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-card>
  </div>
</template>

<script>
import dataQueryInfo from '../DialogBoxes/dataQueryInfo.vue';
export default {
  components: {
      dataQueryInfo
  },
  data() {
    return {
      queryType: 'sinceCreated',
      queriedData: [],
      loading: false,
      menu: false,
      queryTypes: [
        { label: 'All', value: 'sinceCreated' },
        { label: 'Today', value: 'todayTime' },
      ],
    }
  },
  methods: {
    async queryData() {
      const sqlQuery = this.sqlQuery;
      console.log(sqlQuery);
      this.loading = true;
      try {
        const response = await fetch(`https://nr.txio.live/api/count/${sqlQuery}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        this.queriedData = data;
        console.log(this.queriedData)
      } catch (error) {
        console.error(error);
        // Add code to notify or alert the user of the error.
      } finally {
        this.loading = false;
      }
    },
  },
  computed: {
      sqlQuery() {
          if (this.queryType === 'todayTime') {
              return `SELECT SID, COUNT(*) AS count FROM tuahlorawan WHERE DATE(timestamp) = CURDATE() GROUP BY SID`;
            } else {
                return `SELECT SID, COUNT(*) AS count FROM tuahlorawan GROUP BY SID`;
            }
          },
  },
}
</script>

  
<style scoped>
.custom-table {
    /* background-color: #226823; */
    background-color: #041d27;
    border-collapse: collapse;
    width: 100%;
    margin: 0 auto; /* center the table horizontally */
    opacity: 0.8; /* Adjust the value to your desired opacity */
    border: 1px solid #40C4FF;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-radius: 5px;
    padding: 2px;
  }
  
  .custom-table th {
    background-color: #020407;
    color: #e9f3f7;
    font-size: smaller;
    font-weight: bold;
    text-align: center;
  }
  .custom-table td {
  color: #C6FF00;
  font-weight: bold;
  /* height: 50px !important; */
  /* font-size:smaller !important; */
  text-align: center;
  text-shadow: 2px 1px black;
  }
  
  .custom-row {
    /* background-color: #82894f; */
    background-color: #eaf8f6;
  }

  
.custom-table td, .custom-table th {
  padding-top: 4px;
  padding-bottom: 4px;
  line-height: 1.2;
}
.popup-text {
      font-size: 12px;
    }
.table-card {
  height: 350px; /* set the desired height */
  overflow: auto;
}

</style>