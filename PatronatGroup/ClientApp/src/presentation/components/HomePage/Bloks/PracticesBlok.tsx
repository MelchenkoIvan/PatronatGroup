import React, { FC } from "react";
import Square from "../../Skeletons/Square/Square";

//style
import style from "./Bloks.module.css";
//img
import taxIcon from "../../../../assets/practices/taxIcon.png"
import crimIcon from "../../../../assets/practices/crimIcon.png"
import inherIcon from "../../../../assets/practices/inherIcon.png"
import raidIcon from "../../../../assets/practices/raidIcon.png"
import courtIcon from "../../../../assets/practices/courtIcon.png"
import { t } from "i18next";
import { labels } from "../../../../infrastructure/Common/i18n/translationsServices";

const PracticesBlok: FC = () => {
  return (
    <div className={style.benefitsContainer}>
        <div className={style.firstRowBenefits}>
            <Square icon={taxIcon} title={t(labels.taxLaw)} content={t(labels.taxLawDescriptions)}/>
            <Square icon={crimIcon} title={t(labels.criminalLaw)} content={t(labels.criminalLawDescriptions)}/>
            <Square icon={courtIcon} title={t(labels.arbitragePractice)} content={t(labels.jurisprudenceDescriptions)}/>
            
        </div>
        <div className={style.secondRowBenefits}>
            <Square icon={taxIcon} title={t(labels.communalLaw)} content={t(labels.communalLawDescriptions)}/>
            <Square icon={taxIcon} title={t(labels.corporateRight)} content={t(labels.corporateLawDescriptions)}/>
            <Square icon={inherIcon} title={t(labels.familyInheritanceLaw)} content={t(labels.familyAndInheritanceLawDescriptions)}/>
            {/* <Square icon={raidIcon} title={t(labels.antiRaiderServices)} content={t(labels.anti)}/> */}
        </div>
    </div>
  );
};
export default PracticesBlok;