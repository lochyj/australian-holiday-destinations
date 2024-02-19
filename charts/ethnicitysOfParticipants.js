var ethnicitysOfParticipants = echarts.init(document.getElementById('ethnicitysOfParticipants'));
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
        {value: 18, name: "White"},
        {value: 21, name: "Asian"},
        {value: 4, name: "Other"},
        {value: 3, name: "Unspecified"}
      ]
    }
  ]
};

ethnicitysOfParticipants.setOption(ethnicitysOfParticipantsOptions);


