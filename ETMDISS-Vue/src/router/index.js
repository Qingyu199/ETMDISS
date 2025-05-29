import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MessageView from '../views/MessageView.vue'
import UserListView from '../views/UserListView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { path:'/message', name:'message', component: MessageView},
  { path:'/userlist', name:'userlist', component: UserListView}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
