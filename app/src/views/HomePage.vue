<script setup>

import {ref} from 'vue'

async function getData() {
  const url = "https://data.cityofnewyork.us/resource/p937-wjvj.json";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}
getData();

</script>

<template>

</template>

<style scoped></style>
