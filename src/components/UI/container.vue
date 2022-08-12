<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name : 'container'
}
</script>

<style scoped>
.container {
  width: 1330px;
  max-width: 100%;
  margin: 0 auto;
}
</style>