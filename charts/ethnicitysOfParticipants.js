var ethnicitysOfParticipants = echarts.init(document.getElementById('ethnicitysOfParticipants'), 'dark');

new ResizeObserver(() => ethnicitysOfParticipants.resize()).observe(document.getElementById('ethnicitysOfParticipants'));

var ethnicitysOfParticipantsOptions = {
  title: {
    text: 'Ethnicity\'s of participants'
  },
  tooltip: {
    data: [18, 21, 3, 3]
  },
  legend: {
    data: ['Countries traveled To']
  },
  series: [
    {
      name: 'Ethnicity\'s of participants',
      type: 'pie',
      data: [
        {value: 22, name: "White"},
        {value: 28, name: "Asian"},
        {value: 4, name: "Other"}
      ]
    }
  ]
};

ethnicitysOfParticipants.setOption(ethnicitysOfParticipantsOptions);


