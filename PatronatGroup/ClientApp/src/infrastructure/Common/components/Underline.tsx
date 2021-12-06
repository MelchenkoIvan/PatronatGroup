import React from 'react'
//style
import style from "./CommonComponentsStyle.module.css" 
const Underline = () =>{
    return(
        <div className={style.containerUnderline}> 
            
            <div className={style.underline}>
                <div className={style.rhombus} /> 
                <div className={style.rhombus}/>
            </div>
           
        </div>
        
    )
}
export default Underline;