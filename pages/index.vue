<script setup lang="ts">
const content = ref('')
content.value = await $fetch('/api/generate-image')
</script>

<template>
 <h1>Question: </h1>
</template>
