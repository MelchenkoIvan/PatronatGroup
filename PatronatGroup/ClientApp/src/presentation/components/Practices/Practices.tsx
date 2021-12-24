import { t } from "i18next";
import React, { FC } from "react";
import ToMainButton from "../../../infrastructure/Common/components/ToMainButton";
import { descriptions, labels } from "../../../infrastructure/Common/i18n/translationsServices";
import Blok from "../Skeletons/Blok";
import PracticesSkeleton from "../Skeletons/Practices/PracticesSkeleton";
//icons
import exImg from "../../../assets/exampleImg.png";

const Practices: FC = () => {
  return (
    <div>
      <Blok title={t(labels.practices)} isBacgroundLight/>
      <PracticesSkeleton
        title={t(labels.taxLaw)}
        description={t(descriptions.taxLawDescriptions)}
        icon={exImg}
      />
      <PracticesSkeleton
        title={t(labels.criminalLaw)}
        description={t(descriptions.taxLawDescriptions)}
        icon={exImg}
      />
      <PracticesSkeleton
        title={t(labels.arbitragePractice)}
        description={t(descriptions.taxLawDescriptions)}
        icon={exImg}
      />
      <PracticesSkeleton
        title={t(labels.communalLaw)}
        description={t(descriptions.taxLawDescriptions)}
        icon={exImg}
      />
      <PracticesSkeleton
        title={t(labels.corporateRight)}
        description={t(descriptions.taxLawDescriptions)}
        icon={exImg}
      />
      <PracticesSkeleton
        title={t(labels.familyInheritanceLaw)}
        description={t(descriptions.taxLawDescriptions)}
        icon={exImg}
      />
      <PracticesSkeleton
        title={t(labels.antiRaiderServices)}
        description={t(descriptions.taxLawDescriptions)}
        icon={exImg}
      />
      <ToMainButton />
    </div>
  );
};
export default Practices;
