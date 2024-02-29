var enjoymentOfInternationalTravel = echarts.init(document.getElementById('enjoymentOfInternationalTravel'), 'dark');
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
      data: [2, 5, 14, 24, 9]
    }
  ]
};

enjoymentOfInternationalTravel.setOption(enjoymentOfInternationalTravelOptions);

