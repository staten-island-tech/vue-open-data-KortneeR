<template>
  <div class="page">
    <div class="bg-grid"></div>

    <div class="inner">
      <button class="back-btn" @click="$router.push('/')">← Back</button>

      <header class="page-header">
        <div>
          <p class="eyebrow">NYC Open Data · Pest Control</p>
          <h1 class="title">Results by <span>Borough</span></h1>
        </div>
        <div class="total">
          <p class="total-label">Total Records</p>
          <p class="total-val">{{ inspections.length }}</p>
        </div>
      </header>

      
      <div class="stats-row">
        <div v-for="stat in stats" :key="stat.label" class="stat-card" :style="{ '--c': stat.color }">
          <p class="stat-label">{{ stat.label }}</p>
          <p class="stat-number">{{ stat.value }}</p>
        </div>
      </div>

      
      <BarChart :data="inspections" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { inspections } from '@/data/inspections.js'
import BarChart from '@/components/BarChart.vue'

const count = (result) => inspections.filter(r => r.result === result).length

const stats = computed(() => [
  { label: 'Passed',         value: count('Passed'),             color: '#3ae8a0' },
  { label: 'Rat Activity',   value: count('Rat Activity'),       color: '#f5c842' },
  { label: 'Failed / Rats',  value: count('Failed for Rat Act'), color: '#e8523a' },
  { label: 'Failed / Other', value: count('Failed for Other R'), color: '#3a8de8' },
])
</script>

<style scoped>
.page {
  min-height: 100vh;
  position: relative;
}

.bg-grid {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(245, 200, 66, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(245, 200, 66, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: 0;
}

.inner {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px 24px 80px;
}

.back-btn {
  background: none;
  border: 1px solid #1e1e2a;
  color: #6b6b82;
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 8px 16px;
  cursor: pointer;
  margin-bottom: 32px;
  transition: color 0.2s, border-color 0.2s;
}

.back-btn:hover { color: #f5c842; border-color: #f5c842; }

.page-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 36px;
  padding-bottom: 24px;
  border-bottom: 1px solid #1e1e2a;
}

.eyebrow {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.2em;
  color: #f5c842;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(36px, 6vw, 64px);
  line-height: 1;
  color: #e8e8f0;
}

.title span { color: #f5c842; }

.total-label {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  color: #6b6b82;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 4px;
  text-align: right;
}

.total-val {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 36px;
  color: #f5c842;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 24px;
}

.stat-card {
  background: #13131c;
  border: 1px solid #1e1e2a;
  padding: 18px 20px;
  position: relative;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: var(--c);
}

.stat-label {
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.15em;
  color: #6b6b82;
  text-transform: uppercase;
  margin-bottom: 6px;
}

.stat-number {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 34px;
  line-height: 1;
  color: var(--c);
}

@media (max-width: 640px) {
  .stats-row { grid-template-columns: repeat(2, 1fr); }
  .page-header { flex-direction: column; align-items: flex-start; gap: 12px; }
}
</style>