import * as React from 'react';
//components
import Underline from '../../../infrastructure/Common/components/Underline';
//style
import style from "./MainBlok.module.css" 
//resources
import { labels } from '../../../infrastructure/Common/i18n/translationsServices';
import TranslateHoc from '../../../infrastructure/Common/hoc/TranslateHoc';

const MainBlok:React.FC = (props:any) => {
    return (
            <div className={`commonForBloks ${style.container}`} >
                <div className={style.title}>
                    <div className={style.lawyersAssociation}>{props.translate(labels.lawyersAssociation)}</div>
                    <div className={style.firmaName}>{props.translate(labels.firmaName)}</div>
                    <Underline />
                </div>
                <div className={style.containerMainImg}>
                    <div className={style.mainImg} />
                </div>
            </div>
    )
}
export default TranslateHoc(MainBlok);