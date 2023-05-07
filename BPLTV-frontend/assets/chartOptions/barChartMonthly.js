export default function (data) {
    var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
            data: ['TMP (min)', 'TMP (avg)', 'TMP (max)', 'RH (min)', 'RH (avg)', 'RH (max)'],
            textStyle: {
              color: 'gold', // Change this to the desired color
            },
          },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: data.map(item => item.ts)
            // data: data.map(item => {
            //  const date = new Date(item.ts);
            //    return date.getHours() + ':00';
            // }),
          }
        ],
        yAxis: {
            type: 'value',
            splitLine: {
              show: false // add this line
            },
        },
        series: [
          {
            name: 'TMP (min)',
            type: 'bar',
            smooth: true,
            data: data.map(item => Number(item.min_TMP.toFixed(2))),
            label: { // add this label option
              show: true,
              position: 'top' // set the position of the label
            }
          },
          {
            name: 'TMP (avg)',
            type: 'bar',
            smooth: true,
            data: data.map(item => Number(item.avg_TMP.toFixed(2))),
            label: { // add this label option
              show: true,
              position: 'top' // set the position of the label
            }
          },
          {
            name: 'TMP (max)',
            type: 'bar',
            smooth: true,
            data: data.map(item => Number(item.max_TMP.toFixed(2))),
            label: { // add this label option
              show: true,
              position: 'top' // set the position of the label
            }
          },
          {
            name: 'RH (min)',
            type: 'bar',
            smooth: true,
            data: data.map(item => Number(item.min_RH.toFixed(2))),
            label: { // add this label option
              show: true,
              position: 'top' // set the position of the label
            }
          },
          {
            name: 'RH (avg)',
            type: 'bar',
            smooth: true,
            data: data.map(item => Number(item.avg_RH.toFixed(2))),
            label: { // add this label option
              show: true,
              position: 'top' // set the position of the label
            }
          },
          {
            name: 'RH (max)',
            type: 'bar',
            smooth: true,
            data: data.map(item => Number(item.max_RH.toFixed(2))),
            label: { // add this label option
              show: true,
              position: 'top' // set the position of the label
            }
          },

        ]
      };
      return option;
    }