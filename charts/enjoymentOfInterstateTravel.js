var enjoymentOfInterstateTravel = echarts.init(document.getElementById('enjoymentOfInterstateTravel'));
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
      data: [1, 5, 12, 20, 8]
    }
  ]
};

enjoymentOfInterstateTravel.setOption(enjoymentOfInterstateTravelOptions);

