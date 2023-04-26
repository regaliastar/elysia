import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import style from './style.module.less';
import { Button } from '@arco-design/web-react';
import { IconQuestionCircle, IconSettings } from '@arco-design/web-react/icon';
import { Feed, AllRss, AllRssType } from '~common/interface';
import { Signal } from '~common/store';
import { RssItem } from '~common/components';
import '@arco-design/theme-line/index.less';

const App = () => {
  const [rssList, setRssList] = useState<Feed[]>([]);
  const [title, setTitle] = useState('');
  const getTitleText = (length: number, rssType: AllRssType) => {
    if (length === undefined || length === 0 || rssType === undefined) return ' (´・н・‘) 当前页面没有检测到RSS';
    return rssType === 'RSSinPage' ? '当前页面包含的RSS' : 'RSS页面解析结果';
  };

  useEffect(() => {
    chrome.tabs.query({
      active: true,
      currentWindow: true,
    }, (tabs) => {
      const tabId = tabs[0].id;
      chrome.runtime.sendMessage(null, {
        text: Signal.getAllRSS,
        tabId: tabId,
      }, (allRss: AllRss) => {
        const rssType = allRss.rssType;
        const list = rssType === 'RSSinPage' ? allRss?.RSSinPage : allRss.pageRSS;
        setRssList(list);
        setTitle(getTitleText(list.length, rssType));
      });
    });
  }, []);

  return (
    <div className={style.container} style={{
      display: 'flex',
      flexDirection: "column",
    }}>
      <div className={style.title} style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
      }}>
        <div style={{
          fontSize: 18,
          color: '#4E5969',
        }}>{title}</div>
        <div>
          <IconQuestionCircle className={style.icon} />
          <IconSettings className={style.icon}/>
        </div>
      </div>
      {rssList.length ? rssList.map((rss, i) => <RssItem key={i} {...rss}></RssItem>) : <></>}
      <Button onClick={() => {
          chrome.tabs.create({
            url: "./tabs.html"
          });
        }}>KiraKira</Button>
    </div>
  );
};
const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
