import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function BarChart() {
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
        horizontal: true,
        borderRadius: 6,
        barHeight: '60%',
        distributed: true,
      },
    },
    colors: ['#6366f1', '#8b5cf6', '#a78bfa', '#c084fc', '#d946ef', '#f472b6', '#fb7185'],
    xaxis: {
      labels: {
        formatter: (val) => `${val}%`,
      },
    },
    yaxis: {
      labels: { style: { fontSize: '13px' } },
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val}%`,
      style: { fontSize: '12px' },
    },
    tooltip: { theme: 'dark' },
    legend: { show: false },
    grid: { borderColor: '#334155' },
  }

  const series = [
    {
      name: 'Performans',
      data: [
        { x: 'Mühendislik', y: 92 },
        { x: 'Pazarlama', y: 85 },
        { x: 'Satış', y: 78 },
        { x: 'Destek', y: 88 },
        { x: 'İnsan Kaynakları', y: 74 },
        { x: 'Finans', y: 81 },
        { x: 'Ürün', y: 90 },
      ],
    },
  ]

  return <ReactApexChart options={options} series={series} type="bar" height={320} />
}

