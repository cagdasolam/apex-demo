import React from 'react'
import Chart from 'react-apexcharts'

export default function DonutChart() {
  const options = {
    chart: {
      type: 'donut',
      background: 'transparent',
      fontFamily: 'inherit',
    },
    theme: { mode: 'dark' },
    colors: ['#6366f1', '#8b5cf6', '#a78bfa', '#c084fc', '#d946ef'],
    labels: ['Ar-Ge', 'Pazarlama', 'Operasyon', 'İK', 'Diğer'],
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
          labels: {
            show: true,
            name: { fontSize: '14px' },
            value: {
              fontSize: '22px',
              fontWeight: 700,
              formatter: (val) => `₺${Number(val).toLocaleString('tr-TR')}`,
            },
            total: {
              show: true,
              label: 'Toplam Bütçe',
              fontSize: '13px',
              color: '#94a3b8',
              formatter: (w) => {
                const total = w.globals.seriesTotals.reduce((a, b) => a + b, 0)
                return `₺${total.toLocaleString('tr-TR')}`
              },
            },
          },
        },
      },
    },
    dataLabels: { enabled: false },
    legend: { position: 'bottom', fontSize: '13px' },
    stroke: { show: false },
    tooltip: { theme: 'dark' },
  }

  const series = [450000, 280000, 320000, 150000, 100000]

  return <Chart options={options} series={series} type="donut" height={350} />
}

