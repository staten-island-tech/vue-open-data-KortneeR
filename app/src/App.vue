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

const inspections = ref([])

function getResult(result) {
  if(inspections.value.includes(result)) {
    inspections.value.push(result)
  }
}

//chart w/ amount of passed rat inspections for borough (no rats)
//chart w/ amount of failed rat inspections per borough (rats found)

</script>

<template>

  <button @click="getResult(result)"> Get Result </button>
  <div v-for= "inspection in inspections">
    <p>${{ inspection.result }}</p>
  </div>
  <div v-if="inspection.result = Passed"></div>

</template>

<style scoped></style>
