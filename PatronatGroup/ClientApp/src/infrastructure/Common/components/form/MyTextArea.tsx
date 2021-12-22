import { useField } from 'formik';
import React from 'react'
import { Form, Label } from 'semantic-ui-react';
//style
import style from "../CommonComponentsStyle.module.css";

interface Props{
    placeholder:string;
    name: string;
    rows:number;
}

const MyTextArea = (props:Props) => {
    const[field,meta] = useField(props.name);
    return(
        // error={meta.touched && !!meta.error}
        <div >
            <textarea {...field} {...props} className={style.textArea}/>
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ): null}
        </div>
    )
}


export default MyTextArea;