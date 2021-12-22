import React, { FC } from "react";
//style
import style from "./Footer.module.css";

interface Props {
  content: string;
  onClick: () => void;
}
const FooterButton: FC<Props> = (props) => {
  return <button className={style.footerButtonMenu} onClick={props.onClick}> {props.content}</button>;
};
export default FooterButton;
