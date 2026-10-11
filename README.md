# News App

News Reader mit React, TypeScript, Vite, Material UI und Axios. Die Artikel kommen von der [GNews API](https://gnews.io).

## Setup

```bash
pnpm install
cp .env.example .env.local   # GNews API Key eintragen
pnpm dev
```

Ohne `VITE_GNEWS_API_KEY` zeigt die App Demo-Artikel an.

## Features

- **News** (`/`): Top-Headlines mit Quellen-Filter (Chips) und Suchfeld für Titel und Inhalt
- **Kategorien** (`/categories`): `CategorieCard` mit zwei Dropdowns (Kategorie, Anzahl 1/2/5/10); bei jeder Änderung werden die Daten neu geladen
- **Scroll to Top**: Button erscheint ab 300 px Scrolltiefe und scrollt per `useRef` smooth nach oben
- Requests werden pro Abfrage gecacht, damit das Limit des Free-Plans hält

## Struktur

```
src/
  api/         Axios-Client für GNews
  components/  Header, NewsCard, ArticleList, FilterBar, SearchBar, CategorieCard, ScrollToTopButton
  constants/   UI-Texte
  data/        Demo-Artikel (Fallback ohne API Key)
  hooks/       useNewsData, useFilteredArticles, useScrollToTop
  pages/       NewsPage, CategoriesPage
  types/       News-Interface und API-Typen
```
