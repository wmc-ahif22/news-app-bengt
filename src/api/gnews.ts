import axios from 'axios'
import { NEWS_LANGUAGE } from '../constants/texts'
import { getDemoArticles } from '../data/demoArticles'
import type { GNewsArticle, GNewsResponse, News, NewsQuery } from '../types/news'

const gnewsClient = axios.create({
  baseURL: 'https://gnews.io/api/v4',
  timeout: 10000,
})

export const GNEWS_API_KEY: string | undefined = import.meta.env.VITE_GNEWS_API_KEY

function toNews(article: GNewsArticle): News {
  return {
    id: article.id ?? article.url,
    title: article.title,
    description: article.description,
    content: article.content,
    author: article.source.name,
    date: article.publishedAt,
    url: article.url,
    image: article.image,
    source: { name: article.source.name, url: article.source.url },
  }
}

// Cache requests per query: the free GNews plan is heavily rate-limited.
const requestCache = new Map<string, Promise<News[]>>()

async function requestTopHeadlines({ category, max }: NewsQuery): Promise<News[]> {
  if (!GNEWS_API_KEY) return getDemoArticles(category, max)

  const response = await gnewsClient.get<GNewsResponse>('/top-headlines', {
    params: { category, max, lang: NEWS_LANGUAGE, apikey: GNEWS_API_KEY },
  })
  return response.data.articles.map(toNews)
}

export function fetchTopHeadlines(query: NewsQuery): Promise<News[]> {
  const key = `${query.category}|${query.max}`
  const cached = requestCache.get(key)
  if (cached) return cached

  const request = requestTopHeadlines(query)
  request.catch(() => requestCache.delete(key))
  requestCache.set(key, request)
  return request
}
