import React from 'react'
import LineChart from './charts/LineChart'
import AreaChart from './charts/AreaChart'
import BarChart from './charts/BarChart'
import DonutChart from './charts/DonutChart'
import RadarChart from './charts/RadarChart'
import HeatmapChart from './charts/HeatmapChart'
import CandlestickChart from './charts/CandlestickChart'
import RadialBarChart from './charts/RadialBarChart'
import GroupedBarChart from './charts/GroupedBarChart'

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>
          ApexCharts Demo <span className="badge">v8</span>
        </h1>
        <p>React + ApexCharts ile modern ve interaktif grafikler</p>
      </header>

      <div className="charts-grid">
        <div className="chart-card">
          <h3>📈 Çizgi Grafik</h3>
          <p className="chart-desc">Aylık gelir ve gider karşılaştırması</p>
          <LineChart />
        </div>

        <div className="chart-card">
          <h3>📊 Alan Grafik</h3>
          <p className="chart-desc">Web sitesi trafik analizi</p>
          <AreaChart />
        </div>

        <div className="chart-card">
          <h3>📊 Bar Grafik</h3>
          <p className="chart-desc">Departman bazlı performans</p>
          <BarChart />
        </div>

        <div className="chart-card">
          <h3>📊 Grouped Bar Grafik</h3>
          <p className="chart-desc">Aylık gelir, gider ve kâr karşılaştırması</p>
          <GroupedBarChart />
        </div>

        <div className="chart-card">
          <h3>🍩 Donut Grafik</h3>
          <p className="chart-desc">Bütçe dağılımı</p>
          <DonutChart />
        </div>

        <div className="chart-card">
          <h3>🕸️ Radar Grafik</h3>
          <p className="chart-desc">Ekip yetkinlik analizi</p>
          <RadarChart />
        </div>

        <div className="chart-card">
          <h3>📊 Radial Bar</h3>
          <p className="chart-desc">Hedef tamamlama oranları</p>
          <RadialBarChart />
        </div>

        <div className="chart-card full-width">
          <h3>🔥 Isı Haritası</h3>
          <p className="chart-desc">Haftalık aktivite yoğunluğu</p>
          <HeatmapChart />
        </div>

        <div className="chart-card full-width">
          <h3>📉 Candlestick Grafik</h3>
          <p className="chart-desc">Hisse senedi fiyat hareketleri</p>
          <CandlestickChart />
        </div>
      </div>
    </div>
  )
}

