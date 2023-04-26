import { getPageRSS } from "~common/util";
import { Signal } from "~common/store";
import { AllRssTypeEmun } from "~common/interface";
console.log('Elysia已加载 ╭(●｀∀´●)╯╰(●’◡’●)╮');

const feed = getPageRSS();
chrome.runtime.sendMessage(null, {
  text: Signal.RSSinPage,
  feed,
  rssType: AllRssTypeEmun.RSSinPage,
});
