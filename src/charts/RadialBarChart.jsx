import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function RadialBarChart() {
  const options = {
    chart: {
      type: 'radialBar',
      background: 'transparent',
      fontFamily: 'inherit',
    },
    theme: { mode: 'dark' },
    colors: ['#6366f1', '#8b5cf6', '#d946ef', '#f472b6'],
    plotOptions: {
      radialBar: {
        hollow: { size: '30%' },
        track: { background: '#334155' },
        dataLabels: {
          name: { fontSize: '14px', color: '#94a3b8' },
          value: {
            fontSize: '18px',
            fontWeight: 700,
            color: '#f1f5f9',
            formatter: (val) => `${val}%`,
          },
          total: {
            show: true,
            label: 'Ortalama',
            color: '#94a3b8',
            formatter: (w) => {
              const avg = Math.round(
                w.globals.seriesTotals.reduce((a, b) => a + b, 0) / w.globals.series.length
              )
              return `${avg}%`
            },
          },
        },
      },
    },
    labels: ['Satış', 'Müşteri', 'Ürün', 'Destek'],
    legend: {
      show: true,
      position: 'bottom',
      fontSize: '13px',
    },
  }

  const series = [85, 72, 91, 68]

  return <ReactApexChart options={options} series={series} type="radialBar" height={350} />
}

