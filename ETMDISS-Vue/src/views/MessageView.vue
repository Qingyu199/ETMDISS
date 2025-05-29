<template>
    <div>
        <h1>后端消息：</h1>
        <p>{{ message }}</p>
        <p>{{ x }} {{ y }}</p>
        <input v-model="name" placeholder="请输入你的名字" />
        <button @click="greet">打招呼</button>
        <p>{{ greeting }}</p>
        <router-link to='/userlist'>前往列表</router-link>
        -
        <router-link to="/">返回首页</router-link>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import axios from 'axios';


const message = ref('加载中...');

onMounted(() => {
  axios.get('http://localhost:8080/api/message')
    .then(res => {
      message.value = res.data.message
    })
    .catch(err => {
      message.value = '请求失败'
      console.error(err)
    })
});

// --- 鼠标位置追踪逻辑 ---
const x = ref(0); // 鼠标X坐标状态
const y = ref(0); // 鼠标Y坐标状态

const updateMouse = (e) => { // 鼠标更新方法
  x.value = e.pageX;
  y.value = e.pageY;
};

onMounted(() => { // 鼠标追踪的挂载逻辑
  window.addEventListener('mousemove', updateMouse);
});

onBeforeUnmount(() => { // 鼠标追踪的清理逻辑
  window.removeEventListener('mousemove', updateMouse);
});

const title = ref('欢迎使用 Vue 3 Composition API')
const name = ref('')
const greeting = ref('')

// 事件处理方法
const greet = () => {
  greeting.value = `你好，${name.value}！`
}
</script>