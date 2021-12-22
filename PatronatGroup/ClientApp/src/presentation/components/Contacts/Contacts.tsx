import { t } from "i18next";
import React from "react";
import { labels } from "../../../infrastructure/Common/i18n/translationsServices";
import Blok from "../Skeletons/Blok";

const Contacts = () => {
  return (
    <div>
      <Blok title={t(labels.contacts)} Content={Content} />
    </div>
  );
};
export default Contacts;
const Content = () => {
  return <div></div>;
};
