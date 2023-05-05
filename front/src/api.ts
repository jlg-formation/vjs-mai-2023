import type { Article, NewArticle } from './interfaces/Article'
import { sleep } from './misc'

const url = '/api/articles'

class API {
  async add(newArticle: NewArticle): Promise<void> {
    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newArticle)
      })
    } catch (err) {
      throw new Error('Erreur Technique')
    }
  }

  async retrieveAll(): Promise<Article[]> {
    try {
      await sleep(2000)
      const response = await fetch(url)
      const articles: Article[] = await response.json()
      return articles
    } catch (err) {
      throw new Error('Erreur Technique')
    }
  }
}

export const api = new API()
