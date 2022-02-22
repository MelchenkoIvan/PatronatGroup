import React, { FC, useState } from "react";
import Button from "../../../../infrastructure/Common/components/Button";
import ContactModal from "../ContactModal/ContactModal";
import ToContactUs from "../../../../application/models/ToContactUs";
//style
import style from "./Bloks.module.css";
//resources
import { labels } from "../../../../infrastructure/Common/i18n/translationsServices";
import { t } from "i18next";
//icons
import townImg from "../../../../assets/town.png";
import TranslateHoc from "../../../../infrastructure/Common/hoc/TranslateHoc";

interface PropsType{
  onSubmit: (values:ToContactUs) => void
}
const AboutCompanyBlok: FC<PropsType> = (props) => {
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
          {t(labels.aboutCompanyDescriptions)}
          </div>
        </div>
        <div className={style.aboutCompanyButton}>
          <Button content={t(labels.toContactUs)} onClick={showModal} />
        </div>
      </div>
      <ContactModal onSubmit={props.onSubmit} handleClose={hideModal} show={show}></ContactModal>
    </>
  );
};
export default TranslateHoc(AboutCompanyBlok);
