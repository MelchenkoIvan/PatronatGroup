import React, { FC } from "react";
//style
import style from "./Footer.module.css";

interface Props {
    content: string;
}
const FooterButton: FC<Props> = (props) => {

  return <button>{props.content}</button>
};
export default FooterButton;