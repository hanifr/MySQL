<template>
    <div class="mt-5">
      <div class="pa-3 justify-space-between align-center">
        <div style="display: inline-block">
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" dark color="#DCEDC8">
                <v-icon left>mdi-menu</v-icon>
                <h6>{{ selectedType }}</h6>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="item in computedTypes" :key="item" @click="selectedType = item">
                <v-list-item-title class="popup-text">{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <div style="display: inline-block">
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" dark color="#F4FF81">
                <v-icon left>mdi-calendar</v-icon>
                <h6>{{ selectedTrend }}</h6>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="item in computedTrends" :key="item" @click="selectedTrend = item; fetchData(item)">
                <v-list-item-title class="popup-text">{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <div v-if="$vuetify.breakpoint.mdAndUp" style="display: inline-block">
          <v-btn @click="downloadCSV" color="#E0F2F1">
            <v-icon left color="#26A69A">mdi-cloud-download</v-icon>
            <span><h6>CSV</h6></span>
          </v-btn>
        </div>
        <div v-if="$vuetify.breakpoint.mdAndUp" style="display: inline-block">
          <v-btn @click="generatePDF" color="#ECEFF1">
            <v-icon left color="#FF1744">mdi-file-pdf-box</v-icon>
            <span><h6>PDF</h6></span>
          </v-btn>
        </div>
        <div v-if="$vuetify.breakpoint.mdAndUp" class="mr-5" style="display: inline-block; float: right;">
          <trendsInfo/>
        </div>
        <div v-else style="display: inline-block; float: right;">
          <trendsInfo/>
        </div>
      </div>
      <div v-if="$vuetify.breakpoint.mdAndUp" class="mt-2" ref="chart" style="height: 500px;"></div>
      <div v-else class="mt-2" ref="chart" style="height: 440px;"></div>
    </div>
  </template>
<script>
import { mapState } from 'vuex';
    import jsPDF from 'jspdf';
    import 'jspdf-autotable';
    import trendsInfo from '../DialogBox/TrendsInfo.vue';
    import option from '~/assets/chartOptions/multiLinesHourly'
    import option2 from '~/assets/chartOptions/multiLinesMonthly'
    import option3 from '~/assets/chartOptions/barChartMonthly'
    export default {
      name: 'Chart',
      components: {
        trendsInfo
      },
      data() {
        return {
          chartData: [],
          selectedType: '501',
          types: ['501', '502', '505'],
          selectedTrend: 'Daily',
          trendTypes: ['Daily', 'Weekly','Monthly'],
          menu: false
        }
      },
      computed: {
        computedTypes() {
          return this.types.map((type) => type);
          
        },
        computedTrends() {
          return this.trendTypes.map(trendType => trendType.toLowerCase());
        },
        ...mapState(['sensorEndpoint'])
      },
      async mounted() {
        await this.fetchData()
        this.initChart()
      },
      watch: {
        selectedType: {
          handler: async function () {
            await this.fetchData()
            this.initChart()
          }
        },
        selectedTrend: {
        handler: async function (val) {
          const trendType = val.toLowerCase();
          await this.fetchData(trendType);
          this.initChart();
        }
      }
      },
      methods: {
        async fetchData(timePeriod = '') {
          try {
            let url = `${this.sensorEndpoint}${this.selectedType}`;
            console.log(url);
            if (timePeriod === 'daily') {
              url += '/daily';
            } else if (timePeriod === 'monthly') {
              url += '/monthly';
              this.chartOption = option2; // set chart option to option2
            } else if (timePeriod === 'weekly') {
              url += '/weekly';
              this.chartOption = option2; // set chart option to option
            } else {
              // Set a default time period of 'daily'
              url += '/daily';
              this.chartOption = option; // set chart option to option
            }
            const response = await fetch(url);
            const data = await response.json();
            this.chartData = data;
            // Convert the data to a CSV file
            this.csvData = this.convertToCSV(data);
            this.objData = this.convertToObject(data);
            // console.log(this.objData)
            this.initChart();
          } catch (error) {
            console.error(error);
          }
        },
        initChart() {
          const chart = this.$refs.chart;
          const echarts = require('echarts');
          const myChart = echarts.init(chart);
          myChart.setOption(this.chartOption(this.chartData), true); // use the dynamic chart option
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
                let value = row[key];
                if (!isNaN(value)) {
                  value = Number(value.toFixed(2));
                }
                obj[key] = String(value);
              });
              return obj;
            });
        },
        downloadCSV() {
              const blob = new Blob([this.csvData], { type: "text/csv" });
              const csvUrl = URL.createObjectURL(blob);
              const link = document.createElement("a");
              link.href = csvUrl;
              link.download = `${this.selectedType}.csv`;
              link.click();
        },
        async generatePDF() {
          try {
            // Fetch data from the endpoint only works if the button selection waits for the data to populate.
            // await this.fetchData();
  
            // Create a new jsPDF instance
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
            doc.text('Description of Thermal Data', 20, 135);
            doc.setFontSize(12);
            const maxWidth = 170;
            const lineHeight = 7;
            const overview = `The thermal data provides valuable information about the minimum, average, and maximum temperature and relative humidity values. The columns "min_TMP," "avg_TMP," and "max_TMP" represent the minimum, average, and maximum temperature values, respectively. Similarly, "min_RH," "avg_RH," and "max_RH" correspond to the minimum, average, and maximum relative humidity values. This data is crucial for gaining insight into the thermal characteristics of a system or environment and can help identify patterns and trends that can lead to improved performance and cost savings.`;
            const description = `Furthermore, the data helps to analyze and optimize the performance of systems and equipment that are affected by temperature and humidity. The information can be used to identify patterns and trends in the data that can lead to improved performance and cost savings. Additionally, the data is presented in an easy-to-read format, making it accessible to a wide range of users. Overall, the thermal data is an essential tool for anyone seeking to improve their understanding of thermal dynamics and optimize the performance of their equipment or systems.`;
            // const conclusion = `The data helps to analyze and optimize the performance of systems and equipment that are affected by temperature and humidity. The information can be used to identify patterns and trends in the data that can lead to improved performance and cost savings. The data is presented in an easy-to-read format, making it accessible to a wide range of users.`;
            let splitDescription = doc.splitTextToSize(description, maxWidth);
            let splitOverview = doc.splitTextToSize(overview, maxWidth);
            // let splitConclusion = doc.splitTextToSize(conclusion, maxWidth);
            doc.text(splitOverview, 20, 150, { maxWidth: maxWidth, lineHeight: lineHeight, align: 'justify' });
            doc.text(splitDescription, 20, 190, { maxWidth: maxWidth, lineHeight: lineHeight, align: 'justify' });
            // doc.text(splitConclusion, 20, 235, { maxWidth: maxWidth, lineHeight: lineHeight, align: 'justify' });
  
            // Add Data page
            doc.addPage();
            doc.setFontSize(14);
            doc.text(`${this.selectedType} Thermal Data`, 14, 20);
  
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
            doc.save(`${this.selectedType} Data Report.pdf`);
          } catch (error) {
            console.error(error);
          }
        }
      }
    }
</script>
    
    
      <style>
        .menuSelect {
          display: flex; 
          justify-content: space-around;
          font-family: Kdam Thmor Pro, sans-serif;
        }
        .popup-text {
          font-size: 12px;
        }
        .v-btn {
          border: 1px solid rgb(13, 185, 238); 
          color: rgb(106, 214, 214) !important;
          text-shadow: 2px 2px rgb(21, 15, 15);
        }
        </style>
      
      