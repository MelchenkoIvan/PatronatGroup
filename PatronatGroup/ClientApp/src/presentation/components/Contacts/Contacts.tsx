import { t } from "i18next";
import React, { FC } from "react";
import { useHistory } from "react-router";
import Button from "../../../infrastructure/Common/components/Button";
import Social from "../../../infrastructure/Common/components/Social";
import { labels } from "../../../infrastructure/Common/i18n/translationsServices";
import Blok from "../Skeletons/Blok";
//Style
import style from "./Contacts.module.css";
//Icons
import qrCode from "../../../assets/qrCode.png";
import TranslateHoc from "../../../infrastructure/Common/hoc/TranslateHoc";
import { TranslateInterface } from "../../../infrastructure/Common/i18n/resources";
const Contacts:FC<TranslateInterface> = ({translate}) => {
  return (
    <div>
      <Blok  title={translate(labels.contacts)} Content={Content} />
    </div>
  );
};
export default TranslateHoc(Contacts);

let Content:FC<TranslateInterface> = ({translate}) => {
  return (
    <div className={style.container}>
      <div className={style.description}>
        {translate(labels.location)}
      </div>
      <div className={style.content}>
        <div className={style.qrCode}>
          <div className={style.qrCodeTitle}>{translate(labels.qrCode)}</div>
          <div className={style.qrCodeDescription}> {translate(labels.qrCodeDescription)}</div>
          <img className={style.qrCodeImg} src={qrCode} alt="QR"/>
        </div>
        <iframe className={style.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.1886888865953!2d37.59038053872046!3d48.74425229446413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40df97199d6138cd%3A0x1131e615dad62f5c!2z0YPQuy4g0JTRgNGD0LbQsdGLLCA5LCDQmtGA0LDQvNCw0YLQvtGA0YHQuiwg0JTQvtC90LXRhtC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQutGA0LDQuNC90LAsIDg0MzAw!5e0!3m2!1sru!2spl!4v1640266918660!5m2!1sru!2spl"
          loading="lazy"
        ></iframe>
      </div>
      <div className={style.buttonAndSocila}>
        <Social />
      </div>
    </div>
  );
};
Content = TranslateHoc(Content);