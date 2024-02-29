var countriesVisited = echarts.init(document.getElementById('countriesVisited'), 'dark');

new ResizeObserver(() => countriesVisited.resize()).observe(document.getElementById('countriesVisited'));

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
          {value: 11, name: '1 - 2'},
          {value: 12, name: '3 - 5'},
          {value: 16, name: '6 - 10'},
          {value: 6, name: '11 - 15'},
          {value: 1, name: '16 - 20'},
          {value: 0, name: '21 - 25'},
          {value: 1, name: '>25'}
      ]
    }
  ]
};

countriesVisited.setOption(countriesVisitedOptions);