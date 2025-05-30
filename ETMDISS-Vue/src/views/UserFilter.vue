<template>
    <div>
        <h2>用户搜索过滤(模拟异步)</h2>
        <input v-model="keyword" placeholder="请输入搜索关键字"/>

        <p>关键词：{{ keyword }}</p>

        <p v-if="keyword === ''">请输入关键词</p>
        <p v-else-if="loading">
            <span class="spinner"></span> 正在搜索，请稍后...
        </p>
        <ul v-else>
            <li v-if="results.length === 0">暂无匹配用户</li>
            <li v-for="(user, index) in results" :key="index">
                {{ user.name }}({{ user.age }}岁)
            </li>
            
        </ul>
        <router-link to="/">返回首页</router-link>
    </div>
</template>

<script setup>
    import { ref, watch } from 'vue'

    const keyword = ref('')

    const fakeUsers = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 32 },
  { name: 'Charlie', age: 28 },
  { name: 'David', age: 40 }
]

    const loading = ref(false)
    const results = ref([])

    let timeoutId = null

    watch(keyword, (newVal) =>{
        if (!newVal) {
            results.value = []
            loading.value = false
            return
        }

        loading.value = true

        if (timeoutId) {
            clearTimeout(timeoutId)
        }

        timeoutId = setTimeout(() => {
                results.value = fakeUsers.filter( user =>
                    user.name.toLowerCase().includes(newVal.toLowerCase())
                )
                loading.value = false
        }, 1500)
    })
</script>

<style scoped>
.spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid #ccc;
  border-top-color: #42b983;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  vertical-align: middle;
  margin-right: 8px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>