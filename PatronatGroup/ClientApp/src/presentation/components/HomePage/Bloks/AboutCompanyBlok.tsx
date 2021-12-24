import React, { FC, useState } from "react";

//style
import style from "./Bloks.module.css";
//resources
import { labels } from "../../../../infrastructure/Common/i18n/translationsServices";
import { t } from "i18next";
//icons
import townImg from "../../../../assets/town.png";
import Button from "../../../../infrastructure/Common/components/Button";
import ContactModal from "../ContactModal/ContactModal";

const AboutCompanyBlok: FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };
  return (
    <>
      <div className={style.containerAboutCompany}>
        <div className={style.contentAboutCompany}>
          <img className={style.townImg} src={townImg} alt="town" />
          <div className={style.aboutCompanyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In arcu
            cursus euismod quis viverra nibh. Mattis ullamcorper velit sed
            ullamcorper morbi tincidunt. Eu consequat ac felis donec. Ac turpis
            egestas sed tempus urna et. Elementum nisi quis eleifend quam
            adipiscing vitae proin sagittis nisl. Ipsum a arcu cursus vitae
            congue mauris rhoncus. In cursus turpis massa tincidunt dui ut
            ornare lectus sit. Augue ut lectus arcu bibendum at varius vel
            pharetra. Vivamus at augue eget arcu. Mattis nunc sed blandit libero
            volutpat sed cras. Leo in vitae turpis massa sed elementum tempus
            egestas sed. Dignissim cras tincidunt lobortis feugiat. Facilisis
            mauris sit amet massa. Quisque non tellus orci ac auctor augue.
            Convallis posuere morbi leo urna molestie at.
          </div>
        </div>
        <div className={style.aboutCompanyButton}>
          <Button content={t(labels.toContactUs)} onClick={showModal} />
        </div>
      </div>
      <ContactModal handleClose={hideModal} show={show}><p>aa</p></ContactModal>
    </>
  );
};
export default AboutCompanyBlok;
