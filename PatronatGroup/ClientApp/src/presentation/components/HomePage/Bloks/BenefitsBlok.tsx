import React, { FC } from "react";
import Square from "../../Skeletons/Square/Square";

//style
import style from "./Bloks.module.css";
//img
import benefitsIcon from "../../../../assets/benefits/benefitIcon.png"
import TranslateHoc from "../../../../infrastructure/Common/hoc/TranslateHoc";
import { TranslateInterface } from "../../../../infrastructure/Common/i18n/resources";
import { labels } from "../../../../infrastructure/Common/i18n/translationsServices";
const BenefitsBlok: FC<TranslateInterface> = (props) => {
  return (
    <div className={style.benefitsContainer}>
        <div className={style.firstRowBenefits}>
            <Square icon={benefitsIcon} title={props.translate(labels.functionality)} content={props.translate(labels.functionalityDescription)}/>
            <Square icon={benefitsIcon} title={props.translate(labels.result)} content={props.translate(labels.resultDescription)}/>
            <Square icon={benefitsIcon} title={props.translate(labels.anApproach)} content={props.translate(labels.anApproachDescription)}/>
        </div>
        <div className={style.secondRowBenefits}>
            <Square icon={benefitsIcon} title={props.translate(labels.professionalism)} content={props.translate(labels.professionalismDescription)}/>
            <Square icon={benefitsIcon} title={props.translate(labels.experience)} content={props.translate(labels.experienceDescription)}/>
            <Square icon={benefitsIcon} title={props.translate(labels.command)} content={props.translate(labels.commandDescription)}/>
        </div>
    </div>
  );
};
export default TranslateHoc(BenefitsBlok);
