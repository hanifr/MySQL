export default function (data, unit, max) {
var option = {
    series: [
      {
        type: 'gauge',
        data: [{value: data/max, name: unit}],
        color: ["#13a8a8"],
        label: {
          fontSize: 25,
        },
        radius: "70%",
        center: ["50%", "50%"],
      },
    ],
  };
  return option;
}