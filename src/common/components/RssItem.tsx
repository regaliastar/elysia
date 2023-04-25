import React from "react";
import { Feed } from '~common/interface';

export const RssItem = (props: Feed) => {
  return <li>
    <img src={props.image}></img>
    <a href={props.url}>
      <div>{props.title}</div>
      <div>{props.url}</div>
    </a>
  </li>;
};
