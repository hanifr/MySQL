export default function (data, unit, max) {
    var option = {
      tooltip: {
          // formatter: '{a} <br/>{b} : {c} %'
      },
      series: [
          {
          name: 'Temperature',
          type: 'gauge',
          detail: {
              valueAnimation: true,
              formatter: '{value}',
              color: "auto"
          },
          title: {
            offsetCenter: ["0", "90%"],
            color: "auto",
          },
          // detail: {
          //   show: false,
          // },
          data: [{ value: data, name: unit }],
          max: max,
          axisLine: {
            lineStyle: {
                color: [
                [0.3, "#006064"],
                [0.55, "#84FFFF"],
                [0.65, "#C6FF00"],
                [1.0, "rgb(219,58,55)"] 
                ],
                width: 10
                  }
            },
              splitLine: {
              distance: -10,
              length: 10,
              lineStyle: {
                color: "auto",
                width: 4,
              },
            },
          axisLabel: {
              color: "inherit",
              distance: 25,
              fontSize: 8,
            },
          }
      ]
      };
      return option;
    }