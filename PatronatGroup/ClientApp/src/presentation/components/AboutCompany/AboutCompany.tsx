import React, { FC } from "react";
import Blok from "../Skeletons/Blok";
import aboutCompanyImg from "../../../assets/aboutCompany.png";
import TranslateHoc from "../../../infrastructure/Common/hoc/TranslateHoc";
import { t } from "i18next";
import { labels } from "../../../infrastructure/Common/i18n/translationsServices";
import AboutCompanyBlok from "../HomePage/Bloks/AboutCompanyBlok";
import ToMainButton from "../../../infrastructure/Common/components/ToMainButton";

const AboutCompany: FC = () => {
  return (
    <div>
      <Blok
        icon={aboutCompanyImg}
        title={t(labels.aboutCompany)}
        Content={AboutCompanyBlok}
      />
      <ToMainButton/>
    </div>
  );
};
export default TranslateHoc(AboutCompany);
