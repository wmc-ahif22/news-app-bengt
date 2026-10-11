import { Box, Container } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import ScrollToTopButton from './components/ScrollToTopButton'
import { useScrollToTop } from './hooks/useScrollToTop'
import CategoriesPage from './pages/CategoriesPage'
import NewsPage from './pages/NewsPage'

export default function App() {
  const { topRef, visible, scrollToTop } = useScrollToTop<HTMLDivElement>(300)

  return (
    <>
      <Box ref={topRef} />
      <Header />
      <Container component="main" maxWidth="sm" sx={{ py: 3 }}>
        <Routes>
          <Route path="/" element={<NewsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Container>
      <ScrollToTopButton visible={visible} onClick={scrollToTop} />
    </>
  )
}
