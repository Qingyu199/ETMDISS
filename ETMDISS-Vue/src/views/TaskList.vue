<template>
  <div>
    <h2>任务列表</h2>
    <ul v-if="tasks.length">
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }} - {{ task.author }}
      </li>
    </ul>
    <p v-else>暂无任务</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const tasks = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8081/tasks')
    tasks.value = response.data
  } catch (err) {
    console.error('获取任务失败', err)
  }
})
</script>