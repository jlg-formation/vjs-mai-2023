import type { RouteRecordRaw } from 'vue-router'
import ListView from './views/ListView.vue'
import AddView from './views/AddView.vue'

export const stockConfig: RouteRecordRaw = {
  path: '/stock',
  children: [
    {
      path: '',
      name: 'list',
      component: ListView
    },
    {
      path: 'add',
      name: 'add',
      component: AddView
    }
  ]
}
