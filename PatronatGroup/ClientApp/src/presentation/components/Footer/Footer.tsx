import React, { FC } from "react";
import LenguagesButtons from "../../../infrastructure/Common/i18n/resources";
import Underline from "../../../infrastructure/Common/components/Underline";
import TranslateHoc from "../../../infrastructure/Common/hoc/TranslateHoc";
//style
import style from "./Footer.module.css";
//icons
import facebook from "../../../assets/social/facebook.png";
import instagramm from "../../../assets/social/instagramm.png";
import telegramm from "../../../assets/social/telegramm.png";
import watsapp from "../../../assets/social/watsapp.png";
import { labels } from "../../../infrastructure/Common/i18n/translationsServices";
import Button from "../../../infrastructure/Common/components/Button";
import FooterButton from "./FooterButton";

interface Props {
  translate: (label: string) => string;
}
const Footer: FC<Props> = (props) => {
  const { translate } = props;
  return (
    <div className={style.container}>
      <div>
        <div>
          <div className={style.title}>{translate(labels.contacts)}</div>
          <Underline />
          {translate(labels.telephone)}
          <Button content={translate(labels.toСontactUs)} />
        </div>
        <div className={style.socialAndLang}>
          <img className="socialIcon" src={facebook} alt="facebook" />
          <img className="socialIcon" src={instagramm} alt="instagramm" />
          <img className="socialIcon" src={telegramm} alt="telegramm" />
          <img className="socialIcon" src={watsapp} alt="watsapp" />
        </div>
      </div>

      <div>
        <div className={style.title}>{translate(labels.practices)}</div>
        <Underline />
        <ul>
          <div>{translate(labels.taxLaw)}</div>
          <div>{translate(labels.criminalLaw)}</div>
          <div>{translate(labels.arbitragePractice)}</div>
          <div>{translate(labels.communalLaw)}</div>
          <div>{translate(labels.corporateRight)}</div>
          <div>{translate(labels.familyInheritanceLaw)}</div>
          <div>{translate(labels.antiRaiderServices)}</div>
        </ul>
      </div>
      <div>
        <div>
          <div className={style.title}>{translate(labels.menu)}</div>
          <Underline />
        </div>
        <div>
            <FooterButton content={translate(labels.aboutCompany)}/>
            <FooterButton content={translate(labels.practices)}/>
            <FooterButton content={translate(labels.сommand)}/>
            <FooterButton content={translate(labels.contacts)}/>
          <LenguagesButtons />
        </div>
      </div>
    </div>
  );
};
export default TranslateHoc(Footer);
