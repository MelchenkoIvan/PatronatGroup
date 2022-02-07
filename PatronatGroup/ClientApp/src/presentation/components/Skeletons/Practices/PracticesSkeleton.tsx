import { t } from "i18next";
import React, { FC, useState } from "react";
import Button from "../../../../infrastructure/Common/components/Button";
import { labels } from "../../../../infrastructure/Common/i18n/translationsServices";
import PracticesModal from "./PracticesModal/PracticesModal";
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
  };
  var list = FotmatDescription(props.description);
  const checkCount = (list: string[]) => {
    return list.length > 7;
  };
  const [show, setShow] = useState<boolean>(false);
  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };
  return (
    <>
      <div className={`commonForBloks forBloksBackground`}>
        <ul>
          <li className={style.title}>{props.title}</li>
        </ul>
        <div className={style.conten}>
          <img src={props.icon} alt={props.icon} className={style.img}></img>
          <ul className={style.description}>
            {list.map((x,i) => i < 7 && (
              <li key={i} className={style.descriptionItem}>{x}</li>
            ))}
          </ul>
        </div>
       
          <div className={style.button}>
          {checkCount(list) && (
            <Button content={t(labels.moreDetails)} onClick={showModal} />
          )}
          </div>
          <PracticesModal list={list} handleClose={hideModal} show={show}></PracticesModal>
      </div>
    </>
  );
};
export default PracticesSkeleton;
