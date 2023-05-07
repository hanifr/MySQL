<template>
    <div class="level">
      <div :id="id" style="width: 100%; height: 300px"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["id"],
    data() {
      return {
        gaugeData: [
          {
            value: 20,
            name: "Perfect",
            title: {
              offsetCenter: ["0%", "-30%"],
            },
            detail: {
              valueAnimation: true,
              offsetCenter: ["0%", "-20%"],
            },
          },
          {
            value: 40,
            name: "Good",
            title: {
              offsetCenter: ["0%", "0%"],
            },
            detail: {
              valueAnimation: true,
              offsetCenter: ["0%", "10%"],
            },
          },
          {
            value: 60,
            name: "Commonly",
            title: {
              offsetCenter: ["0%", "30%"],
            },
            detail: {
              valueAnimation: true,
              offsetCenter: ["0%", "40%"],
            },
          },
        ],
      };
    },
    mounted() {
      const option = {
        legend: {
            data: this.gaugeData.map((data) => data.name),
            },
            tooltip: {
            formatter: function (params) {
                return params.seriesName + "<br/>" + params.name + ": " + params.value + "%";
            },
            },
        series: [
          {
            type: "gauge",
            startAngle: 90,
            endAngle: -270,
            pointer: {
              show: false,
            },
            progress: {
              show: true,
              overlap: false,
              roundCap: true,
              clip: false,
              itemStyle: {
                borderWidth: 1,
                borderColor: "#464646",
              },
            },
            axisLine: {
              lineStyle: {
                width: 40,
              },
            },
            splitLine: {
              show: false,
              distance: 0,
              length: 10,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
              distance: 50,
            },
            data: this.gaugeData,
            title: {
              fontSize: 14,
            },
            detail: {
              width: 50,
              height: 14,
              fontSize: 14,
              color: "inherit",
              borderColor: "#464646",
              borderRadius: 20,
              borderWidth: 1,
              formatter: "{value}%",
            },
          },
        ],
      };
      const myChart = this.$echarts.init(document.getElementById(this.id));
      setInterval(() => {
        this.gaugeData[0].value = +(Math.random() * 100).toFixed(2);
        this.gaugeData[1].value = +(Math.random() * 100).toFixed(2);
        this.gaugeData[2].value = +(Math.random() * 100).toFixed(2);
        myChart.setOption(option, true);
      }, 1000);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  };
  </script>
  
  <style>
  .level {
    display: flex;
    justify-content: center;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  </style>
  