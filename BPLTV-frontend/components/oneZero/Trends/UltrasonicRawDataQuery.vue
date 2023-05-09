<template>
    <div>
      <div class="pa-3 justify-space-between align-center">
      <v-menu v-model="menu" :close-on-content-click="true" offset-y>
        <template v-slot:activator="{ on }">
          <v-btn color="#DCEDC8" dark v-on="on">
            <v-icon left>mdi-menu</v-icon>
            <h6>{{ queryType === 'date' ? 'Set Date and Time' : 'Set Today Time' }}</h6>
        </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(type, index) in queryTypes" :key="index" @click="queryType = type.value">
            <v-list-item-title class="popup-text">{{ type.label }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn @click="queryData" :disabled="!formValid" color="#F4FF81" class="mr-4"><h6>Query Data</h6></v-btn>

      <div style="display: inline-block">
        <v-btn @click="downloadCSV" :disabled="!formValid" color="#E0F2F1">
          <v-icon left color="#26A69A">mdi-cloud-download</v-icon>
          <span><h6>CSV</h6></span>
        </v-btn>
      </div>
      <div style="display: inline-block">
        <v-btn @click="generatePDF" :disabled="!formValid" color="#ECEFF1">
          <v-icon left color="#FF1744">mdi-file-pdf-box</v-icon>
          <span><h6>PDF</h6></span>
        </v-btn>
      </div>
      <div  class="mr-5" style="display: inline-block; float: right;">
        <dataQueryInfo/>
      </div>
      <v-form ref="form">
        <v-row>
          <v-col cols="2">
                <v-text-field v-model="id" label="Sensor Id" type="string" required></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field v-model="fromTime" label="From Time" type="time" required></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field v-model="untilTime" label="Until Time" type="time" required></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field v-model="fromDate" label="From Date" type="date" v-if="queryType === 'date'" required></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field v-model="untilDate" label="Until Date" type="date" v-if="queryType === 'date'" required></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </div>
      <v-data-table :headers="headers" :items="queriedData" :loading="loading"></v-data-table>
    </div>
  </template>
  
<script>
import { mapState } from 'vuex';
import dataQueryInfo from '../DialogBox/DataQueryInfo.vue';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
  export default {
    components: {
        dataQueryInfo
    },
    data() {
      return {
        id: null,
        queryType: 'date',
        fromDate: null,
        untilDate: null,
        fromTime: null,
        untilTime: null,
        queriedData: [],
        csvData: '',
        loading: false,
        menu: false,
        queryTypes: [
          { label: 'Set Date and Time', value: 'date' },
          { label: 'Set Today Time', value: 'time' },
        ],
        formValid: false,
      }
    },
    watch: {
      id() {
        this.checkFormValidity();
      },
      fromDate() {
        this.checkFormValidity();
      },
      untilDate() {
        this.checkFormValidity();
      },
      fromTime() {
        this.checkFormValidity();
      },
      untilTime() {
        this.checkFormValidity();
      },
    },
    methods: {
      async queryData() {
        const sqlQuery = this.sqlQuery;
        console.log(sqlQuery);
        this.loading = true;
        try {
          const response = await fetch(`${this.ultrasonicSensorQueryEndpoint}${sqlQuery}`);
          const data = await response.json();
          this.queriedData = data;
          // Convert the data to a CSV file
          this.csvData = this.convertToCSV(data);
          this.objData = this.convertToObject(data);
        } catch (error) {
          console.error(error);
        } finally {
          this.loading = false;
        }
      },
      checkFormValidity() {
        this.$nextTick(() => {
          this.formValid = this.$refs.form.validate();
        });
      },
      convertToCSV(data) {
            const header = Object.keys(data[0]).join(",");
            const rows = data.map(row => Object.values(row).join(","));
            return [header, ...rows].join("\n");
        },
        convertToObject(data) {
            return data.map(row => {
                const obj = {};
                Object.keys(row).forEach(key => {
                    obj[key] = String(row[key]);
                });
                return obj;
            });
        },
        downloadCSV() {
            const blob = new Blob([this.csvData], { type: "text/csv" });
            const csvUrl = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = csvUrl;
            link.download = `${this.queryType}.csv`;
            link.click();
        },
        async generatePDF() {
          try {
              // Fetch data from the endpoint
              await this.queryData();

              const doc = new jsPDF({
                orientation: "p",
                unit: "mm",
                format: "a4",
                margin: { top: 20, right: 20, bottom: 20, left: 20 },
            });

            // Add title page
            doc.setFontSize(24);
            doc.text('Thermal Data Trends', 105, 80);
            doc.setFontSize(14);
            doc.text('Eagle Attech Sdn. Bhd.', 135, 95);
            doc.setLineWidth(1.5);
            doc.line(20, 115, 190, 115);
            doc.setLineWidth(0.5);
            doc.line(20, 118, 190, 118);

            // Add Description page
            doc.setFontSize(18);
            doc.text('Description of Water Level Data', 20, 135);
            doc.setFontSize(12);
            const maxWidth = 170;
            const lineHeight = 7;
            const overview = `Accurate information on water level conditions is essential for analyzing trends and identifying patterns that can help inform decision-making. Data plays a crucial role in providing these insights, enabling us to better understand changes in water levels over time. By examining this data, we can gain a more comprehensive understanding of the factors that contribute to fluctuations in water levels and make more informed decisions about water resource management. In this context, the analysis of water level data is an important tool for environmental scientists, policymakers, and other stakeholders concerned with managing water resources effectively.`;
            const conclusion = ``;
            // let splitDescription = doc.splitTextToSize(description, maxWidth);
            let splitOverview = doc.splitTextToSize(overview, maxWidth);
            let splitConclusion = doc.splitTextToSize(conclusion, maxWidth);
            doc.text(splitOverview, 20, 150, { maxWidth: maxWidth, lineHeight: lineHeight, align: 'justify' });
            // doc.text(splitDescription, 20, 180, { maxWidth: maxWidth, lineHeight: lineHeight, align: 'justify' });
            doc.text(splitConclusion, 20, 180, { maxWidth: maxWidth, lineHeight: lineHeight, align: 'justify' });

            // Add Data page
            doc.addPage();
            doc.setFontSize(14);
            doc.text(`${this.id} Thermal Data`, 14, 20);

            // Add table header row
            doc.autoTable({
                head: [Object.keys(this.objData[0])],
                body: this.objData.map(row => Object.values(row)),
                startY: 30,
                headStyles: {
                fillColor: [176, 224, 230], // light blue color
                textColor: [0, 0, 255], // blue color
                halign: 'center',
                valign: 'middle',
                fontStyle: 'bold',
                fontSize: 12,
                },
                styles: {
                textColor: [0], // black color
                halign: 'center',
                valign: 'middle',
                fontSize: 11,
                },
                columnStyles: {
                0: {
                    halign: 'left',
                },
                },
            });
              // Save the PDF document
              doc.save(`${this.id}_Raw_Data_Report.pdf`);
          } catch (error) {
              console.error(error);
          }
        }
    },
    computed: {
        ...mapState(['ultrasonicSensorQueryEndpoint']),
        sqlQuery() {
            if (this.queryType === 'date') {
                return `SELECT * FROM ultrasonic_data WHERE  TID = '${this.id}' AND DATE(timestamp) BETWEEN '${this.fromDate} ${this.fromTime}:00' AND '${this.untilDate} ${this.untilTime}:59'`;
            } else {
                const today = new Date().toISOString().slice(0, 10);
                return `SELECT * FROM ultrasonic_data WHERE  TID = '${this.id}' AND DATE(timestamp) = '${today}' AND TIME(timestamp) BETWEEN '${this.fromTime}:00' AND '${this.untilTime}:59'`;
            }
            },
        headers() {
            return [
            { text: 'Timestamp', value: 'timestamp' },
            { text: 'Water Level', value: 'ULT' },
            ]
        },
    }
}
</script>

<style>
  .popup-text {
        font-size: 12px;
      }
</style>
  