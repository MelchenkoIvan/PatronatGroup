import React, { FC } from 'react'
//style
import style from "./CommonComponentsStyle.module.css";
//icons
import facebook from "../../../assets/social/facebook.png";
import instagramm from "../../../assets/social/instagramm.png";
import telegramm from "../../../assets/social/telegramm.png";
import watsapp from "../../../assets/social/watsapp.png";
const Social:FC = () => {
    return(
        <div className={style.social}>
            <img className="socialIcon" src={facebook} alt="facebook" />
            <img className="socialIcon" src={instagramm} alt="instagramm" />
            <img className="socialIcon" src={telegramm} alt="telegramm" />
            <img className="socialIcon" src={watsapp} alt="watsapp" />
          </div>      
    )
}
export default Social;