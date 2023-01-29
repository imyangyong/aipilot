<script setup lang="ts">
import generateImage from '~~/utils/generate-code';

const content = ref('')

async function generate() {
  content.value = await generateImage('Write a function in javascript that calculates fibonacci')
}
</script>

<template>
 <h1 @click="generate">Question: </h1>
 <textarea style="height: 200px">{{ content }}</textarea>
</template>
