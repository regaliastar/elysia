import { Feed } from '~common/interface';

declare global {
  interface Window {
    pageRSS?: Feed[];
  }
}

export {};
