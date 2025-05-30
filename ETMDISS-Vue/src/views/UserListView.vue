<template>
    <div>
        <h2>用户列表</h2>

        <input v-model="newName" placeholder="姓名" />
        <input v-model="newAge" placeholder="年龄" type="number"/>
        <button @click="addUser">添加用户</button>

        <label>
            <input type="checkbox" v-model="isVisible" />
            显示用户
        </label>

        <ul v-if="isVisible && users.length > 0">
            <UserItem 
                v-for="(user, index) in users"
                :key="index"
                :user="user"
                :index="index"
                @remove="removeUser"
            />
        </ul>

        <p v-if="isVisible && users.length === 0">暂无用户</p>
        <router-link to='/userfilter'>前往过滤</router-link>
        -
        <router-link to="/">返回首页</router-link>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import UserItem from './UserItem.vue'


    const isVisible = ref(true)

    const users = ref([
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 32 },
    ])
    const newName = ref('')
    const newAge = ref('')

    const addUser = () => {
        if (newName.value && newAge.value) {
            users.value.push({ name: newName.value, age: newAge.value})
            newName.value = ''
            newAge.value = ''
        }
    }

    const removeUser = (index) => {
        users.value.splice(index, 1)
    }
</script>