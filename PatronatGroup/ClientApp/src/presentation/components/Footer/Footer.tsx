import React, { FC } from "react";
import LenguagesButtons from "../../../infrastructure/Common/i18n/resources";
import Underline from "../../../infrastructure/Common/components/Underline";
import TranslateHoc from "../../../infrastructure/Common/hoc/TranslateHoc";
import Button from "../../../infrastructure/Common/components/Button";
import FooterButton from "./FooterButton";
import { useHistory } from "react-router";

//style
import style from "./Footer.module.css";
//icons
import facebook from "../../../assets/social/facebook.png";
import instagramm from "../../../assets/social/instagramm.png";
import telegramm from "../../../assets/social/telegramm.png";
import watsapp from "../../../assets/social/watsapp.png";
import { labels } from "../../../infrastructure/Common/i18n/translationsServices";

interface Props {
  translate: (label: string) => string;
}
const Footer: FC<Props> = (props) => {
  const history = useHistory();
  const { translate } = props;
  return (
    <div className={style.container}>
      <div>
        <div className={style.title}>
          {translate(labels.contacts)}
          <Underline />
        </div>
        <div className={style.contactsFooter}>
          {translate(labels.telephone)}
          <div>+38(055)1234567</div>
          <div>+38(055)1234567</div>
          <div>law@mail.com</div>
          <div className={style.footerButtonContacts}>
            <Button
            style={{margin:"0px",fontSize:"25px",lineHeight: "105%",width:"100%"}}
              content={translate(labels.toСontactUs)}
              onClick={() => {
                history.push({ pathname: `/command` });
              }}
            />
          </div>

          <div className={style.socialAndLang}>
            <img className="socialIcon" src={facebook} alt="facebook" />
            <img className="socialIcon" src={instagramm} alt="instagramm" />
            <img className="socialIcon" src={telegramm} alt="telegramm" />
            <img className="socialIcon" src={watsapp} alt="watsapp" />
          </div>
        </div>
      </div>

      <div>
        <div className={style.title}>{translate(labels.practices)}</div>
        <Underline />
        <div className={style.practicesFooter}>
          <div>{translate(labels.taxLaw)}</div>
          <div>{translate(labels.criminalLaw)}</div>
          <div>{translate(labels.arbitragePractice)}</div>
          <div>{translate(labels.communalLaw)}</div>
          <div>{translate(labels.corporateRight)}</div>
          <div>{translate(labels.familyInheritanceLaw)}</div>
          <div>{translate(labels.antiRaiderServices)}</div>
        </div>
      </div>
      <div>
        <div>
          <div className={style.title}>{translate(labels.menu)}</div>
          <Underline />
        </div>
        <div className={style.footerMenu}>
        <FooterButton
            onClick={() => {
              history.push({ pathname: `/aboutCompany` });
            }}
            content={translate(labels.toMain)}
          />
          <FooterButton
            onClick={() => {
              history.push({ pathname: `/aboutCompany` });
            }}
            content={translate(labels.aboutCompany)}
          />
          <FooterButton
            onClick={() => {
              history.push({ pathname: `/practices` });
            }}
            content={translate(labels.practices)}
          />
          <FooterButton
            onClick={() => {
              history.push({ pathname: `/command` });
            }}
            content={translate(labels.сommand)}
          />
          <FooterButton
            onClick={() => {
              history.push({ pathname: `/contacts` });
            }}
            content={translate(labels.contacts)}
          />
          <div className={style.lenguagesButtonsContainer}>
            <LenguagesButtons />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TranslateHoc(Footer);
