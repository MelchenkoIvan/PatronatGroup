import { useField } from 'formik';
import React from 'react'
import { Form, Label } from 'semantic-ui-react';


interface Props{
    id?:string;
    placeholder?:string;
    name: string;
    type?:string;
    lable?: string;
    onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

const SemanyicUiInput = (props:Props) => {
    const[field,meta] = useField(props.name);
    return(
        <Form.Field error={meta.touched && !!meta.error}>
            <label>{props.lable}</label>
            <input {...field} {...props}/>
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ): null}
        </Form.Field>
    )
}


export default SemanyicUiInput;