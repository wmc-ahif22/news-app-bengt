import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Fab, Zoom } from '@mui/material'
import { texts } from '../constants/texts'

interface ScrollToTopButtonProps {
  visible: boolean
  onClick: () => void
}

export default function ScrollToTopButton({ visible, onClick }: ScrollToTopButtonProps) {

  return (
    <Zoom in={visible}>
      <Fab
        color="primary"
        size="medium"
        aria-label={texts.scrollToTop}
        title={texts.scrollToTop}
        onClick={onClick}
        sx={{ position: 'fixed', bottom: 24, right: 24 }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  )
}
