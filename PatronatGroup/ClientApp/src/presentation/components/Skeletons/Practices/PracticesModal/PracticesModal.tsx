import React, { FC } from "react";
//style
import style from "./PracticesModal.module.css";

//img
import closeImg from "../../../../../assets/close.png";

interface Props {
  handleClose: () => void;
  show: boolean;
  list: string[];
}

const PracticesModal: FC<Props> = ({ handleClose, show, list}) => {

  const showHideClassName = show
    ? `${style.modal} ${style.displayBlock}`
    : `${style.modal} ${style.displayNone}`;
  return (
    <div className={showHideClassName}>
      <section className={style.modalMain}>
        <button className={style.closeButton} onClick={handleClose}>
          <img src={closeImg} alt="close"/>
        </button>
        <ul className={style.description}>
            {list.map((x,i) => (
              <li key={i} className={style.descriptionItem}>{x}</li>
            ))}
          </ul>
      </section>
    </div>
  );
};

export default PracticesModal;
