import { Chip, Stack, Typography } from '@mui/material'
import { texts } from '../constants/texts'

interface FilterBarProps {
  sources: string[]
  selectedSource: string | null
  onSelectSource: (source: string | null) => void
}

export default function FilterBar({ sources, selectedSource, onSelectSource }: FilterBarProps) {

  return (
    <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', alignItems: 'center' }}>
      <Typography variant="subtitle2" component="span" sx={{ mr: 0.5 }}>
        {texts.sources}:
      </Typography>
      <Chip
        label={texts.all}
        color={selectedSource === null ? 'primary' : 'default'}
        onClick={() => onSelectSource(null)}
      />
      {sources.map((source) => (
        <Chip
          key={source}
          label={source}
          color={selectedSource === source ? 'primary' : 'default'}
          onClick={() => onSelectSource(source)}
        />
      ))}
    </Stack>
  )
}
