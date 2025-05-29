<template>
    <div>
        <h2>用户列表</h2>

        <label>
            <input type="checkbox" v-model="isVisible" />
            显示用户
        </label>

        <ul v-if="isVisible">
            <li v-for="(user, index) in users" :key="index">
                {{ index + 1 }}. {{ user.name }}({{ user.age }}岁)
            </li>
        </ul>

        <p v-if="isVisible && users.length === 0">暂无用户</p>
        <router-link to="/">返回首页</router-link>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const isVisible = ref(true)

    const users = ref([
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 32 },
        { name: 'Charlie', age: 28 }
    ])
</script>