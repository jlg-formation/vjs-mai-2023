import { api } from '@/api'
import type { Article, NewArticle } from '@/interfaces/Article'
import { defineStore } from 'pinia'
import { computed, ref, type Ref } from 'vue'

export const useArticleStore = defineStore('articles', () => {
  const articles: Ref<Article[] | undefined> = ref(undefined)

  const add = async (newArticle: NewArticle) => {
    console.log('adding article', newArticle)
    await api.add(newArticle)
    articles.value = await api.retrieveAll()
    console.log('wake up')
  }

  const remove = async (ids: string[]) => {
    if (ids.length === 2) {
      throw new Error("interdit d'effacer 2 trucs")
    }
    await api.remove(ids)
    articles.value = await api.retrieveAll()
  }

  const refresh = async () => {
    articles.value = await api.retrieveAll()
  }

  const size = computed(() => {
    if (articles.value === undefined) {
      return '?'
    }
    return articles.value.length + ''
  })

  return {
    articles,
    add,
    remove,
    refresh,
    size
  }
})
