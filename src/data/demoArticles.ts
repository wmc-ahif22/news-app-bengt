import type { ArticleCount, Category, News } from '../types/news'

interface DemoArticle {
  category: Category
  source: string
  sourceUrl: string
  date: string
  title: string
  description: string
  content: string
}

// Fallback data so the app stays usable without a GNews API key.
const demoArticles: DemoArticle[] = [
  {
    category: 'sports',
    source: 'Sportnews Daily',
    sourceUrl: 'https://example.com/sport',
    date: '2026-10-10T18:30:00Z',
    title: 'Rapid Wien gewinnt das Derby in letzter Minute',
    description: 'Ein spätes Tor entscheidet das Wiener Derby vor ausverkauftem Haus.',
    content:
      'In der 93. Minute traf der eingewechselte Stürmer zum 2:1 und sorgte für Jubel im Allianz Stadion. Die Austria hatte zuvor lange auf den Ausgleich gedrängt ... [2140 chars]',
  },
  {
    category: 'sports',
    source: 'Alpine Ski Report',
    sourceUrl: 'https://example.com/ski',
    date: '2026-10-09T09:15:00Z',
    title: 'Weltcup-Auftakt in Sölden: ÖSV-Team selbstbewusst',
    description: 'Die österreichischen Skifahrer gehen mit hohen Erwartungen in die neue Saison.',
    content:
      'Nach einem intensiven Sommertraining in Chile fühlt sich das Team bereit für den Riesentorlauf am Rettenbachferner ... [1830 chars]',
  },
  {
    category: 'technology',
    source: 'Tech Insider',
    sourceUrl: 'https://example.com/tech',
    date: '2026-10-11T07:00:00Z',
    title: 'Neue Chip-Generation halbiert den Energieverbrauch',
    description: 'Ein Hersteller stellt Prozessoren vor, die deutlich effizienter arbeiten.',
    content:
      'Die neuen Chips setzen auf einen 1,4-Nanometer-Prozess und sollen Laptops bis zu 30 Stunden Akkulaufzeit ermöglichen ... [3120 chars]',
  },
  {
    category: 'technology',
    source: 'Web Weekly',
    sourceUrl: 'https://example.com/web',
    date: '2026-10-08T12:45:00Z',
    title: 'React 20 bringt schnellere Server-Komponenten',
    description: 'Das Framework-Update verspricht kürzere Ladezeiten für große Anwendungen.',
    content:
      'Mit dem neuen Release werden Server-Komponenten standardmäßig gestreamt. Entwicklerinnen und Entwickler profitieren von weniger Boilerplate ... [2560 chars]',
  },
  {
    category: 'business',
    source: 'Wirtschaftsblatt Online',
    sourceUrl: 'https://example.com/business',
    date: '2026-10-10T15:20:00Z',
    title: 'Inflation in Österreich sinkt auf 2,1 Prozent',
    description: 'Die Teuerung nähert sich dem Zielwert der Europäischen Zentralbank.',
    content:
      'Vor allem gesunkene Energiepreise haben laut Statistik Austria zum Rückgang beigetragen. Lebensmittel bleiben jedoch teuer ... [1990 chars]',
  },
  {
    category: 'nation',
    source: 'Inland Aktuell',
    sourceUrl: 'https://example.com/inland',
    date: '2026-10-11T06:10:00Z',
    title: 'Neue Bahnverbindung zwischen Graz und Klagenfurt eröffnet',
    description: 'Die Koralmbahn verkürzt die Fahrzeit auf unter eine Stunde.',
    content:
      'Nach jahrzehntelanger Bauzeit fahren die ersten Züge durch den Koralmtunnel. Pendlerinnen und Pendler sparen täglich viel Zeit ... [2780 chars]',
  },
  {
    category: 'science',
    source: 'Science Today',
    sourceUrl: 'https://example.com/science',
    date: '2026-10-07T20:00:00Z',
    title: 'Forschende entdecken Wasser auf einem Exoplaneten',
    description: 'Das James-Webb-Teleskop liefert neue Hinweise auf eine lebensfreundliche Atmosphäre.',
    content:
      'Der Planet umkreist einen roten Zwergstern in rund 120 Lichtjahren Entfernung. Die Spektraldaten zeigen deutliche Wasserdampf-Signaturen ... [3410 chars]',
  },
  {
    category: 'health',
    source: 'Gesundheit Heute',
    sourceUrl: 'https://example.com/health',
    date: '2026-10-06T11:30:00Z',
    title: 'Studie: Zehn Minuten Bewegung täglich senken das Herzrisiko',
    description: 'Schon kurze Spaziergänge wirken sich messbar auf die Gesundheit aus.',
    content:
      'Die Langzeitstudie begleitete über 50.000 Teilnehmende. Wer sich täglich bewegte, hatte ein um 18 Prozent geringeres Risiko ... [1720 chars]',
  },
  {
    category: 'world',
    source: 'World Report',
    sourceUrl: 'https://example.com/world',
    date: '2026-10-10T22:05:00Z',
    title: 'Klimagipfel einigt sich auf neuen Fonds',
    description: 'Die Staaten sagen zusätzliche Milliarden für Anpassungsmaßnahmen zu.',
    content:
      'Nach zähen Verhandlungen haben sich die Delegationen auf einen gemeinsamen Fonds geeinigt, der besonders betroffene Länder unterstützen soll ... [4050 chars]',
  },
  {
    category: 'entertainment',
    source: 'Kultur & Film',
    sourceUrl: 'https://example.com/culture',
    date: '2026-10-09T17:40:00Z',
    title: 'Viennale eröffnet mit österreichischem Spielfilm',
    description: 'Das Filmfestival setzt heuer einen Schwerpunkt auf junge Regisseurinnen.',
    content:
      'Rund 300 Filme werden in den kommenden zwei Wochen in Wiener Kinos gezeigt. Der Eröffnungsfilm erhielt minutenlangen Applaus ... [2210 chars]',
  },
]

export function getDemoArticles(category: Category, max: ArticleCount): News[] {
  const matching =
    category === 'general'
      ? demoArticles
      : demoArticles.filter((article) => article.category === category)

  return matching.slice(0, max).map((article, index) => ({
    id: `${article.category}-${index}`,
    title: article.title,
    description: article.description,
    content: article.content,
    author: article.source,
    date: article.date,
    url: article.sourceUrl,
    image: `https://picsum.photos/seed/${article.category}${index}/800/400`,
    source: { name: article.source, url: article.sourceUrl },
  }))
}
