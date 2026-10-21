import React from 'react'
import ReactApexChart from 'react-apexcharts'

function generateHeatmapData(count, range) {
  const data = []
  for (let i = 0; i < count; i++) {
    data.push(Math.floor(Math.random() * (range.max - range.min + 1)) + range.min)
  }
  return data
}

export default function HeatmapChart() {
  const days = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz']

  const options = {
    chart: {
      type: 'heatmap',
      toolbar: { show: true },
      background: 'transparent',
      fontFamily: 'inherit',
    },
    theme: { mode: 'dark' },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        radius: 4,
        colorScale: {
          ranges: [
            { from: 0, to: 20, name: 'Düşük', color: '#1e293b' },
            { from: 21, to: 40, name: 'Orta', color: '#4338ca' },
            { from: 41, to: 60, name: 'Yüksek', color: '#6366f1' },
            { from: 61, to: 80, name: 'Çok Yüksek', color: '#a78bfa' },
            { from: 81, to: 100, name: 'Maksimum', color: '#f472b6' },
          ],
        },
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
    },
    tooltip: { theme: 'dark' },
    grid: { borderColor: '#334155' },
  }

  const series = days.map((day) => ({
    name: day,
    data: generateHeatmapData(9, { min: 0, max: 100 }),
  }))

  return <ReactApexChart options={options} series={series} type="heatmap" height={280} />
}

