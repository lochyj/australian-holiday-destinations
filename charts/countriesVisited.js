var countriesVisited = echarts.init(document.getElementById('countriesVisited'));
var countriesVisitedOptions = {
  title: {
    text: 'Number of countries australians have visited'
  },
  tooltip: {
    data: [7, 8, 11, 12, 4, 0, 1, 1]
  },
  legend: {
    data: ['Countries traveled To']
  },
  series: [
    {
      name: 'Countries traveled to',
      type: 'pie',
      data: [
          {value: 7, name: '0'},
          {value: 8, name: '1 - 2'},
          {value: 11, name: '3 - 5'},
          {value: 12, name: '5 - 10'},
          {value: 4, name: '10 - 15'},
          {value: 0, name: '15 - 20'},
          {value: 1, name: '20 - 25'},
          {value: 1, name: '25+'}
      ]
    }
  ]
};

countriesVisited.setOption(countriesVisitedOptions);