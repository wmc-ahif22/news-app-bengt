import { Stack } from '@mui/material'
import { useMemo, useState } from 'react'
import ArticleList from '../components/ArticleList'
import DemoNotice from '../components/DemoNotice'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import { useFilteredArticles } from '../hooks/useFilteredArticles'
import { useNewsData } from '../hooks/useNewsData'

export default function NewsPage() {
  const { articles, loading, error, isDemo } = useNewsData({ category: 'general', max: 10 })
  const [selectedSource, setSelectedSource] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState<string>('')

  const sources = useMemo(
    () => [...new Set(articles.map((article) => article.source.name))].sort(),
    [articles],
  )
  const activeSource = selectedSource && sources.includes(selectedSource) ? selectedSource : null
  const filteredArticles = useFilteredArticles(articles, activeSource, searchTerm)

  return (
    <Stack spacing={2}>
      {isDemo && <DemoNotice />}
      <FilterBar sources={sources} selectedSource={activeSource} onSelectSource={setSelectedSource} />
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <ArticleList articles={filteredArticles} loading={loading} error={error} />
    </Stack>
  )
}
