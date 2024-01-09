<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert>Some data</AppAlert>
    <br />
    <button class="btn btn-primary">Click on me</button>

    <div
      class="static"
      :class="{ active: isActive, 'text-danger': hasError }"
    ></div>
    <div :class="classObject"></div>
  </div>
</template>
<script setup lang="ts">
const isActive = ref(true)
const hasError = ref(false)
const classObject = reactive({
  active: true,
  'text-danger': false,
})
</script>
