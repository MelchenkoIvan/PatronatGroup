import React, { FC } from "react";
import Underline from "../../../infrastructure/Common/components/Underline";
//style
import style from "./Blok.module.css";

interface Props {
  title: string;
  icon: string;
  Content: FC;
}
const styleForunderlinr = {
  width: "120%",
  position: "relative",
  right: "10%",
};

const Blok: FC<Props> = (props) => {
  const { title, icon, Content } = props;
  return (
    <div className={`commonForBloks`}>
      <div className={style.header}>
        <img className={style.img} src={icon} alt={icon} />
        <div className={style.titleContainer}>
          <div className={style.title}>
            {title}
            <Underline style={styleForunderlinr} />
          </div>
        </div>
      </div>
      <Content />
    </div>
  );
};

export default Blok;
