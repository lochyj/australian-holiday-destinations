var enjoymentOfInterstateTravel = echarts.init(document.getElementById('enjoymentOfInterstateTravel'), 'dark');
var enjoymentOfInterstateTravelOptions = {
  title: {
    text: 'Enjoyment of Interstate Travel'
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

enjoymentOfInterstateTravel.setOption(enjoymentOfInterstateTravelOptions);

