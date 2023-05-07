<template>
    <div class="level">
      <div
        :id="id"
        style="width: 100%; height: 250px"
        :disc="disc"
        :temperature="temperature"
      ></div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const option = {
        tooltip: {
          formatter: "{a} <br/>{c} {b}",
        },
        series: [
          {
            name: "Temperature",
            type: "gauge",
            // center: ["75%", "45%"], // 默认全局居中
            radius: "70%",
            min: 0,
            max: 30,
            startAngle: 135,
            endAngle: 45,
            splitNumber: 2,
            axisLine: {
              // 坐标轴线
              lineStyle: {
                color: [
                  [0.29, "rgb(15,164,100)"],
                  [0.7, "rgb(235,137,52)"],
                  [1, "rgb(219,58,55)"],
                ],
                shadowColor: "rgba(255, 255, 255, 0.7)",
                shadowBlur: 10,
                width: 8,
              },
            },
            axisTick: {
              // 坐标轴小标记
              splitNumber: 5,
              length: 10, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto",
              },
            },
            title: {
              offsetCenter: ["0", "-120%"],
              color: "rgba(255,255, 255, 1)",
            },
            axisLabel: {
              // backgroundColor: 'auto',
              borderRadius: 2,
              color: "auto",
              padding: 3,
            //   textShadowBlur: 2,
            //   textShadowOffsetX: 1,
            //   textShadowOffsetY: 1,
            //   textShadowColor: '#222'
            },
            splitLine: {
              // 分隔线
              length: 15, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                color: "auto",
              },
            },
            pointer: {
              width: 4,
            },
            detail: {
              formatter: "{value}",
              color: "auto",
              offsetCenter: ["0", "-20%"],
            },
            data: [{ value: this.temperature, name: "Temperature (°C)" }],
          },
          {
            name: "RH",
            type: "gauge",
            // center: ["75%", "45%"], // 默认全局居中
            radius: "70%",
            min: 0,
            max: 100,
            startAngle: 315,
            endAngle: 225,
            splitNumber: 2,
            axisLine: {
              // 坐标轴线
              lineStyle: {
                color: [
                  [0.29, "rgb(15,164,100)"],
                  [0.7, "rgb(235,137,52)"],
                  [1, "rgb(219,58,55)"],
                ],
                shadowColor: "rgba(255, 255, 255, 0.7)",
                shadowBlur: 10,
                width: 8,
              },
            },
            axisTick: {
              // 坐标轴小标记
              show: false,
            },
            axisLabel: {
              // backgroundColor: 'auto',
              borderRadius: 2,
              color: "auto",
              padding: 3,
              // textShadowBlur: 2,
              // textShadowOffsetX: 1,
              // textShadowOffsetY: 1,
              // textShadowColor: '#222'
            },
            splitLine: {
              // 分隔线
              length: 15, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                color: "auto",
              },
            },
            pointer: {
              width: 4,
            },
            title: {
              offsetCenter: ["0", "120%"],
              color: "rgba(255,255, 255, 1)",
            },
            detail: {
              show: false,
            },
            data: [{ value: this.disc, name: "RH (%)" }],
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
    updated() {
      const option = {
        tooltip: {
          formatter: "{a} <br/>{c} {b}",
        },
        series: [
          {
            name: "Temperature",
            type: "gauge",
            // center: ["75%", "45%"], // 默认全局居中
            radius: "70%",
            min: 0,
            max: 30,
            startAngle: 135,
            endAngle: 45,
            splitNumber: 2,
            axisLine: {
              // 坐标轴线
              lineStyle: {
                color: [
                  [0.29, "rgb(15,164,100)"],
                  [0.7, "rgb(235,137,52)"],
                  [1, "rgb(219,58,55)"],
                ],
                shadowColor: "rgba(255, 255, 255, 0.7)",
                shadowBlur: 10,
                width: 8,
              },
            },
            axisTick: {
              // 坐标轴小标记
              splitNumber: 5,
              length: 10, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: "auto",
              },
            },
            title: {
              offsetCenter: ["0", "-120%"],
              color: "rgba(255,255, 255, 1)",
            },
            axisLabel: {
              // backgroundColor: 'auto',
              borderRadius: 2,
              color: "auto",
              padding: 3,
              // textShadowBlur: 2,
              // textShadowOffsetX: 1,
              // textShadowOffsetY: 1,
              // textShadowColor: '#222'
            },
            splitLine: {
              // 分隔线
              length: 15, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                color: "auto",
              },
            },
            pointer: {
              width: 4,
            },
            detail: {
              formatter: "{value}",
              color: "auto",
              offsetCenter: ["0", "-20%"],
            },
            data: [{ value: this.temperature, name: "Temperature (°C)" }],
          },
          {
            name: "RH",
            type: "gauge",
            // center: ["75%", "45%"], // 默认全局居中
            radius: "70%",
            min: 0,
            max: 100,
            startAngle: 315,
            endAngle: 225,
            splitNumber: 2,
            axisLine: {
              // 坐标轴线
              lineStyle: {
                color: [
                  [0.29, "rgb(15,164,100)"],
                  [0.7, "rgb(235,137,52)"],
                  [1, "rgb(219,58,55)"],
                ],
                shadowColor: "rgba(255, 255, 255, 0.7)",
                shadowBlur: 10,
                width: 8,
              },
            },
            axisTick: {
              // 坐标轴小标记
              show: false,
            },
            splitLine: {
              // 分隔线
              length: 15, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                color: "auto",
              },
            },
            axisLabel: {
              // backgroundColor: 'auto',
              borderRadius: 2,
              color: "auto",
              padding: 3,
              // textShadowBlur: 2,
              // textShadowOffsetX: 1,
              // textShadowOffsetY: 1,
              // textShadowColor: '#222'
            },
            pointer: {
              width: 4,
            },
            title: {
              offsetCenter: ["0", "120%"],
              color: "rgba(255,255, 255, 1)",
            },
            detail: {
              show: false,
            },
            data: [{ value: this.disc, name: "RH (%)" }],
          },
        ],
      };
      // console.log(this.server.disc)
      var myChart = this.$echarts.init(document.getElementById(this.id));
  
      myChart.setOption(option, true);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
    props: ["id", "disc", "temperature"],
    //   watch : {
    //     // server: {
    //     //   handler:function(){
    //     //     console.log('Here')
    //     //   },
    // server: function(value){
  
    //       this.option.series[0].data = [{value: value.Disc, name: 'Disc'}]
    //     var myChart = this.$echarts.init(document.getElementById(this.id));
  
    //     myChart.setOption(this.option, true);
    //     window.addEventListener("resize", function () {
    //       myChart.resize();
    //     });
    //   console.log(value)
    // }
    //   }
  };
  </script>
  
  <style>
  .level {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background: rgb(243, 243, 243); */
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  </style>
  