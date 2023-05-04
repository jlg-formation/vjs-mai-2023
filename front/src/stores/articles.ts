import type { Article } from '@/interfaces/Article'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useArticleStore = defineStore('articles', () => {
  const articles: Ref<Article[]> = ref([
    { id: 'a1', name: 'Tournevis', price: 2.99, qty: 123 },
    { id: 'a2', name: 'Pelle', price: 3, qty: 4 },
    { id: 'a3', name: 'Marteau', price: 1, qty: 62 }
  ])

  return {
    articles
  }
})
