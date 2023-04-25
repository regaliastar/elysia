import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import style from './style.module.less';
import { Button } from '@arco-design/web-react';
import { IconQuestionCircle, IconSettings } from '@arco-design/web-react/icon';
import { Feed, AllRss } from '~common/interface';
import { Signal } from '~common/store';
import { RssItem } from '~common/components';

const App = () => {
  const [rssList, setRssList] = useState<Feed[]>([]);
  chrome.tabs.query({
    active: true,
    currentWindow: true,
  }, (tabs) => {
    const tabId = tabs[0].id;
    const title = tabs[0].title || '';
    const favicon = tabs[0].favIconUrl || '/favicon.ico';
    chrome.runtime.sendMessage(null, {
      text: Signal.getAllRSS,
      tabId: tabId,
    }, (allRss: AllRss) => {
      console.log('getAllRSS', allRss);
      setRssList(allRss.pageRSS);
    });
  });
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
        <div style={{fontSize: 20}}>{rssList.length ? '当前页面上的RSS' : 'orz当前页面没有检测到RSS'}</div>
        <div>
          <IconQuestionCircle className={style.icon} style={{
            marginRight: 10,
            width: 20,
            height: 20,
          }} />
          <IconSettings className={style.icon} style={{
            width: 20,
            height: 20,
          }}/>
        </div>
      </div>
      {rssList.map((rss, i) => <RssItem key={i} {...rss}></RssItem>)}
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
