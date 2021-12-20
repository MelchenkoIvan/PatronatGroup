import React, { FC } from 'react'
//style
import style from "./CommonComponentsStyle.module.css" 

interface Props{
    style?: object;
}
const Underline:FC<Props> = (props) =>{
    return(
        <div className={style.containerUnderline} style={props.style}> 
            
            <div className={style.underline} >
                <div className={style.rhombus} /> 
                <div className={style.rhombus}/>
            </div>
           
        </div>
        
    )
}
export default Underline;