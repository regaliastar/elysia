import React from "react";
import { Feed } from '~common/interface';
import { Button } from "@arco-design/web-react";
import style from './style.module.less';

export const RssItem = (props: Feed) => {
  return <div style={{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: "space-between",
    padding: 4,
  }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
    }}>
      <img className={style.img} src={props.image}></img>
      <a onClick={() => {
          chrome.tabs.create({
            url: props.url
          });
        }}>
        <div className={style.title}>{props.title}</div>
        <div className={style.url}>{props.url}</div>
      </a>
    </div>
    <Button style={{
      flexShrink: 0
    }}>导入</Button>
  </div>;
};
