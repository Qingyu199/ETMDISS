<template>
  <li>
    {{ index + 1 }}. {{ user.name }}（{{ user.age }}岁）
    <button @click="handleRemove">删除</button>
  </li>
</template>

<script setup>
const { user, index } = defineProps({
  user: Object,
  index: Number
})

const emit = defineEmits(['remove'])

const handleRemove = () => {
  console.log('删除点击，index=', index)
  emit('remove', index)
}
</script>
