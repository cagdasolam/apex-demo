import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function AreaChart() {
  const options = {
    chart: {
      type: 'area',
      toolbar: { show: true },
      background: 'transparent',
      fontFamily: 'inherit',
      stacked: true,
    },
    theme: { mode: 'dark' },
    stroke: { curve: 'smooth', width: 2 },
    colors: ['#6366f1', '#a78bfa', '#c4b5fd'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.1,
      },
    },
    xaxis: {
      categories: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
    },
    yaxis: {
      labels: {
        formatter: (val) => `${(val / 1000).toFixed(0)}K`,
      },
    },
    tooltip: { theme: 'dark' },
    legend: { position: 'top' },
    grid: { borderColor: '#334155' },
    dataLabels: { enabled: false },
  }

  const series = [
    {
      name: 'Organik',
      data: [12000, 15000, 14000, 18000, 22000, 25000, 28000, 32000, 30000, 35000, 38000, 42000],
    },
    {
      name: 'Sosyal Medya',
      data: [5000, 7000, 8000, 9000, 11000, 13000, 15000, 17000, 16000, 19000, 21000, 24000],
    },
    {
      name: 'Direkt',
      data: [3000, 4000, 3500, 5000, 6000, 7000, 8000, 9000, 8500, 10000, 11000, 13000],
    },
  ]

  return <ReactApexChart options={options} series={series} type="area" height={320} />
}

