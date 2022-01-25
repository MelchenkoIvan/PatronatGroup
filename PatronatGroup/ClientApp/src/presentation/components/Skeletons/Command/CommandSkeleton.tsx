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
}

const CommandSkeleton: FC<Props> = (props) => {
  return (
    <>
      <div className={`commonForBloks forBloksBackground ${style.container}`}>
        <div className={style.containerImg}>
          <img src={props.icon} alt={props.icon} className={style.img}></img>
        </div>
        <div className={style.conten}>
          <div>
            <div className={style.title}>{props.name}</div>
            <div className={style.subTitle}>{props.contactData}</div>
            <div className={style.description}>{props.description}</div>
          </div>
          <div className={style.buttonAndSocial}>
            {!props.isSlider && (
              <Button content={t(labels.moreDetails)} onClick={() => {}} />
            )}
            <Social isFlex={props.isSlider}/>
          </div>
        </div>
      </div>
    </>
  );
};
export default CommandSkeleton;
