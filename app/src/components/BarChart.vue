<template>
  <div class="chart-card">
    <div class="chart-header">
      <div>
        <h2 class="chart-title">Results by Borough</h2>
        <p class="chart-subtitle">Stacked inspection outcomes per borough</p>
      </div>
      <span class="chart-badge">Bar Chart</span>
    </div>
   
    <div class="chart-wrapper">
      <canvas ref="canvasRef"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'


Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

const canvasRef = ref(null)
let chartInstance = null

const BOROUGHS = ['Manhattan', 'Brooklyn', 'Bronx', 'Queens', 'Staten Island']
const RESULTS  = ['Passed', 'Rat Activity', 'Failed for Rat Act', 'Failed for Other R']
const COLORS   = {
  'Passed':             '#3ae8a0',
  'Rat Activity':       '#f5c842',
  'Failed for Rat Act': '#e8523a',
  'Failed for Other R': '#3a8de8',
}

onMounted(() => {
  const datasets = RESULTS.map(result => ({
    label: result,
    data: BOROUGHS.map(borough =>
      props.data.filter(r => r.borough === borough && r.result === result).length
    ),
    backgroundColor: COLORS[result] + 'aa',
    borderColor: COLORS[result],
    borderWidth: 1,
    borderRadius: 3,
  }))

  chartInstance = new Chart(canvasRef.value.getContext('2d'), {
    type: 'bar',
    data: { labels: BOROUGHS, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#9090a8',
            font: { family: 'DM Mono, monospace', size: 10 },
            boxWidth: 10,
            padding: 14,
          }
        },
        tooltip: {
          backgroundColor: '#13131c',
          borderColor: '#2a2a3a',
          borderWidth: 1,
          titleColor: '#e8e8f0',
          bodyColor: '#9090a8',
          padding: 12,
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: { color: '#6b6b82', font: { size: 10 } },
          grid: { color: '#1a1a26' },
          border: { color: '#1e1e2a' },
        },
        y: {
          stacked: true,
          ticks: { color: '#6b6b82', font: { size: 10 } },
          grid: { color: '#1a1a26' },
          border: { color: '#1e1e2a' },
        }
      }
    }
  })
})

// Always destroy the chart when the component unmounts to avoid memory leaks
onBeforeUnmount(() => {
  chartInstance?.destroy()
})
</script>

<style scoped>
.chart-card {
  background: #13131c;
  border: 1px solid #1e1e2a;
  padding: 28px;
}

.chart-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 24px;
}

.chart-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 26px;
  letter-spacing: 0.05em;
  line-height: 1;
  color: #e8e8f0;
}

.chart-subtitle {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  color: #6b6b82;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-top: 5px;
}

.chart-badge {
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  background: rgba(245, 200, 66, 0.1);
  color: #f5c842;
  border: 1px solid rgba(245, 200, 66, 0.25);
  padding: 4px 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  white-space: nowrap;
}

/* Critical: wrapper needs explicit height for Chart.js */
.chart-wrapper {
  position: relative;
  height: 300px;
  width: 100%;
}
</style>