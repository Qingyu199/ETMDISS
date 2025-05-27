<template>
    <div>
        <h1>后端消息：</h1>
        <p>{{ message }}</p>
        <router-link to="/">返回首页</router-link>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const message = ref('加载中...')

onMounted(() => {
  axios.get('http://localhost:8080/api/message')
    .then(res => {
      message.value = res.data.message
    })
    .catch(err => {
      message.value = '请求失败'
      console.error(err)
    })
})
</script>