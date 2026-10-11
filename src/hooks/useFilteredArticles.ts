import { useMemo } from 'react'
import type { News } from '../types/news'

export function useFilteredArticles(
  articles: News[],
  source: string | null,
  searchTerm: string,
): News[] {
  return useMemo(() => {
    const term = searchTerm.trim().toLowerCase()
    return articles.filter((article) => {
      if (source && article.source.name !== source) return false
      if (!term) return true
      return [article.title, article.description, article.content].some((text) =>
        text.toLowerCase().includes(term),
      )
    })
  }, [articles, source, searchTerm])
}
