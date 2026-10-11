import { useCallback, useEffect, useRef, useState } from 'react'

interface UseScrollToTopResult<T extends HTMLElement> {
  topRef: React.RefObject<T | null>
  visible: boolean
  scrollToTop: () => void
}

export function useScrollToTop<T extends HTMLElement>(threshold = 300): UseScrollToTopResult<T> {
  const topRef = useRef<T>(null)
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > threshold)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  const scrollToTop = useCallback(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return { topRef, visible, scrollToTop }
}
