export interface Feed {
    url: string;
    title?: string;
    image: string;
}

export enum AllRssTypeEmun {
  /** 当前页面是一个RSS */
  pageRSS = 'pageRSS',
  /** 当前页面包含多个RSS */
  RSSinPage = 'RSSinPage',
}

export type AllRssType = keyof typeof AllRssTypeEmun;

export interface AllRss extends Record<AllRssType, Feed[]> {
  rssType: AllRssType,
}