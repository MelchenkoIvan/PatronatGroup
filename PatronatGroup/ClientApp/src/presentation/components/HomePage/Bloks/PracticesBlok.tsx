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
            <Square icon={taxIcon} title={t(labels.taxLaw)} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In arcu cursus euismod quis viverra nibh. "/>
            <Square icon={crimIcon} title={t(labels.criminalLaw)} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In arcu cursus euismod quis viverra nibh. "/>
            <Square icon={courtIcon} title={t(labels.arbitragePractice)} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In arcu cursus euismod quis viverra nibh. "/>
            <Square icon={taxIcon} title={t(labels.communalLaw)} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In arcu cursus euismod quis viverra nibh. "/>
        </div>
        <div className={style.secondRowBenefits}>
            <Square icon={taxIcon} title={t(labels.corporateRight)} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In arcu cursus euismod quis viverra nibh. "/>
            <Square icon={inherIcon} title={t(labels.familyInheritanceLaw)} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In arcu cursus euismod quis viverra nibh. "/>
            <Square icon={raidIcon} title={t(labels.antiRaiderServices)} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In arcu cursus euismod quis viverra nibh. "/>
        </div>
    </div>
  );
};
export default PracticesBlok;