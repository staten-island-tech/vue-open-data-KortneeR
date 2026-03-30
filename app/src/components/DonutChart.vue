<template>
  <div class="chart-card">
    <div class="chart-header">
      <div>
        <h2 class="chart-title">Inspection Types</h2>
        <p class="chart-subtitle">Initial vs Compliance split</p>
      </div>
      <span class="chart-badge">Doughnut</span>
    </div>

    <div class="donut-wrapper">
      <canvas ref="canvasRef"></canvas>
    </div>

    <div class="legend">
      <div class="legend-item">
        <span class="legend-dot" style="background: #f5c842"></span>
        Initial ({{ initialCount }})
      </div>
      <div class="legend-item">
        <span class="legend-dot" style="background: #3a8de8"></span>
        Compliance ({{ complianceCount }})
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { Chart, DoughnutController, ArcElement, Tooltip } from 'chart.js'

Chart.register(DoughnutController, ArcElement, Tooltip)

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

const canvasRef = ref(null)
let chartInstance = null

const initialCount    = computed(() => props.data.filter(r => r.inspection_type === 'Initial').length)
const complianceCount = computed(() => props.data.filter(r => r.inspection_type === 'Compliance').length)

onMounted(() => {
  const total = initialCount.value + complianceCount.value

  chartInstance = new Chart(canvasRef.value.getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: ['Initial', 'Compliance'],
      datasets: [{
        data: [initialCount.value, complianceCount.value],
        backgroundColor: ['#f5c84288', '#3a8de888'],
        borderColor:     ['#f5c842',   '#3a8de8'],
        borderWidth: 2,
        hoverOffset: 10,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '65%',
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#13131c',
          borderColor: '#2a2a3a',
          borderWidth: 1,
          titleColor: '#e8e8f0',
          bodyColor: '#9090a8',
          padding: 12,
          callbacks: {
            label: ctx => `  ${ctx.raw} inspections (${((ctx.raw / total) * 100).toFixed(1)}%)`
          }
        }
      }
    }
  })
})

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
  background: rgba(58, 141, 232, 0.1);
  color: #3a8de8;
  border: 1px solid rgba(58, 141, 232, 0.25);
  padding: 4px 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  white-space: nowrap;
}

.donut-wrapper {
  position: relative;
  height: 240px;
  width: 100%;
}

.legend {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 16px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  color: #6b6b82;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 2px;
  flex-shrink: 0;
  display: inline-block;
}
</style>