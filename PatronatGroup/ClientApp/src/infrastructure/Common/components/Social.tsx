import React, { FC } from 'react'
//style
import style from "./CommonComponentsStyle.module.css";
//icons
import facebook from "../../../assets/social/facebook.png";
import instagramm from "../../../assets/social/instagramm.png";
import telegramm from "../../../assets/social/telegramm.png";
import watsapp from "../../../assets/social/watsapp.png";

interface PropsType{
    isFlex?: boolean;
}

const Social:FC<PropsType> = ({isFlex}) => {
    const className = isFlex ? style.socialFlex : style.social
    return(
        <div className={className}>
            <img className="socialIcon" src={facebook} alt="facebook" />
            <img className="socialIcon" src={instagramm} alt="instagramm" />
            <img className="socialIcon" src={telegramm} alt="telegramm" />
            <img className="socialIcon" src={watsapp} alt="watsapp" />
          </div>      
    )
}
export default Social;