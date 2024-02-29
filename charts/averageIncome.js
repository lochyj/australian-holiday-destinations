var averageIncome = echarts.init(document.getElementById('averageIncome'), 'dark');
new ResizeObserver(() => averageIncome.resize()).observe(document.getElementById('averageIncome'));
var averageIncomeOptions = {
  title: {
    text: 'Average household income of survey participants'
  },
  tooltip: {
    data: [1, 5, 8, 11, 5, 2, 3]
  },
  legend: {
    data: ['Countries traveled To']
  },
  series: [
    {
      name: 'Countries traveled to',
      type: 'pie',
      data: [
        {value: 2, name: "0-50k"},
        {value: 6, name: "50-100k"},
        {value: 9, name: "100-150k"},
        {value: 13, name: "150-200k"},
        {value: 6, name: "200-250k"},
        {value: 5, name: "250-300k"},
        {value: 3, name: "300k+"}
      ]
    }
  ]
};

averageIncome.setOption(averageIncomeOptions);

