import { Stack } from '@mui/material'
import { useState } from 'react'
import ArticleList from '../components/ArticleList'
import CategorieCard from '../components/CategorieCard'
import DemoNotice from '../components/DemoNotice'
import { useNewsData } from '../hooks/useNewsData'
import type { ArticleCount, Category } from '../types/news'
import { texts } from '../constants/texts'

export default function CategoriesPage() {
  const [category, setCategory] = useState<Category>('sports')
  const [count, setCount] = useState<ArticleCount>(10)
  const { articles, loading, error, isDemo } = useNewsData({ category, max: count })

  return (
    <Stack spacing={2}>
      {isDemo && <DemoNotice />}
      <CategorieCard
        category={category}
        count={count}
        onCategoryChange={setCategory}
        onCountChange={setCount}
      />
      <ArticleList
        articles={articles}
        loading={loading}
        error={error}
        label={`${texts.categoryLabel}: ${texts.categories[category]}`}
      />
    </Stack>
  )
}
