<script setup>

const URL = "https://data.cityofnewyork.us/resource/p937-wjvj.json";

async function getData(URL) { 
  try {
    const response = await fetch(URL);
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error);
    console.log("不好");
  }
}
getData(URL);

</script>

<template>

</template>

<style scoped></style>
