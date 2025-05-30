import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MessageView from '../views/MessageView.vue'
import UserListView from '../views/UserListView.vue'
import UserFilter from '../views/UserFilter.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { path:'/message', name:'message', component: MessageView},
  { path:'/userlist', name:'userlist', component: UserListView},
  { path:'/userfilter', name:'userfilter', component: UserFilter}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
