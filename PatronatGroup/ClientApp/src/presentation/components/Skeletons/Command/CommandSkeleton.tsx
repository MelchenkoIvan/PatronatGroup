import { t } from "i18next";
import React, { FC } from "react";
import Button from "../../../../infrastructure/Common/components/Button";
import Social from "../../../../infrastructure/Common/components/Social";
import { labels } from "../../../../infrastructure/Common/i18n/translationsServices";
//style
import style from "./CommandSkeleton.module.css";

interface Props {
  name: string;
  contactData: string;
  icon: string;
  description: string;
  isSlider?: boolean;
  isCommandPage?: boolean;
}

const CommandSkeleton: FC<Props> = (props) => {
  const classContainerCommandPage = props.isCommandPage ? `commonForBloks forBloksBackground ${style.containerCommandPage}` : `forBloksBackground ${style.container}`
  const classContainerImgCommandPage = props.isCommandPage ? `${style.containerImgCommandPage}` : `${style.containerImg}`
  const classContenCommandPage = props.isCommandPage ? `${style.contenCommandPage}` : `${style.conten}`
  return (
    <>
      <div className={classContainerCommandPage}>
        <div className={classContainerImgCommandPage}>
          <img src={props.icon} alt={props.icon} className={style.img}></img>
        </div>
        <div className={classContenCommandPage}>
          <div>
            <div className={style.title}>{props.name}</div>
            <div className={style.subTitle}>{props.contactData}</div>
            <div className={style.description}>{props.description}</div>
          </div>
          <div className={style.buttonAndSocial}>
            {!props.isSlider && (
              <div></div>
              //<Button content={t(labels.moreDetails)} onClick={() => {}} />
            )}
            <Social isFlex={props.isSlider}/>
          </div>
        </div>
      </div>
    </>
  );
};
export default CommandSkeleton;
