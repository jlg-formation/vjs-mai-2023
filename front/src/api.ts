import type { Article } from './interfaces/Article'
import { sleep } from './misc'

const url = '/api/articles'

class API {
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
