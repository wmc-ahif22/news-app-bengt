import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import type { News } from '../types/news'
import { texts } from '../constants/texts'

interface NewsCardProps {
  article: News
  label?: string
}

export default function NewsCard({ article, label }: NewsCardProps) {
  const date = new Date(article.date).toLocaleDateString('de-AT', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return (
    <Card component="article" variant="outlined" sx={{ textAlign: 'center' }}>
      <CardContent>
        {label && (
          <Typography variant="overline" color="text.secondary">
            {label}
          </Typography>
        )}
        <Typography variant="h5" component="h2" color="primary" gutterBottom>
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {article.description}
        </Typography>
        <Typography variant="caption" color="text.secondary" component="p" sx={{ mb: 1.5 }}>
          {article.author} · {date}
        </Typography>
        <Typography variant="body1">{article.content}</Typography>
      </CardContent>
      {article.image && (
        <CardMedia component="img" image={article.image} alt={article.title} loading="lazy" sx={{ maxHeight: 320 }} />
      )}
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          endIcon={<OpenInNewIcon />}
        >
          {texts.readMore}
        </Button>
      </CardActions>
    </Card>
  )
}
