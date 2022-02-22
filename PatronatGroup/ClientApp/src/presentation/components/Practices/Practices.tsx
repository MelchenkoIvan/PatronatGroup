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
import TranslateHoc from "../../../infrastructure/Common/hoc/TranslateHoc";
import { TranslateInterface } from "../../../infrastructure/Common/i18n/resources";

const Practices: FC<TranslateInterface> = ({translate}) => {
  return (
    <div>
      <Blok title={translate(labels.practices)} isBacgroundLight/>
      <PracticesSkeleton
        title={translate(labels.taxLaw)}
        description={translate(labels.taxLawDescriptions)}
        icon={taxLaw}
      />
      <PracticesSkeleton
        title={translate(labels.criminalLaw)}
        description={translate(labels.criminalLawDescriptions)}
        icon={criminalLaw3}
      />
      <PracticesSkeleton
        title={translate(labels.arbitragePractice)}
        description={translate(labels.jurisprudenceDescriptions)}
        icon={arbitragePrac}
      />
      <PracticesSkeleton
        title={translate(labels.communalLaw)}
        description={translate(labels.communalLawDescriptions)}
        icon={communalLaw}
      />
      <PracticesSkeleton
        title={translate(labels.corporateRight)}
        description={translate(labels.corporateLawDescriptions)}
        icon={corporateLaw}
      />
      <PracticesSkeleton
        title={translate(labels.familyInheritanceLaw)}
        description={translate(labels.familyAndInheritanceLawDescriptions)}
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
export default TranslateHoc(Practices);
