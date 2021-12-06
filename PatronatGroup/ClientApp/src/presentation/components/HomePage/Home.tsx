import { t } from 'i18next';
import React, { FC } from 'react';
import TranslateHoc from '../../../infrastructure/Common/hoc/TranslateHoc';
import { labels } from '../../../infrastructure/Common/i18n/translationsServices';
//components
import MainBlok from '../MainBlok/MainBlok';
import Blok from '../Skeletons/Blok';

//style
import style from "./Home.module.css"
//icons
import aboutCompanyImg from '../../../assets/aboutCompany.png'

const Try: FC = () => {
    return<div></div>
}

const Home:FC = () => {
    return (
        <div className={style.container}>
            <MainBlok/>
            <Blok icon={aboutCompanyImg} title={t(labels.aboutCompany)} Content = {Try}/>
            <Blok icon={aboutCompanyImg} title={t(labels.benefits)} Content = {Try}/>
            <Blok icon={aboutCompanyImg} title={t(labels.practices)} Content = {Try}/>
            <Blok icon={aboutCompanyImg} title={t(labels.сommand)} Content = {Try}/>
            
        </div>
    )
}
export default TranslateHoc(Home);