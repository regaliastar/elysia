export interface Feed {
    url: string;
    title: string | undefined;
    image: string;
}

export interface AllRss {
  pageRSS: Feed[];
}
