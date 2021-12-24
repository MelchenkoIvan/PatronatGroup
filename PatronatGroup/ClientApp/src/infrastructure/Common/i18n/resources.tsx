import React, { FC } from "react";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
//style
import style from "./LanguagesButtons.module.css";
import { translationsUa } from "./translationsUa";
import { translationsEn } from "./translationsEn";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationsEn },
      ua: { translation: translationsUa },
    },
    lng: "ua",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

const LenguagesButtons: FC = () => {
  return (
    <>
      <button
        className={style.buttonEn}
        value="en"
        onClick={(e: any) => {
          i18n.changeLanguage(e.target.value);
        }}
      >
        EN
      </button>
      <button
        value="ua"
        className={style.buttonUk}
        onClick={(e: any) => {
          i18n.changeLanguage(e.target.value);
        }}
      >
        UA
      </button>
    </>
  );
};
export default LenguagesButtons;
