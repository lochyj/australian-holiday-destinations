var enjoymentOfInternationalTravel = echarts.init(document.getElementById('enjoymentOfInternationalTravel'));

new ResizeObserver(() => enjoymentOfInternationalTravel.resize()).observe(document.getElementById('enjoymentOfInternationalTravel'));

var enjoymentOfInternationalTravelOptions = {
  title: {
    text: 'Enjoyment of International Travel'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'cross' }
  },
  xAxis: {
    name: "Enjoyment level",
    nameLocation: 'middle',
    nameGap: 30,
    data: ["1", "2", "3", "4", "5"]
  },
  yAxis: {
    name: "Number of participants who agree",
    type : 'value',
    nameLocation: 'middle',
    nameGap: 30,
  },
  series: [
    {
      axisLabel: {
        rotate: 90,
        align: "center"
      },
      type: 'bar',
      data: [3, 1, 7, 11, 32]
    }
  ]
};

enjoymentOfInternationalTravel.setOption(enjoymentOfInternationalTravelOptions);

