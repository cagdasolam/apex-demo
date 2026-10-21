import React from 'react'
import ReactApexChart from 'react-apexcharts'

function generateCandlestickData() {
  const data = []
  let baseDate = new Date('2026-01-02').getTime()
  let lastClose = 150

  for (let i = 0; i < 60; i++) {
    const open = lastClose + (Math.random() - 0.48) * 5
    const close = open + (Math.random() - 0.48) * 8
    const high = Math.max(open, close) + Math.random() * 4
    const low = Math.min(open, close) - Math.random() * 4

    data.push({
      x: new Date(baseDate),
      y: [
        parseFloat(open.toFixed(2)),
        parseFloat(high.toFixed(2)),
        parseFloat(low.toFixed(2)),
        parseFloat(close.toFixed(2)),
      ],
    })

    lastClose = close
    baseDate += 24 * 60 * 60 * 1000
    // Skip weekends
    const dayOfWeek = new Date(baseDate).getDay()
    if (dayOfWeek === 0) baseDate += 24 * 60 * 60 * 1000
    if (dayOfWeek === 6) baseDate += 2 * 24 * 60 * 60 * 1000
  }
  return data
}

export default function CandlestickChart() {
  const options = {
    chart: {
      type: 'candlestick',
      toolbar: { show: true },
      background: 'transparent',
      fontFamily: 'inherit',
    },
    theme: { mode: 'dark' },
    xaxis: { type: 'datetime' },
    yaxis: {
      labels: {
        formatter: (val) => `₺${val.toFixed(0)}`,
      },
      tooltip: { enabled: true },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#22c55e',
          downward: '#ef4444',
        },
      },
    },
    tooltip: { theme: 'dark' },
    grid: { borderColor: '#334155' },
  }

  const series = [
    {
      name: 'BIST-DEMO',
      data: generateCandlestickData(),
    },
  ]

  return <ReactApexChart options={options} series={series} type="candlestick" height={350} />
}

