<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style lang="scss">
@use '~/assets/scss/main.scss';
@import url('~/assets/css/first.css');
</style>
<script setup lang="ts">
import '~/assets/css/second.css'
</script>
