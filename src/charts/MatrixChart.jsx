import React from 'react'
import ReactApexChart from 'react-apexcharts'

// --- Entity tanımları ---
const entities = [
  { name: 'A', value: 80, color: '#6366f1' },  // indigo
  { name: 'B', value: 50, color: '#f59e0b' },  // amber
  { name: 'C', value: 30, color: '#10b981' },  // emerald
  { name: 'D', value: 65, color: '#ef4444' },  // red
]

/**
 * Hex rengi RGB'ye çevirir
 */
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return { r, g, b }
}

/**
 * RGB'yi hex'e çevirir
 */
function rgbToHex(r, g, b) {
  const clamp = (v) => Math.max(0, Math.min(255, Math.round(v)))
  return '#' + [r, g, b].map(clamp).map((v) => v.toString(16).padStart(2, '0')).join('')
}

/**
 * İki rengi verilen orana (t) göre karıştırır.
 * t = 0 → tamamen color1 (row), t = 1 → tamamen color2 (col)
 */
function blendColors(hex1, hex2, t) {
  const c1 = hexToRgb(hex1)
  const c2 = hexToRgb(hex2)
  return rgbToHex(
    c1.r + (c2.r - c1.r) * t,
    c1.g + (c2.g - c1.g) * t,
    c1.b + (c2.b - c1.b) * t,
  )
}

/**
 * Tüm oranları alıp min-max normalize ederek 0-1 aralığına çeker.
 * Böylece en küçük oran → t=1 (col baskın), en büyük oran → t=0 (row baskın)
 */
function buildMatrix(entities) {
  // Önce tüm oranları hesapla
  const ratios = entities.map((row) =>
    entities.map((col) => row.value / col.value),
  )
  const flat = ratios.flat()
  const minR = Math.min(...flat)
  const maxR = Math.max(...flat)
  const range = maxR - minR || 1

  return entities.map((rowEntity, ri) => ({
    name: rowEntity.name,
    data: entities.map((colEntity, ci) => {
      const ratio = ratios[ri][ci]
      // normalize: 0 (en düşük oran → col baskın) ... 1 (en yüksek oran → row baskın)
      const normalized = (ratio - minR) / range
      // t: 0 = row rengi, 1 = col rengi  →  row baskınsa t küçük olmalı
      const t = 1 - normalized
      const cellColor = blendColors(rowEntity.color, colEntity.color, t)
      const displayValue = Math.round(ratio * 100) / 100

      return {
        x: colEntity.name,
        y: displayValue,
        fillColor: cellColor,
      }
    }),
  }))
}

export default function MatrixChart() {
  const series = buildMatrix(entities)

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
        radius: 6,
        enableShades: false,
        distributed: false,
      },
    },
    colors: ['#000000'], // Tek fallback renk — fillColor her hücrede override eder
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '13px',
        fontWeight: 600,
        colors: ['#fff'],
      },
      formatter: (val) => val.toFixed(2),
    },
    stroke: {
      width: 2,
      colors: ['#1e293b'],
    },
    xaxis: {
      categories: entities.map((e) => e.name),
      labels: {
        style: { colors: entities.map((e) => e.color), fontSize: '14px', fontWeight: 700 },
      },
      title: {
        text: 'Sütun (Bölen)',
        style: { color: '#94a3b8', fontSize: '12px' },
      },
    },
    yaxis: {
      labels: {
        style: { colors: entities.map((e) => e.color), fontSize: '14px', fontWeight: 700 },
      },
      title: {
        text: 'Satır (Bölünen)',
        style: { color: '#94a3b8', fontSize: '12px' },
      },
    },
    tooltip: {
      theme: 'dark',
      custom: ({ seriesIndex, dataPointIndex }) => {
        const row = entities[seriesIndex]
        const col = entities[dataPointIndex]
        const ratio = (row.value / col.value).toFixed(2)
        return `
          <div style="padding: 10px; font-size: 13px; line-height: 1.6;">
            <div style="font-weight: 700; margin-bottom: 4px;">
              <span style="color:${row.color}">■ ${row.name}</span>
              <span style="color:#94a3b8"> / </span>
              <span style="color:${col.color}">■ ${col.name}</span>
            </div>
            <div><span style="color:#94a3b8">Satır değeri:</span> ${row.value}</div>
            <div><span style="color:#94a3b8">Sütun değeri:</span> ${col.value}</div>
            <div style="margin-top: 4px; font-weight: 700; font-size: 15px;">
              Oran: ${ratio}
            </div>
          </div>
        `
      },
    },
    legend: { show: false },
    grid: { borderColor: '#334155' },
    title: {
      text: `Entity Değerleri — A: ${entities[0].value}  B: ${entities[1].value}  C: ${entities[2].value}  D: ${entities[3].value}`,
      align: 'center',
      style: { color: '#cbd5e1', fontSize: '13px', fontWeight: 400 },
    },
    subtitle: {
      text: 'Hücre = Satır Değeri / Sütun Değeri  |  Renk = Satır↔Sütun renk karışımı',
      align: 'center',
      style: { color: '#64748b', fontSize: '11px' },
    },
  }

  return (
    <div>
      <ReactApexChart options={options} series={series} type="heatmap" height={350} />
      <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 8 }}>
        {entities.map((e) => (
          <div key={e.name} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 14, height: 14, borderRadius: 3, backgroundColor: e.color }} />
            <span style={{ color: e.color, fontWeight: 700, fontSize: 13 }}>{e.name}</span>
            <span style={{ color: '#94a3b8', fontSize: 12 }}>({e.value})</span>
          </div>
        ))}
      </div>
    </div>
  )
}
