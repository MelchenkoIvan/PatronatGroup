import { t } from "i18next";
import React, { FC } from "react";
import { useHistory } from "react-router";
import { labels } from "../i18n/translationsServices";
import Button from "./Button";
//style
import style from "./CommonComponentsStyle.module.css";

const ToMainButton: FC = () => {
  const history = useHistory();
  return (
    <div className={style.toMainButton}>
      <Button
        style={{
          margin: "0 auto 10px auto",
          width: "25%",
        }}
        content={t(labels.toMain)}
        onClick={() => {
          history.push({ pathname: `/` });
        }}
      />
    </div>
  );
};
export default ToMainButton;
