import { Alert } from '@mui/material'
import { texts } from '../constants/texts'

export default function DemoNotice() {
  return <Alert severity="warning">{texts.demoNotice}</Alert>
}
