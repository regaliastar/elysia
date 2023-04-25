import React from 'react';
import ReactDOM from 'react-dom/client';
import style from './style.module.less';
import { Button } from '@arco-design/web-react';
import { IconQuestionCircle, IconSettings } from '@arco-design/web-react/icon';

const App = () => {
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
        <div style={{fontSize: 20}}>Elysia-Rss</div>
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
