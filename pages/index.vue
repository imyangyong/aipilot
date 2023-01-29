<script setup lang="ts">
import generateImage from '~~/utils/generate-code';

const content = ref('')
const answer = ref('')

async function generate() {
  answer.value = await generateImage(content.value)
}

const changeValue = (e: any) => {
  content.value = e.target.value
}
</script>

<template>
 <textarea style="height: 200px" @blur="generate" @input="changeValue"></textarea>
 <span>answer: {{ answer }}</span>
</template>
