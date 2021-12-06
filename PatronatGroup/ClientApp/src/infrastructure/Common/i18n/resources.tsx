import React, { FC } from "react";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translationsEn } from "./translationsEn";
import { translationsUk } from "./translationsUk";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationsEn },
      uk: { translation: translationsUk },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

const LenguagesButtons: FC = () => {
  return (
    <>
      <button
        value="en"
        onClick={(e: any) => {
          i18n.changeLanguage(e.target.value);
        }}
      >
        EN
      </button>
      <button
        value="uk"
        onClick={(e: any) => {
          i18n.changeLanguage(e.target.value);
        }}
      >
        UK
      </button>
    </>
  );
};
export default LenguagesButtons;
