import React, { FC } from "react";
import TranslateHoc from "../hoc/TranslateHoc";
//style
import style from "./CommonComponentsStyle.module.css"
interface Props{
    content: string;
    style?:object;
}
const Button: FC<Props> = (props) => {
  return <button style={props.style} className={style.button}>{props.content}</button>
};
export default Button;
