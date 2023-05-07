<template>
    <div class="mt-5">
      <v-card-title class="headline">
            <h6>Danger Zone</h6>
          </v-card-title>
      <div class="justify-space-between mb-2 ml-2">
        <v-menu v-model="menu" :close-on-content-click="true" offset-y>
          <template v-slot:activator="{ on }">
            <v-btn color="#DCEDC8" dark v-on="on">
              <v-icon left>mdi-menu</v-icon>
              <h6>{{ queryType === 'describe' ? 'Check' : 'Reset' }}</h6>
            </v-btn>
          </template>
          <v-list>
            <!-- <v-list-item v-for="(type, index) in queryTypes" :key="index" @click="queryType = type.value"> -->
            <v-list-item v-for="(type, index) in queryTypes" :key="index" @click="type.value === 'reset' ? resetDialog = true : queryType = type.value">
              <v-list-item-title class="popup-text">{{ type.label }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn @click="queryData" color="#ECEFF1">
          <v-icon left color="#FF5722">mdi-database-search</v-icon>
        </v-btn>
      </div>
      <v-card class="table-card" flat>
        <v-simple-table class="custom-table" :loading="loading">
          <thead>
            <tr>
              <th style="text-align: center; font-size: small; text-shadow: 2px 1px black; color: #C6FF00;">Field</th>
              <th style="text-align: center; font-size: small; text-shadow: 2px 1px black; color: #40C4FF;">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(datum, index) in queriedData" :key="datum.Field" :class="{ 'custom-row': index % 2 === 0 }">
              <td class="custom-cell">{{ datum.Field }}</td>
              <td class="custom-cell">{{ datum.Type }}</td>
            </tr>
            <tr>
              <td colspan="2" style="text-align: start;">
                <h5>Note: Select 'Check' to describe the table content, 'Reset' to delete the database table, and 'Create' to set up a new table after resetting. Use with caution as 'Reset' permanently deletes all data in the table.</h5> 
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card>
      <v-dialog v-model="resetDialog" v-if="resetDialog">
        <v-card>
          <v-card-title>Confirm Reset</v-card-title>
          <v-card-text>Are you sure you want to reset the table?</v-card-text>
          <v-card-actions>
            <v-btn color="red" text @click="resetDialog = false">Cancel</v-btn>
            <v-btn color="green" text @click="queryType = 'reset'; queryData(); resetDialog = false">Reset</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        queryType: 'describe',
        queriedData: [],
        loading: false,
        menu: false,
        queryTypes: [
          { label: 'Check', value: 'describe' },
          { label: 'Reset', value: 'reset' },
          { label: 'Create', value: 'create' },
        ],
        resetDialog: false,
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
          if (this.queryType === 'reset') {
                return `DROP TABLE tuah2`;
            } else if (this.queryType === 'describe') {
                  return `DESCRIBE tuah2`;
            } else {
                  return `CREATE TABLE tuah2 ( SID VARCHAR(150) NOT NULL, TMP DECIMAL(16,2) DEFAULT '0.00' NOT NULL, RH DECIMAL(16,2) DEFAULT '0.00' NOT NULL, timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP )`;
            }
        },
    },
  }
  </script>
  
    
  <style scoped>
  .headline {
      color:#FBC02D;
      text-align: center; 
      line-height: 1.3;
      /* margin-bottom: 5px; */
  }
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
  .table-card {/* set the desired height */
    overflow: auto;
  }
  
  </style>