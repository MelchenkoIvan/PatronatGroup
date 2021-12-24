import { t } from "i18next";
import React, { FC } from "react";
import Button from "../../../../infrastructure/Common/components/Button";
import { labels } from "../../../../infrastructure/Common/i18n/translationsServices";
//style
import style from "./PracticesSkeleton.module.css";

interface Props {
  title: string;
  icon: string;
  description: string;
}

const PracticesSkeleton: FC<Props> = (props) => {
    const FotmatDescription = (description: string) => {
        const list = description.split(".");
        return list;
    }
  return (
   <>
    <div className={`commonForBloks forBloksBackground`}>
      <ul><li className={style.title}>{props.title}</li></ul>
      <div className={style.conten}>
        <img src={props.icon} alt={props.icon} className={style.img}></img>
        <ul className={style.description}>
            {FotmatDescription(props.description).map( x => (<li className={style.descriptionItem}>{x}</li>))}
        </ul>
      </div>
      <div className={style.button}>
        <Button content={t(labels.moreDetails)} onClick={()=> {}}/>
      </div>
    </div>
   </>
  );
};
export default PracticesSkeleton;
