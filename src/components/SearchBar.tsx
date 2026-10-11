import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment, TextField } from '@mui/material'
import type { FormEvent } from 'react'
import { texts } from '../constants/texts'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault()

  return (
    <form role="search" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        size="small"
        type="search"
        label={texts.search}
        placeholder={texts.searchPlaceholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
    </form>
  )
}
