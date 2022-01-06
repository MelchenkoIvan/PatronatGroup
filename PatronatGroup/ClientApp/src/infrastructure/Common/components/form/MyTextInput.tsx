import { useField } from 'formik';
import React from 'react'
import ReactTooltip from 'react-tooltip';
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
            {meta.touched && meta.error ? (
                <div >
                    <input data-tip data-for={`${props.name}Id`} {...field} {...props} className={`${style.textInput} ${style.error}`}/>
                    <ReactTooltip backgroundColor='#fcb5b5' textColor='#ff0000' id={`${props.name}Id`} place="top" effect="solid">
                        {meta.error}
                    </ReactTooltip>
                </div>
            ): <input {...field} {...props}  className={style.textInput}/>}
            

        </div>
    )
}


export default MyTextInput;