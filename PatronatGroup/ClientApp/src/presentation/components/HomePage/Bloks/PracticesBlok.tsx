import React, { FC } from "react";
import Square from "../../Skeletons/Square/Square";

//style
import style from "./Bloks.module.css";
//img
import taxIcon from "../../../../assets/practices/taxIcon.png"
import crimIcon from "../../../../assets/practices/crimIcon.png"
import inherIcon from "../../../../assets/practices/inherIcon.png"
import courtIcon from "../../../../assets/practices/courtIcon.png"
import { labels } from "../../../../infrastructure/Common/i18n/translationsServices";
import TranslateHoc from "../../../../infrastructure/Common/hoc/TranslateHoc";
import { TranslateInterface } from "../../../../infrastructure/Common/i18n/resources";

const PracticesBlok: FC<TranslateInterface> = ({translate}) => {
  return (
    <div className={style.benefitsContainer}>
        <div className={style.firstRowBenefits}>
            <Square icon={taxIcon} title={translate(labels.taxLaw)} content={translate(labels.taxLawDescriptions)}/>
            <Square icon={crimIcon} title={translate(labels.criminalLaw)} content={translate(labels.criminalLawDescriptions)}/>
            <Square icon={courtIcon} title={translate(labels.arbitragePractice)} content={translate(labels.jurisprudenceDescriptions)}/>
            
        </div>
        <div className={style.secondRowBenefits}>
            <Square icon={taxIcon} title={translate(labels.communalLaw)} content={translate(labels.communalLawDescriptions)}/>
            <Square icon={taxIcon} title={translate(labels.corporateRight)} content={translate(labels.corporateLawDescriptions)}/>
            <Square icon={inherIcon} title={translate(labels.familyInheritanceLaw)} content={translate(labels.familyAndInheritanceLawDescriptions)}/>
            {/* <Square icon={raidIcon} title={t(labels.antiRaiderServices)} content={t(labels.anti)}/> */}
        </div>
    </div>
  );
};
export default TranslateHoc(PracticesBlok);