import { getPageRSS, isRssPage } from "~common/util";
import { Signal } from "~common/store";
import { AllRssType } from "~common/interface";
console.log('Elysia已加载 ╭(●｀∀´●)╯╰(●’◡’●)╮');

const feed = getPageRSS();
const rssType: AllRssType = isRssPage() ? 'pageRSS' : 'RSSinPage';
chrome.runtime.sendMessage(null, {
  text: Signal.RSSinPage,
  feed,
  rssType,
});
