//echarts 12 个月的数据
export const LineOptions = {
  tooltip: {},
  legend: {
    show: false,
  },
  xAxis: {
    type: "category",
    show: false,
    data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月"],
  },
  yAxis: {
    show: false,
  },
  grid: {
    x: 0,
    y: 0,
    x2: 0,
    y2: 0,
  },
  series: [
    {
      name: "销量",
      type: "line",
      smooth: true,
      showSymbol: false,
      itemStyle: {
        color: "#409EFF",
      },
      areaStyle: {
        color: "#409EFF",
        opacity: 0.1,
      },
      data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10],
    },
  ],
};
export const BarOptions = {
  tooltip: {},
  legend: {
    show: false,
  },
  xAxis: [
    {
      type: "category",
      show: false,
      data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月"],
    },
  ],
  yAxis: {
    show: false,
  },
  grid: {
    x: 0,
    y: 0,
    x2: 0,
    y2: 0,
  },
  series: [
    {
      name: "销量",
      type: "bar",
      smooth: true,
      symbol: "circle",
      itemStyle: {
        color: "#409EFF",
      },
      areaStyle: {
        color: "#409EFF",
        opacity: 0.1,
      },
      data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10],
    },
  ],
};

export const PieOptions = {
  tooltip: {},
  legend: {
    show: false,
  },
  xAxis: [
    {
      axisLabel: {
        show: false,
      },
      type: "category",
      show: false,
      data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月"],
    },
  ],
  yAxis: {
    show: false,
    axisLabel: {
      show: false,
    },
  },
  grid: {
    x: 0,
    y: 0,
    x2: 0,
    y2: 0,
  },
  series: [
    {
      name: "销量",
      type: "pie",
      center: ["50%", "50%"],
      radius: ["60%", "100%"],
      itemStyle: {
        color: "#409EFF",
        label: {
          show: false,
        },
      },
      areaStyle: {
        color: "#409EFF",
        opacity: 0.1,
      },
      label: {
        show: false,
      },
      data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10],
    },
  ],
};

//销售额
export const SalesOptions = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  legend: {
    data: ["销售额"],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    top: "10%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "销售额",
      type: "bar",
      barWidth: "30",
      data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290],
    },
  ],
};

//RadarChart
export const getRadarOptions = (data) => {
  const indicator = data.map((item) => {
    return {
      name: item.name,
      max: 100,
    };
  });
  const seriesData = data.map((item) => {
    return {
      value: item.value,
      name: item.name,
    };
  });
  return {
    tooltip: {},
    legend: {
      show: false,
    },
    radar: {
      shape: "circle",
      name: {
        textStyle: {
          color: "#fff",
          backgroundColor: "#004dff",
          borderRadius: 3,
          padding: [3, 5],
        },
      },
      indicator,
    },
    series: [
      {
        name: "一站式理赔",
        type: "radar",
        areaStyle: {
          normal: {
            color: "#409EFF",
            opacity: 0.1,
          },
        },
        data: [[80, 90, 100, 90, 55]],
      },
      {
        name: "零星理赔",
        type: "radar",
        areaStyle: {
          normal: {
            color: "#67C23A",
            opacity: 0.1,
          },
        },
        data: [[20, 30, 40, 50, 60]],
      },
    ],
  };
};

//各指标占比
export const getPieOptions = (data) => {
  return {
    tooltip: {},
    legend: {
      left: "70%",
      top: "middle",
      orient: "vertical",
      icon: "circle",
      itemWidth: 8,
      itemHeight: 8,
      itemGap: 16,
      textStyle: {
        color: "#333",
        fontSize: 12,
      },
      data: data.map((item) => item.name),
    },
    series: [
      {
        data: data,
        type: "pie",
        center: ["30%", "50%"],
        radius: ["30%", "60%"],
      },
    ],
  };
};

//交易情况则线图
export const getLineOptions = (data) => {
  const colors = ["#409EFF", "#67C23A", "#E6A23C", "#F56C6C"];
  const seriesOpts = {
    smooth: true,
    showSymbol: false,
    areaStyle: {},
  };
  return {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      show: false,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: "10%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        ...seriesOpts,
        name: "邮件营销",
        type: "line",
        stack: "总量",
        data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90],
      },
      {
        ...seriesOpts,
        name: "联盟广告",
        type: "line",
        stack: "总量",
        data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290],
      },
      {
        ...seriesOpts,
        name: "视频广告",
        type: "line",
        stack: "总量",
        data: [150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190],
      },
      {
        ...seriesOpts,
        name: "直接访问",
        type: "line",
        stack: "总量",
        data: [320, 332, 301, 334, 390, 330, 320, 320, 332, 301, 334, 390],
      },
      {
        ...seriesOpts,
        name: "搜索引擎",
        type: "line",
        stack: "总量",
        data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290],
      },
    ],
  };
};

//饼图组合
export const getPieGroupOptions = (data) => {
  return {
    title: [
      {
        text: "总销售额",
        top: "center",
        left: "15.5%",
        textStyle: {
          color: "#333",
          fontSize: 14,
          fontWeight: "normal",
        },
      },
      {
        text: "总销售额",
        top: "center",
        left: "45.5%",
        textStyle: {
          color: "#333",
          fontSize: 14,
          fontWeight: "normal",
        },
      },
      {
        text: "总销售额",
        top: "center",
        left: "75.5%",
        textStyle: {
          color: "#333",
          fontSize: 14,
          fontWeight: "normal",
        },
      },
    ],
    tooltip: {},
    legend: {
      // show: false,
      bottom: 0,
      left: "center",
      icon: "circle",
      itemWidth: 8,
    },
    series: [
      {
        type: "pie",
        radius: ["30%", "40%"],
        center: ["20%", "50%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        data: data,
      },
      {
        type: "pie",
        radius: ["30%", "40%"],
        center: ["50%", "50%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        data: data,
      },
      {
        type: "pie",
        radius: ["30%", "40%"],
        center: ["80%", "50%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        data: data,
      },
    ],
  };
};
