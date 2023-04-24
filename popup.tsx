import React from "react";
import Button from '@mui/material/Button';
import { HelpOutline, Settings } from "@mui/icons-material";
import styleText from "data-text:./style.module.pcss";
import * as style from "./style.module.pcss";

export const getStyle = () => {
  const style = document.createElement("style");
  style.textContent = styleText;
  return style;
};

function IndexPopup() {
  return (
    <div className={style.container} style={{
      display: "flex",
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
          <HelpOutline className={style.icon} style={{marginRight: 10}} />
          <Settings className={style.icon} />
        </div>
      </div>
      <Button onClick={() => {
          chrome.tabs.create({
            url: "./tabs/App.html"
          });
        }} variant="contained">KiraKira</Button>
    </div>
  );
}

export default IndexPopup;
