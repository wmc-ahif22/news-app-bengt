import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { texts } from '../constants/texts'

const navButtonSx = {
  color: 'inherit',
  borderRadius: 0,
  borderBottom: '2px solid transparent',
  '&.active': { borderBottomColor: 'common.white' },
} as const

export default function Header() {

  return (
    <AppBar position="sticky">
      <Container maxWidth="md">
        <Toolbar disableGutters sx={{ gap: 1 }}>
          <Typography variant="h6" component="span" sx={{ fontWeight: 700, flexGrow: 1 }}>
            {texts.appTitle}
          </Typography>
          <Box component="nav" sx={{ display: 'flex', gap: 1 }}>
            <Button component={NavLink} to="/" end sx={navButtonSx}>
              {texts.navNews}
            </Button>
            <Button component={NavLink} to="/categories" sx={navButtonSx}>
              {texts.navCategories}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
