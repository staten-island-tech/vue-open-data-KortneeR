<template>
  <div class="home">

    <div class="bg-grid"></div>

    <div class="content">
      <p class="eyebrow">NYC Open Data · Pest Control</p>
      <h1 class="title">RAT<br/><span>INSPECTION</span><br/>DASHBOARD</h1>
      <p class="subtitle">Select a chart to explore the data</p>

      <div class="buttons">
        <button class="btn btn--bar" @click="$router.push('/borough')">
          <span class="btn-icon">▦</span>
          <span class="btn-label">Results by Borough</span>
          <span class="btn-desc">Stacked bar chart · 5 boroughs</span>
        </button>

        <button class="btn btn--donut" @click="$router.push('/types')">
          <span class="btn-icon">◉</span>
          <span class="btn-label">Inspection Types</span>
          <span class="btn-desc">Doughnut chart · Initial vs Compliance</span>
        </button>
      </div>

      <p class="source">
        Source:
        <a href="https://data.cityofnewyork.us/resource/p937-wjvj.json" target="_blank">
          NYC Open Data · p937-wjvj
        </a>
      </p>
    </div>

  </div>
</template>

<script setup>

</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.bg-grid {
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(245, 200, 66, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(245, 200, 66, 0.04) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: 0;
}

.content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px 24px;
  max-width: 700px;
  width: 100%;
}

.eyebrow {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.2em;
  color: #f5c842;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(52px, 10vw, 96px);
  line-height: 0.9;
  letter-spacing: 0.02em;
  color: #e8e8f0;
  margin-bottom: 24px;
}

.title span { color: #f5c842; }

.subtitle {
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  color: #6b6b82;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 48px;
}


.buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 48px;
}

.btn {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 28px 24px;
  background: #13131c;
  border: 1px solid #1e1e2a;
  cursor: pointer;
  text-align: left;
  position: relative;
  overflow: hidden;
  transition: border-color 0.2s, transform 0.15s;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  transition: opacity 0.2s;
}

.btn--bar::before  { background: #f5c842; }
.btn--donut::before { background: #3a8de8; }

.btn:hover {
  transform: translateY(-2px);
}

.btn--bar:hover  { border-color: #f5c842; }
.btn--donut:hover { border-color: #3a8de8; }


.btn--bar::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at top left, rgba(245,200,66,0.06), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
}
.btn--donut::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at top left, rgba(58,141,232,0.06), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
}
.btn:hover::after { opacity: 1; }

.btn-icon {
  font-size: 28px;
  margin-bottom: 14px;
  display: block;
  line-height: 1;
}

.btn--bar  .btn-icon { color: #f5c842; }
.btn--donut .btn-icon { color: #3a8de8; }

.btn-label {
  font-family: 'Syne', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #e8e8f0;
  margin-bottom: 6px;
  display: block;
}

.btn-desc {
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  color: #6b6b82;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  display: block;
}


.source {
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  color: #6b6b82;
  letter-spacing: 0.1em;
}

.source a {
  color: #f5c842;
  text-decoration: none;
}

.source a:hover { text-decoration: underline; }

@media (max-width: 540px) {
  .buttons { grid-template-columns: 1fr; }
}
</style>