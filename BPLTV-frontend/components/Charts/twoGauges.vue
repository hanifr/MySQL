<template>
    <div class="level">
      <div
        :id="id"
        style="width: 100%; height: 220px"
        :dew="dew"
        :temperature="temperature"
      ></div>
      <!-- <hr class='hr'> -->
        <v-card-subtitle>
              <v-row>
                <v-col>
                  <h3 bold :style="{ color: this.temperature < 22 ? '#84FFFF' : this.temperature > 27 ? '#FF5252' : '#C6FF00' }">
                    {{this.temperature}}°C</h3>
                </v-col>
                <v-col>
                    <h3 bold :style="{ color: this.dew < 40 ? '#FBC02D' : this.dew > 70 ? '#B388FF' : '#C6FF00' } ">
                  {{this.dew}}%</h3>
                </v-col>
              </v-row>
            </v-card-subtitle>
    </div>
  </template>
  
  <script>

  export default {
    mounted() {
      this.updateChart();
    },
    updated() {
      this.updateChart();
    },
    methods: {
      updateChart(){
        const option = {
        tooltip: {
          formatter: "{a} <br/>{c} {b}",
        },
        series: [
          {
            name: "Dew",
            type: "gauge",
            radius: "70%",
            min: 0,
            max: 100,
            startAngle: 315,
            endAngle: 225,
            splitNumber: 2,
            axisLine: {
              lineStyle: {
                color: [
                  // [0.29, "rgb(15,164,100)"],
                  [0.29, "#FBC02D"],
                  // [0.7, "rgb(235,137,52)"],
                  [0.7, "#C6FF00"],
                  [1, "#B388FF"],
                ],
                shadowColor: "rgba(255, 255, 255, 0.7)",
                shadowBlur: 10,
                width: 8,
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              // backgroundColor: 'auto',
              borderRadius: 2,
              color: "auto",
              padding: 3,
            },
            splitLine: {
              length: 15,
              lineStyle: {
                color: "auto",
              },
            },
            pointer: {
              width: 4,
            },
            title: {
              offsetCenter: ["0", "120%"],
              // color: "rgba(255,255, 255, 1)",
              color: this.dew < 40 ? '#FBC02D' : this.dew > 70 ? '#B388FF' : '#C6FF00'
            },
            detail: {
              show: false,
            },
            data: [{ value: this.dew, name: "RH (%)" }],
          },
          {
            name: "TMP",
            type: "gauge",
            radius: "70%",
            min: 0,
            max: 100,
            startAngle: 135,
            endAngle: 45,
            splitNumber: 2,
            axisLine: {
              lineStyle: {
                color: [
                  // [0.29, "rgb(15,164,100)"],
                  [0.29, "#84FFFF"],
                  // [0.7, "rgb(235,137,52)"],
                  [0.7, "#C6FF00"],
                  [1, "rgb(219,58,55)"],
                ],
                shadowColor: "rgba(255, 255, 255, 0.7)",
                shadowBlur: 10,
                width: 8,
              },
            },
            axisTick: {
              splitNumber: 5,
              length: 10, 
              lineStyle: {
                color: "auto",
              },
            },
            title: {
              offsetCenter: ["0", "-120%"],
              color: this.temperature < 22 ? '#84FFFF' : this.temperature > 27 ? '#FF5252' : '#C6FF00',
            },
            axisLabel: {
              borderRadius: 2,
              color: "auto",
              padding: 3,
            },
            splitLine: {
              length: 15,
              lineStyle: {
                color: "auto",
              },
            },
            pointer: {
              width: 4,
            },
            detail: {
              show: false,
            },
            data: [{ value: this.temperature, name: "TMP (°C)" }],
          },
        ],
      };
      setTimeout(() => {
        var myChart = this.$echarts.init(document.getElementById(this.id));
  
        myChart.setOption(option, true);
        window.addEventListener("resize", function () {
          myChart.resize();
        });
      }, 1);
      },
    },
    props: ["id", "dew", "temperature"],
  };
  </script>
  
  <style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gruppo&display=swap');
  .center {
    justify-content: center;
    background: rgba(0, 0, 0, 0.4) !important;
    /* background: #271f40 !important; */
    color: #fff !important;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-radius: 8px;
    padding: 6px;
    text-align: center;
  }
  .padding {
    padding: 0 1em;
  }
  .level {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background: rgb(243, 243, 243); */
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .arragement {
    display: flex;
    /* flex-direction: column; */
    justify-content: space-around;
    /* align-content: space-around; */
  }
  h3 {
      font-family: Kdam Thmor Pro, sans-serif;
      font-size: small;
      /* font-weight:bolder; */
    }
  </style>

  