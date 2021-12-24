import React, { FC } from "react";
import Underline from "../../../infrastructure/Common/components/Underline";
//style
import style from "./Blok.module.css";

interface Props {
  title: string;
  icon?: string;
  Content?: any; // FC component
  isBacgroundLight?: boolean;
}
const styleForUnderlinr = {
  width: "120%",
  position: "relative",
  right: "10%",
};

const Blok: FC<Props> = (props) => {
  const { title, icon, Content } = props;
  const styleBacground = props.isBacgroundLight
    ? `commonForBloks forBloksBackground`
    : `commonForBloks`;
  return (
    <div className={styleBacground}>
      <div className={style.header}>
        {icon && <img className={style.img} src={icon} alt={icon} />}
        <div className={style.titleContainer}>
          <div className={style.title}>
            {title}
            <Underline style={styleForUnderlinr} />
          </div>
        </div>
      </div>
      {props.Content ? <Content/> : ""}
    </div>
  );
};

export default Blok;
