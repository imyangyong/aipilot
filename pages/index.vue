<script setup lang="ts">
const content = ref('')
content.value = await $fetch('/api/generate-image')
</script>

<template>
 <h1>Hello, {{ content }}</h1>
</template>
