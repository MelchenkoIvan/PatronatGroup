import React, { FC } from 'react'

//style
import style from "./Square.module.css";

interface Props {
    icon: string;   
    title: string;
    content: string;
}
const Square:FC<Props> = (props) => {
    return(
        <div className={style.container}>
            <img src={props.icon} alt={props.icon} className={style.img}/>
            <div className={style.title}>{props.title}</div>
            <p className={style.content}>{props.content}</p>
        </div>
    )
}
export default Square;