export const CATEGORIES = [
  'general',
  'world',
  'nation',
  'business',
  'technology',
  'entertainment',
  'sports',
  'science',
  'health',
] as const

export type Category = (typeof CATEGORIES)[number]

export const ARTICLE_COUNTS = [1, 2, 5, 10] as const

export type ArticleCount = (typeof ARTICLE_COUNTS)[number]

export interface NewsSource {
  name: string
  url: string
}

export interface News {
  id: string
  title: string
  description: string
  content: string
  author: string
  date: string
  url: string
  image: string | null
  source: NewsSource
}

/** Raw article as returned by the GNews API (v4). */
export interface GNewsArticle {
  id?: string
  title: string
  description: string
  content: string
  url: string
  image: string | null
  publishedAt: string
  lang?: string
  source: {
    id?: string
    name: string
    url: string
    country?: string
  }
}

export interface GNewsResponse {
  totalArticles: number
  articles: GNewsArticle[]
}

export interface NewsQuery {
  category: Category
  max: ArticleCount
}
