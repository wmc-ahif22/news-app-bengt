import { Card, CardContent, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import { ARTICLE_COUNTS, CATEGORIES, type ArticleCount, type Category } from '../types/news'
import { texts } from '../constants/texts'

interface CategorieCardProps {
  category: Category
  count: ArticleCount
  onCategoryChange: (category: Category) => void
  onCountChange: (count: ArticleCount) => void
}

export default function CategorieCard({
  category,
  count,
  onCategoryChange,
  onCountChange,
}: CategorieCardProps) {

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <FormControl fullWidth size="small">
            <InputLabel id="category-label">{texts.categoryLabel}</InputLabel>
            <Select
              labelId="category-label"
              label={texts.categoryLabel}
              value={category}
              onChange={(event) => onCategoryChange(event.target.value as Category)}
            >
              {CATEGORIES.map((value) => (
                <MenuItem key={value} value={value}>
                  {texts.categories[value]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth size="small">
            <InputLabel id="count-label">{texts.countLabel}</InputLabel>
            <Select
              labelId="count-label"
              label={texts.countLabel}
              value={count}
              onChange={(event) => onCountChange(Number(event.target.value) as ArticleCount)}
            >
              {ARTICLE_COUNTS.map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </CardContent>
    </Card>
  )
}
