import { api } from '@/api'
import type { Article, NewArticle } from '@/interfaces/Article'
import { generateId, sleep } from '@/misc'
import { defineStore } from 'pinia'
import { computed, ref, type Ref } from 'vue'

export const useArticleStore = defineStore('articles', () => {
  const articles: Ref<Article[] | undefined> = ref(undefined)

  const add = async (newArticle: NewArticle) => {
    console.log('adding article', newArticle)
    await sleep(2000)
    console.log('wake up')
    if (newArticle.name.length < 3) {
      throw new Error("Le nom de l'article est trop court.")
    }
    const article = { ...newArticle, id: generateId() }
    articles.value?.push(article)
  }

  const remove = async (ids: string[]) => {
    await sleep(2000)
    if (ids.length === 2) {
      throw new Error('Impossible de supprimer deux elements.')
    }

    articles.value = articles.value?.filter((a) => !ids.includes(a.id))
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
