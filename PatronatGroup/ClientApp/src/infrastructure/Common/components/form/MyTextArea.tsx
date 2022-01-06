import { useField } from "formik";
import React from "react";
import ReactTooltip from "react-tooltip";
//style
import style from "../CommonComponentsStyle.module.css";

interface Props {
  placeholder: string;
  name: string;
  rows: number;
}

const MyTextArea = (props: Props) => {
  const [field, meta] = useField(props.name);
  return (
    <div>
      {meta.touched && meta.error ? (
        <div>
            <textarea data-tip data-for={`${props.name}Id`} {...field} {...props} className={`${style.textArea} ${style.error}`} />
            <ReactTooltip backgroundColor='#fcb5b5' textColor='#ff0000' id={`${props.name}Id`} place="top" effect="solid">
                {meta.error}
            </ReactTooltip>
        </div>
      ) : (
        <textarea {...field} {...props} className={style.textArea} />
      )}
     
    </div>
  );
};

export default MyTextArea;
