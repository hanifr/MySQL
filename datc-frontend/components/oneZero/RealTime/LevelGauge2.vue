<template>
    <div class="container-level">
      <div :id="id || generateRandomId()" :data="data[0].TMP" class="level"></div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    props: {
      endpoint: {
        type: String,
        required: true
      },
      title: {
        type: String,
        default: 'Stage'
      },
      id: {
        type: String,
        default: null
      }
    },
    data() {
      return {
        data: [
          { TID: '', TMP: 0, RH: 0 },
        ],
        items: ['TMP', 'RH'],
        max: { TMP: 40, RH: 100 },
        unit: { TMP: '°C', RH: '%' },
      };
    },
  
    mounted() {
      setInterval(() => {
        axios
          .get(this.endpoint)
          .then((response) => {
            this.data = response.data;
            // console.log(this.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, 5000);
    },
    methods: {
      generateRandomId() {
        return Math.random().toString(36).substring(2, 10);
      },
      createChart() {
        var value = this.data;
  
        var option = {
          series: [
            {
              type: "liquidFill",
              data: value,
              color: ["#13a8a8"],
              label: {
                fontSize: 25,
              },
              radius: "70%",
              center: ["50%", "50%"],
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
  
  <style scoped>
  .container-level {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 50px;
  }
  
  .level {
    width: 40%;
    height: 300px;
  }
  
  @media (max-width: 768px) {
    .container-level {
      flex-direction: column;
      margin-bottom: 20px;
    }
    .level {
      width: 100%;
      height: 150px;
    }
  }
  </style>
  