import React, { FC } from "react";
import Square from "../../Skeletons/Square/Square";

//style
import style from "./Bloks.module.css";
//img
import benefitsIcon from "../../../../assets/benefits/benefitIcon.png"
const BenefitsBlok: FC = () => {
  return (
    <div className={style.benefitsContainer}>
        <div className={style.firstRowBenefits}>
            <Square icon={benefitsIcon} title="Lorem ipsum" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In arcu cursus euismod quis viverra nibh. "/>
            <Square icon={benefitsIcon} title="Lorem ipsum" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In arcu cursus euismod quis viverra nibh. "/>
            <Square icon={benefitsIcon} title="Lorem ipsum" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In arcu cursus euismod quis viverra nibh. "/>
        </div>
        <div className={style.secondRowBenefits}>
            <Square icon={benefitsIcon} title="Lorem ipsum" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In arcu cursus euismod quis viverra nibh nibhnibh nibh nibh nibh nibh nibh nibh nibh nibh nibhnibh nibh nibh nibh nibh nibhnibh nibh nibh nibhnibh nibh nibh nibh nibh nibh nibh nibh nibh nibhnibh nibh nibh nibh nibh nibhnibh nibh nibh. "/>
            <Square icon={benefitsIcon} title="Lorem ipsum" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In arcu cursus euismod quis viverra nibh. "/>
            <Square icon={benefitsIcon} title="Lorem ipsum" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In arcu cursus euismod quis viverra nibh. "/>
        </div>
    </div>
  );
};
export default BenefitsBlok;
