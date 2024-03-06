var travelReasons = echarts.init(document.getElementById('travelReasons'));

new ResizeObserver(() => travelReasons.resize()).observe(document.getElementById('travelReasons'));

var travelReasonsOptions = {
  title: {
    text: 'Reasons that australians travel to'
  },
  tooltip: {
    data: [7, 8, 11, 12, 4, 0, 1, 1]
  },
  series: [
    {
      name: 'Reasons for travel',
      type: 'pie',
      data: [
          {value: 30, name: 'Both'},
          {value: 13, name: 'Sightseeing/Holiday'},
          {value: 5, name: 'Visiting Family/Friends'},
          {value: 7, name: 'Neither'}
      ]
    }
  ]
};

travelReasons.setOption(travelReasonsOptions);