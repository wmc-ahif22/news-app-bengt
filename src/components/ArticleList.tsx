import { Alert, Box, CircularProgress, Stack, Typography } from '@mui/material'
import type { News } from '../types/news'
import NewsCard from './NewsCard'
import { texts } from '../constants/texts'

interface ArticleListProps {
  articles: News[]
  loading: boolean
  error: string | null
  label?: string
}

export default function ArticleList({ articles, loading, error, label }: ArticleListProps) {

  if (loading) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, py: 6 }}>
        <CircularProgress size={28} />
        <Typography color="text.secondary">{texts.loading}</Typography>
      </Box>
    )
  }

  if (error) {
    return <Alert severity="error">{`${texts.loadError}: ${error}`}</Alert>
  }

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" sx={{ textAlign: 'right' }}>
        {texts.articleCount}: {articles.length}
      </Typography>
      {articles.length === 0 ? (
        <Alert severity="info">{texts.noArticles}</Alert>
      ) : (
        articles.map((article) => <NewsCard key={article.id} article={article} label={label} />)
      )}
    </Stack>
  )
}
