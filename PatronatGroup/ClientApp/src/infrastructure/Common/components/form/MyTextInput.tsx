import { useField } from 'formik';
import React from 'react'
import { Form, Label } from 'semantic-ui-react';
//style
import style from "../CommonComponentsStyle.module.css";

interface Props{
    placeholder:string;
    name: string;
    type?:string;
}

const MyTextInput = (props:Props) => {
    const[field,meta] = useField(props.name);
    return(
        <div>
            <input {...field} {...props}  className={style.textInput}/>
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ): null}
        </div>
    )
}


export default MyTextInput;