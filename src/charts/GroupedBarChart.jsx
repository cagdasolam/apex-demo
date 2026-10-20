import React from 'react'
import Chart from 'react-apexcharts'

export default function GroupedBarChart() {
  const options = {
    chart: {
      type: 'bar',
      toolbar: { show: true },
      background: 'transparent',
      fontFamily: 'inherit',
    },
    theme: { mode: 'dark' },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 6,
        borderRadiusApplication: 'end',
      },
    },
    colors: ['#6366f1', '#22d3ee', '#f59e0b'],
    xaxis: {
      categories: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz'],
      labels: { style: { fontSize: '13px' } },
    },
    yaxis: {
      labels: {
        formatter: (val) => `${val}K`,
        style: { fontSize: '13px' },
      },
    },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 2, colors: ['transparent'] },
    tooltip: {
      theme: 'dark',
      y: { formatter: (val) => `${val}K ₺` },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      fontSize: '13px',
      labels: { colors: '#cbd5e1' },
    },
    grid: { borderColor: '#334155' },
  }

  const series = [
    {
      name: 'Gelir',
      data: [44, 55, 57, 56, 61, 58],
    },
    {
      name: 'Gider',
      data: [35, 41, 36, 26, 45, 48],
    },
    {
      name: 'Kâr',
      data: [9, 14, 21, 30, 16, 10],
    },
  ]

  return <Chart options={options} series={series} type="bar" height={320} />
}

