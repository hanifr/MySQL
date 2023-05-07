<template>
  <div class="level">
    <div :id="id" style="width: 100%; height: 220px" :data="data"></div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      data2: "",
    };
  },
  updated() {
    var option = {
      tooltip: {
        formatter: "{a} <br/>{b} : {c} ppm",
      },
      // radius: "100%",
      // toolbox: {
      //   feature: {
      //     restore: {},
      //     saveAsImage: {},
      //   },
      // },
      series: [
        {
          // name: "Ammonia",
          type: "gauge",

          detail: { formatter: "{value} ppm" },
          data: [{ value: this.data, name: this.unit }],
          max: this.max,
          axisLabel: {
            fontSize: 10,
            distance: 10,
          },
          axisTick: {
            distance: -20,
            length: 8,
            lineStyle: {
              color: "#fff",
              width: 2,
            },
          },
          detail: {
            formatter: "{value}",
            // backgroundColor: "rgba(227, 0, 0, 1)",
            offsetCenter: ["0", "78%"],
            color: "auto",
          },
          title: {
            offsetCenter: ["0", "100%"],
            color: "rgba(255,255, 255, 1)",
          },
          splitNumber: 4,
          axisLine: {
            lineStyle: {
              color: [
                [0.29, "rgb(219,58,55)"],
                [0.7, "rgb(235,137,52)"],
                [1, "rgb(15,164,100)"],
              ],
              // color: [
              //   [0.29, "rgb(115,222,133)"],
              //   [0.7, "rgb(235,137,52)"],
              //   [1, "rgb(219,58,55)"],
              // ],
              shadowColor: "rgba(255, 255, 255, 0.7)",
              shadowBlur: 10,
              width: 20,
            },
          },
          splitLine: {
            distance: -20,
            length: 20,
            lineStyle: {
              color: "#fff",
              width: 4,
            },
          },
          axisLabel: {
            color: "auto",
            distance: 30,
            fontSize: 16,
          },
          // center: ["50%", "35%"],
          // radius: "70%",
          grid: {
            bottom: "150%",
          },
        },
      ],

      // center: ["50%", "120%"],
    };

    var myChart = this.$echarts.init(document.getElementById(this.id));

    myChart.setOption(option, true);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  },
  mounted() {
    var option = {
      grid: {
        left: "10%",
        right: "10%",
        top: 0,
        bottom: 0,
      },
      tooltip: {
        formatter: "{a} <br/>{b} : {c} ppm",
      },
      radius: "100%",
      // toolbox: {
      //   feature: {
      //     restore: {},
      //     saveAsImage: {},
      //   },
      // },
      series: [
        {
          // name: "Ammonia Reading",
          type: "gauge",
          detail: { formatter: "{value} ppm" },
          data: [{ value: this.data, name: this.unit }],
          max: this.max,
          axisLabel: {
            fontSize: 14,
            distance: 10,
          },
          axisTick: {
            distance: -20,
            length: 8,
            lineStyle: {
              color: "#fff",
              width: 2,
            },
          },
          detail: {
            formatter: "{value}",
            // backgroundColor: "rgba(227, 0, 0, 1)",
            offsetCenter: ["0", "78%"],
            color: "auto",
          },
          title: {
            offsetCenter: ["0", "100%"],
            color: "rgba(255,255, 255, 1)",
          },
          splitNumber: 4,
          // startAngle: 190,
          // endAngle: -10,
          axisLine: {
            lineStyle: {
              color: [
                [0.29, "rgb(219,58,55)"],
                [0.7, "rgb(235,137,52)"],
                [1, "rgb(15,164,100)"],
              ],
              // color: [
              //   [0.29, "rgb(115,222,133)"],
              //   [0.7, "rgb(235,137,52)"],
              //   [1, "rgb(219,58,55)"],
              // ],
              shadowColor: "rgba(255, 255, 255, 0.7)",
              shadowBlur: 10,
              width: 20,
            },
          },
          splitLine: {
            distance: -20,
            length: 20,
            lineStyle: {
              color: "#fff",
              width: 4,
            },
          },
          axisLabel: {
            color: "auto",
            distance: 30,
            fontSize: 16,
          },
          grid: {
            bottom: "100%",
          },
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

  props: ["id", "data", "max", "unit"],
  components: {},
  methods: {
    update() {
      var option = {
        tooltip: {
          formatter: "{a} <br/>{b} : {c} ppm",
        },
        // toolbox: {
        //   feature: {
        //     restore: {},
        //     saveAsImage: {},
        //   },
        // },
        series: [
          {
            // name: "Ammonia",
            type: "gauge",
            detail: { formatter: "{value} ppm" },
            data: [{ value: this.data, name: this.unit }],
            max: this.max,
            axisLabel: {
              fontSize: 14,
            },
            detail: {
              formatter: "{value}",
              // backgroundColor: "rgba(227, 0, 0, 1)",
              offsetCenter: ["0", "78%"],
            },
            title: {
              offsetCenter: ["0", "100%"],
              color: "rgba(0, 0, 0, 1)",
            },
            splitNumber: 4,
            axisLine: {
              lineStyle: {
                // color: [
                //   [0.29, "rgb(15,164,100)"],
                //   [0.7, "rgb(235,137,52)"],
                //   [1, "rgb(219,58,55)"],
                // ],
                color: [
                  [0.29, "rgb(219,58,55)"],
                  [0.7, "rgb(235,137,52)"],
                  [1, "rgb(15,164,100)"],
                ],
                shadowColor: "rgba(255, 255, 255, 0.7)",
                shadowBlur: 10,
                width: 30,
              },
            },
            // startAngle: 190,
            // endAngle: -0,
          },
        ],
      };

      var myChart = this.$echarts.init(document.getElementById(this.id));

      myChart.setOption(option, true);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
};
</script>
<style>
.level {
  display: flex;
  justify-content: center;
  /* background: rgb(243, 243, 243); */
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>
