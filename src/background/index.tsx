import { Feed, AllRss, AllRssType } from '~common/interface';
import { Signal } from '~common/store';

const pageRSS: Record<number, Feed[]> = {};
const RSSinPage: Record<number, Feed[]> = {};
let rssType: AllRssType;

function setBadge(tabId: number, num = 1) {
  chrome.browserAction.setBadgeText({
    text: num.toString(),
    tabId,
  });
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (sender.tab && sender.tab.active) {
    const feed = msg.feed as Feed[];
    const tabId = sender.tab.id;
    if (!(feed && tabId)) return;
    if (msg.text === Signal.addPageRSS) {
      chrome.tabs.get(tabId, (tab) => {
        feed[0].image = tab.favIconUrl || feed[0].image;
        pageRSS[tabId] = [...feed];
        rssType = msg.rssType;
        setBadge(tabId);
      });
    } else if (msg.text === Signal.RSSinPage) {
      RSSinPage[tabId] = [...feed];
      rssType = msg.rssType;
      setBadge(tabId, feed.length);
    }
  }
  if (msg.text === Signal.getAllRSS) {
    // console.log('receive-getAllRSS', msg, getAllRSS(msg.tabId, rssType as AllRssType));
    sendResponse(getAllRSS(msg.tabId, rssType as AllRssType));
  }
});

const getAllRSS = (tabId: number, rssType: AllRssType): AllRss => {
  return {
    rssType,
    pageRSS: pageRSS?.[tabId] || {},
    RSSinPage: RSSinPage?.[tabId] || {}
  };
};
