import type { Category } from '../types/news'

export const texts = {
  appTitle: 'news app',
  navNews: 'News',
  navCategories: 'Kategorien',
  search: 'Suche',
  searchPlaceholder: 'Titel oder Inhalt durchsuchen',
  all: 'Alle',
  sources: 'Quellen',
  articleCount: 'Anzahl Artikel',
  categoryLabel: 'Kategorie',
  countLabel: 'Anzahl',
  readMore: 'Zum Artikel',
  noArticles: 'Keine Artikel gefunden.',
  loading: 'Artikel werden geladen …',
  loadError: 'Die Artikel konnten nicht geladen werden',
  demoNotice:
    'Kein GNews API Key gefunden (VITE_GNEWS_API_KEY). Es werden Demo-Artikel angezeigt.',
  scrollToTop: 'Nach oben',
  categories: {
    general: 'Allgemein',
    world: 'Welt',
    nation: 'Nation',
    business: 'Wirtschaft',
    technology: 'Technologie',
    entertainment: 'Unterhaltung',
    sports: 'Sport',
    science: 'Wissenschaft',
    health: 'Gesundheit',
  } satisfies Record<Category, string>,
} as const

/** Language requested from the GNews API. */
export const NEWS_LANGUAGE = 'de'
