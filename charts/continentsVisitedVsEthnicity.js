// Used https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation as a reference for this one

var continentsVisitedVsEthnicity = echarts.init(document.getElementById('continentsVisitedVsEthnicity'), 'dark');

const posList = [
  'left',
  'right',
  'top',
  'bottom',
  'inside',
  'insideTop',
  'insideLeft',
  'insideRight',
  'insideBottom',
  'insideTopLeft',
  'insideTopRight',
  'insideBottomLeft',
  'insideBottomRight'
];

continentsVisitedVsEthnicity.configParameters = {
  rotate: {
    min: -90,
    max: 90
  },
  align: {
    options: {
      left: 'left',
      center: 'center',
      right: 'right'
    }
  },
  verticalAlign: {
    options: {
      top: 'top',
      middle: 'middle',
      bottom: 'bottom'
    }
  },
  position: {
    options: posList.reduce(function (map, pos) {
      map[pos] = pos;
      return map;
    }, {})
  },
  distance: {
    min: 0,
    max: 100
  }
};
continentsVisitedVsEthnicity.config = {
  rotate: 90,
  align: 'left',
  verticalAlign: 'middle',
  position: 'insideBottom',
  distance: 15,
  onChange: function () {
    const labelOption = {
      rotate: continentsVisitedVsEthnicity.config.rotate,
      align: continentsVisitedVsEthnicity.config.align,
      verticalAlign: continentsVisitedVsEthnicity.config.verticalAlign,
      position: continentsVisitedVsEthnicity.config.position,
      distance: continentsVisitedVsEthnicity.config.distance
    };
    myChart.setOption({
      series: [
        {
          label: labelOption
        },
        {
          label: labelOption
        },
        {
          label: labelOption
        },
        {
          label: labelOption
        }
      ]
    });
  }
};
const labelOption = {
  show: true,
  position: continentsVisitedVsEthnicity.config.position,
  distance: continentsVisitedVsEthnicity.config.distance,
  align: continentsVisitedVsEthnicity.config.align,
  verticalAlign: continentsVisitedVsEthnicity.config.verticalAlign,
  rotate: continentsVisitedVsEthnicity.config.rotate,
  formatter: '{c}  {name|{a}}',
  fontSize: 16,
  rich: {
    name: {}
  }
};

var continentsVisitedVsEthnicityOptions = {
  title: {
    text: 'Continents Visited Vs Ethnicity Of Survey Participants'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['Forest', 'Steppe', 'Desert', 'Wetland']
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['bar', 'stack'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  xAxis: [
    {
      type: 'category',
      axisTick: { show: false },
      data: ['Asian', 'White', 'Other', 'Unspecified']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Asia',
      type: 'bar',
      barGap: 0,
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [27, 14, 3, 0]
    },
    {
      name: 'Europe',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [10, 7, 3, 1]
    },
    {
      name: 'Nth America',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [7, 5, 2, 1]
    },
    {
      name: 'Sth America',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [1, 2]
    },
    {
      name: 'Africa',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [1, 2, 0, 0]
    },
    {
      name: 'Oceania',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [4, 11, 0, 0]
    },
    {
      name: 'Antarctica',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [1, 0, 0, 0]
    }
  ]
};

continentsVisitedVsEthnicity.setOption(continentsVisitedVsEthnicityOptions);

