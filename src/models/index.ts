export interface Root {
  tfa: Tfa; // Today's featured article
  mostread: Mostread; // Most read articles
  image: Image; // Image of the day
  news: News[]; // News stories
  onthisday: Onthisday[]; // On this day in history
}
export interface Tfa {
  type: string;
  title: string;
  displaytitle: string;
  namespace: Namespace;
  wikibase_item: string;
  titles: Titles;
  pageid: number;
  thumbnail?: Thumbnail;
  originalimage?: Originalimage;
  lang: string;
  dir: string;
  revision: string;
  tid: string;
  timestamp: string;
  description: string;
  description_source: string;
  content_urls: ContentUrls;
  extract: string;
  extract_html: string;
  normalizedtitle: string;
}

export interface Namespace {
  id: number;
  text: string;
}

export interface Titles {
  canonical: string;
  normalized: string;
  display: string;
}

export interface Thumbnail {
  source: string;
  width: number;
  height: number;
}

export interface Originalimage {
  source: string;
  width: number;
  height: number;
}

export interface ContentUrls {
  desktop: Desktop;
  mobile: Mobile;
}

export interface Desktop {
  page: string;
  revisions: string;
  edit: string;
  talk: string;
}

export interface Mobile {
  page: string;
  revisions: string;
  edit: string;
  talk: string;
}
export interface Mostread {
  date: string;
  articles: Article[];
}

export interface Article {
  views: number;
  rank: number;
  view_history: ViewHistory[];
  type: string;
  title: string;
  displaytitle: string;
  namespace: Namespace2;
  wikibase_item: string;
  titles: Titles2;
  pageid: number;
  thumbnail?: Thumbnail2;
  originalimage?: Originalimage2;
  lang: string;
  dir: string;
  revision: string;
  tid: string;
  timestamp: string;
  description?: string;
  description_source?: string;
  content_urls: ContentUrls2;
  extract: string;
  extract_html: string;
  normalizedtitle: string;
}

export interface ViewHistory {
  date: string;
  views: number;
}

export interface Namespace2 {
  id: number;
  text: string;
}

export interface Titles2 {
  canonical: string;
  normalized: string;
  display: string;
}

export interface Thumbnail2 {
  source: string;
  width: number;
  height: number;
}

export interface Originalimage2 {
  source: string;
  width: number;
  height: number;
}

export interface ContentUrls2 {
  desktop: Desktop2;
  mobile: Mobile2;
}

export interface Desktop2 {
  page: string;
  revisions: string;
  edit: string;
  talk: string;
}

export interface Mobile2 {
  page: string;
  revisions: string;
  edit: string;
  talk: string;
}
export interface Image {
  title: string;
  thumbnail: Thumbnail3;
  image: Image2;
  file_page: string;
  artist: Artist;
  credit: Credit;
  license: License;
  description: Description;
  wb_entity_id: string;
  structured: Structured;
}

export interface Thumbnail3 {
  source: string;
  width: number;
  height: number;
}

export interface Image2 {
  source: string;
  width: number;
  height: number;
}

export interface Artist {
  html: string;
  text: string;
}

export interface Credit {
  html: string;
  text: string;
}

export interface License {
  type: string;
  code: string;
  url: string;
}

export interface Description {
  html: string;
  text: string;
  lang: string;
}

export interface Structured {
  captions: Captions;
}

export interface Captions {}

export interface News {
  links: Link[];
  story: string;
}

export interface Link {
  type: string;
  title: string;
  displaytitle: string;
  namespace: Namespace3;
  wikibase_item: string;
  titles: Titles3;
  pageid: number;
  thumbnail?: Thumbnail4;
  originalimage?: Originalimage3;
  lang: string;
  dir: string;
  revision: string;
  tid: string;
  timestamp: string;
  description: string;
  description_source: string;
  content_urls: ContentUrls3;
  extract: string;
  extract_html: string;
  normalizedtitle: string;
  coordinates?: Coordinates;
}

export interface Namespace3 {
  id: number;
  text: string;
}

export interface Titles3 {
  canonical: string;
  normalized: string;
  display: string;
}

export interface Thumbnail4 {
  source: string;
  width: number;
  height: number;
}

export interface Originalimage3 {
  source: string;
  width: number;
  height: number;
}

export interface ContentUrls3 {
  desktop: Desktop3;
  mobile: Mobile3;
}

export interface Desktop3 {
  page: string;
  revisions: string;
  edit: string;
  talk: string;
}

export interface Mobile3 {
  page: string;
  revisions: string;
  edit: string;
  talk: string;
}

export interface Coordinates {
  lat: number;
  lon: number;
}
export interface Onthisday {
  text: string;
  pages: Page[];
  year: number;
}

export interface Page {
  type: string;
  title: string;
  displaytitle: string;
  namespace: Namespace4;
  wikibase_item: string;
  titles: Titles4;
  pageid: number;
  thumbnail?: Thumbnail5;
  originalimage?: Originalimage4;
  lang: string;
  dir: string;
  revision: string;
  tid: string;
  timestamp: string;
  description: string;
  description_source: string;
  coordinates?: Coordinates2;
  content_urls: ContentUrls4;
  extract: string;
  extract_html: string;
  normalizedtitle: string;
}

export interface Namespace4 {
  id: number;
  text: string;
}

export interface Titles4 {
  canonical: string;
  normalized: string;
  display: string;
}

export interface Thumbnail5 {
  source: string;
  width: number;
  height: number;
}

export interface Originalimage4 {
  source: string;
  width: number;
  height: number;
}

export interface Coordinates2 {
  lat: number;
  lon: number;
}

export interface ContentUrls4 {
  desktop: Desktop4;
  mobile: Mobile4;
}

export interface Desktop4 {
  page: string;
  revisions: string;
  edit: string;
  talk: string;
}

export interface Mobile4 {
  page: string;
  revisions: string;
  edit: string;
  talk: string;
}
