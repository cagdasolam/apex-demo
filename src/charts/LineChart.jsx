import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function LineChart() {
  const options = {
    chart: {
      type: 'line',
      toolbar: { show: true },
      background: 'transparent',
      fontFamily: 'inherit',
    },
    theme: { mode: 'dark' },
    stroke: { curve: 'smooth', width: 3 },
    colors: ['#6366f1', '#f472b6'],
    xaxis: {
      categories: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
    },
    yaxis: {
      labels: {
        formatter: (val) => `₺${(val / 1000).toFixed(0)}K`,
      },
    },
    tooltip: { theme: 'dark' },
    legend: { position: 'top' },
    grid: { borderColor: '#334155' },
    markers: { size: 4, hover: { size: 6 } },
  }

  const series = [
    {
      name: 'Gelir',
      data: [45000, 52000, 48000, 61000, 55000, 67000, 72000, 68000, 74000, 78000, 82000, 91000],
    },
    {
      name: 'Gider',
      data: [32000, 38000, 35000, 42000, 39000, 45000, 48000, 44000, 50000, 52000, 55000, 58000],
    },
  ]

  return <ReactApexChart options={options} series={series} type="line" height={320} />
}

