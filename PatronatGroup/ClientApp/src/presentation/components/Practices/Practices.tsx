import { t } from "i18next";
import React, { FC } from "react";
import ToMainButton from "../../../infrastructure/Common/components/ToMainButton";
import { labels } from "../../../infrastructure/Common/i18n/translationsServices";
import Blok from "../Skeletons/Blok";
import PracticesSkeleton from "../Skeletons/Practices/PracticesSkeleton";
//icons
import exImg from "../../../assets/exampleImg.png";
import taxLaw from "../../../assets/practices/sections/taxLaw.jpeg"
import criminalLaw3 from "../../../assets/practices/sections/criminalLaw3.jpeg"
import arbitragePrac from "../../../assets/practices/sections/arbitragePrac.jpeg"
import communalLaw from "../../../assets/practices/sections/communalLaw.jpeg"
import corporateLaw from "../../../assets/practices/sections/corporateLaw.jpeg"
import familyLaw from "../../../assets/practices/sections/familyLaw.jpeg"
import antiRaiderServices from "../../../assets/practices/sections/antiRaiderServices.jpeg"

const Practices: FC = () => {
  return (
    <div>
      <Blok title={t(labels.practices)} isBacgroundLight/>
      <PracticesSkeleton
        title={t(labels.taxLaw)}
        description={t(labels.taxLawDescriptions)}
        icon={taxLaw}
      />
      <PracticesSkeleton
        title={t(labels.criminalLaw)}
        description={t(labels.criminalLawDescriptions)}
        icon={criminalLaw3}
      />
      <PracticesSkeleton
        title={t(labels.arbitragePractice)}
        description={t(labels.jurisprudenceDescriptions)}
        icon={arbitragePrac}
      />
      <PracticesSkeleton
        title={t(labels.communalLaw)}
        description={t(labels.communalLawDescriptions)}
        icon={communalLaw}
      />
      <PracticesSkeleton
        title={t(labels.corporateRight)}
        description={t(labels.corporateLawDescriptions)}
        icon={corporateLaw}
      />
      <PracticesSkeleton
        title={t(labels.familyInheritanceLaw)}
        description={t(labels.familyAndInheritanceLawDescriptions)}
        icon={familyLaw}
      />
      {/* <PracticesSkeleton
        title={t(labels.antiRaiderServices)}
        description={t(labels.antiRaiderServices)}
        icon={antiRaiderServices}
      /> */}
      <ToMainButton />
    </div>
  );
};
export default Practices;
