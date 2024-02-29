var incomeVsCountriesVisited = echarts.init(document.getElementById('incomeVsCountriesVisited'));
var incomeVsCountriesVisitedOptions = {
  title: {
    text: 'Number of countries australians have visited'
  },
  tooltip: {
    data: [7, 8, 11, 12, 4, 0, 1, 1]
  },
  legend: {
    data: ['Countries traveled To']
  },
  xAxis: {
    data: ["50 - 100k", "100 - 150k", "150 - 200k", "200 - 250k", "300k+"]
  },
  yAxis: {
    data: [8, 8, 11, 12, 4, 0, 1, 1]
  },
  series: [
    {
      name: 'Income vs Number of Countries Visited',
      type: 'scatter',
      data: [1, 7, 7.55, 4.46, 7, 10]
    }
  ]
};

incomeVsCountriesVisited.setOption(incomeVsCountriesVisitedOptions);



