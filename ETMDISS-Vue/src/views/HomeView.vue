<template>
  <div>
    <h1>欢迎访问 ETMDISS 系统</h1>
    <p>当前计数：{{ counter.count }}</p>
    <p>双倍：{{ counter.doubleCount }}</p>
    <button @click="add">增加</button>
    <p></p>
    <router-link to="/message">查看后端消息</router-link>
  </div>
</template>

<script setup>
import { useCounterStore } from '../store/counter'

const counter = useCounterStore()

const add = () => {
  counter.increment()
}
</script>


