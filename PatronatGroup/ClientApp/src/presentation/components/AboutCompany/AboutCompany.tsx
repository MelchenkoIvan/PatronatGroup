import React, { FC } from 'react'
import Blok from '../Skeletons/Blok';
import aboutCompanyImg from '../../../assets/aboutCompany.png';
import TranslateHoc from '../../../infrastructure/Common/hoc/TranslateHoc';
import { t } from 'i18next';
import { labels } from '../../../infrastructure/Common/i18n/translationsServices';


const AboutCompany:FC = (props) =>{
    return(<div>
         <Blok icon={aboutCompanyImg} title={t(labels.aboutCompany)} Content = {Content}/>
    </div>);
} 
export default TranslateHoc(AboutCompany);

const Content = () => {
    return (
        <div>

        </div>
    )
}