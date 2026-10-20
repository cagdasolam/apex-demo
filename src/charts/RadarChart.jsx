import React from 'react'
import Chart from 'react-apexcharts'

export default function RadarChart() {
  const options = {
    chart: {
      type: 'radar',
      toolbar: { show: false },
      background: 'transparent',
      fontFamily: 'inherit',
    },
    theme: { mode: 'dark' },
    colors: ['#6366f1', '#f472b6'],
    stroke: { width: 2 },
    fill: { opacity: 0.2 },
    markers: { size: 4 },
    xaxis: {
      categories: ['Liderlik', 'Teknik', 'İletişim', 'Problem Çözme', 'Takım Çalışması', 'Yaratıcılık'],
    },
    yaxis: { show: false },
    tooltip: { theme: 'dark' },
    legend: { position: 'top' },
  }

  const series = [
    { name: 'Ekip A', data: [85, 92, 78, 88, 90, 75] },
    { name: 'Ekip B', data: [70, 80, 90, 72, 85, 88] },
  ]

  return <Chart options={options} series={series} type="radar" height={350} />
}

