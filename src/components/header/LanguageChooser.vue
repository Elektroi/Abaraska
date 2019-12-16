<template>
  <p v-bind:title="title">
    {{ name }}
  </p>
</template>

<script>
export default {
  name: 'LanguageChooser',
  props: ['name', 'title']
}
</script>

<style scoped>

</style>
