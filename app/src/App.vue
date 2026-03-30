<template>
  <router-view />
</template>

<script setup>

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Bebas+Neue&family=Syne:wght@400;700&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #0a0a0f;
  color: #e8e8f0;
  font-family: 'Syne', sans-serif;
  min-height: 100vh;
}

body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image:
    linear-gradient(rgba(245, 200, 66, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(245, 200, 66, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}

#app {
  position: relative;
  z-index: 1;
}
</style>