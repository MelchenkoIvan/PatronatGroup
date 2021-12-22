import * as React from 'react';
//components
import Underline from '../../../../infrastructure/Common/components/Underline';
//style
import style from "./Bloks.module.css" 
//resources
import { labels } from '../../../../infrastructure/Common/i18n/translationsServices';
import TranslateHoc from '../../../../infrastructure/Common/hoc/TranslateHoc';
//icons
import mainImg from '../../../../assets/mainImg.png'

const MainBlok:React.FC = (props:any) => {
    return (
            <div className={`commonForBloks ${style.container}`} >
                <div className={style.title}>
                    <div className={style.lawyersAssociation}>{props.translate(labels.lawyersAssociation)}</div>
                    <div className={style.firmaName}>{props.translate(labels.firmaName)}</div>
                    <Underline />
                </div>
                <div className={style.containerMainImg}>
                    <img src={mainImg} className={style.mainImg} />
                </div>
            </div>
    )
}
export default TranslateHoc(MainBlok);