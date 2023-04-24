import type { PlasmoCSConfig } from "plasmo";
import { getPageRSS } from './common/rss';

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>", "https://*/*", "http://*/*"],
  all_frames: true
};

export {};
console.log("红红火火恍恍惚惚或");
console.log('getPageRSS', getPageRSS());
