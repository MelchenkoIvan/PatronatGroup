import React, { FC } from "react";
import TranslateHoc from "../hoc/TranslateHoc";
//style
import style from "./CommonComponentsStyle.module.css";
interface Props {
  content: string;
  style?: object;
  onClick?: () => void;
  type?: "submit";
}
const Button: FC<Props> = (props) => {
  return (
    <>
      {props.type ? (
        <button style={props.style} type="submit" className={style.button}> {props.content}</button>
      ) : (
        <button style={props.style} onClick={() => {props.onClick!();}} className={style.button}>
          {props.content}
        </button>
      )}
    </>
  );
};
export default Button;
