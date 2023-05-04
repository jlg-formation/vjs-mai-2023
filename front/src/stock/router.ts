import type { RouteRecordRaw } from 'vue-router'
import ListView from './views/ListView.vue'
import AddView from './views/AddView.vue'

export const stockConfig = (name: string): RouteRecordRaw => ({
  path: `/${name}`,
  children: [
    {
      path: '',
      name: `${name}list`,
      component: ListView
    },
    {
      path: 'add',
      name: `${name}add`,
      component: AddView
    }
  ]
})
