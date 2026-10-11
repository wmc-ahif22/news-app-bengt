import axios from 'axios'
import { useEffect, useState } from 'react'
import { fetchTopHeadlines, GNEWS_API_KEY } from '../api/gnews'
import type { ArticleCount, Category, News } from '../types/news'

interface UseNewsDataOptions {
  category: Category
  max: ArticleCount
}

interface UseNewsDataResult {
  articles: News[]
  loading: boolean
  error: string | null
  isDemo: boolean
}

interface NewsState {
  queryKey: string
  articles: News[]
  error: string | null
}

export function useNewsData({ category, max }: UseNewsDataOptions): UseNewsDataResult {
  const queryKey = `${category}|${max}`
  const [state, setState] = useState<NewsState>({ queryKey: '', articles: [], error: null })

  useEffect(() => {
    let ignore = false

    fetchTopHeadlines({ category, max })
      .then((articles) => {
        if (!ignore) setState({ queryKey, articles, error: null })
      })
      .catch((err: unknown) => {
        if (ignore) return
        const message = axios.isAxiosError<{ errors?: string[] }>(err)
          ? (err.response?.data?.errors?.join(', ') ?? err.message)
          : String(err)
        setState({ queryKey, articles: [], error: message })
      })

    return () => {
      ignore = true
    }
  }, [category, max, queryKey])

  // The data is stale (still loading) until a response for the current query has arrived.
  const loading = state.queryKey !== queryKey

  return {
    articles: loading ? [] : state.articles,
    loading,
    error: loading ? null : state.error,
    isDemo: !GNEWS_API_KEY,
  }
}
