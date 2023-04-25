import { Feed, AllRss } from '~common/interface';
import { Signal } from '~common/store';

const pageRSS: Record<number, Feed[]> = {};

function setBadge(tabId: number) {
  chrome.browserAction.setBadgeText({
    text: '1',
    tabId,
  });
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log('bgonMessage', msg.text, sender.tab && sender.tab.active);
  if (sender.tab && sender.tab.active) {
    if (msg.text === Signal.addPageRSS) {
      const [feed, tabId] = [msg.feed, sender.tab.id];
      if (feed as Feed && tabId) {
        chrome.tabs.get(tabId, (tab) => {
          feed.image = tab.favIconUrl || feed.image;
          pageRSS[tabId] = [feed];
          console.log('pageRSS', pageRSS);
          setBadge(tabId);
        });
      }
    }
  }
  if (msg.text === Signal.getAllRSS) {
    console.log('receive-getAllRSS', pageRSS, getAllRSS(msg.tabId));
    sendResponse(getAllRSS(msg.tabId));
  }
});

const getAllRSS = (tabId: number): AllRss => {
  return {
    pageRSS: pageRSS?.[tabId] || {}
  };
};
