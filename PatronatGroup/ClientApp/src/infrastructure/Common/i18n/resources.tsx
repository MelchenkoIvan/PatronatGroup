import React, { FC } from "react";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
//style
import style from "./LanguagesButtons.module.css";
import { translationsUa } from "./translationsUa";
import { translationsEn } from "./translationsEn";
import { setCookie } from "../../Services/cookieService";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationsEn },
      ua: { translation: translationsUa },
    },
    lng: "ua",
    fallbackLng: "en",
    interpolation: { escapeValue: true },
  });

const LenguagesButtons: FC = () => {
  return (
    <>
      <button
        className={style.buttonEn}
        value="en"
        onClick={(e: any) => {
          setCookie("lang",e.target.value,30);
          i18n.changeLanguage(e.target.value);
          window.location.reload();
        }}
      >
        EN
      </button>
      <button
        value="ua"
        className={style.buttonUk}
        onClick={(e: any) => {
          setCookie("lang",e.target.value,30);
          i18n.changeLanguage(e.target.value);
          window.location.reload();
        }}
      >
        UA
      </button>
    </>
  );
};
export default LenguagesButtons;

export interface TranslateInterface{
  translate: (label: string) => string;
}
