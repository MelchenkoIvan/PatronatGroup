import { t } from 'i18next';
import React, { FC} from 'react';
import TranslateHoc from '../../../infrastructure/Common/hoc/TranslateHoc';
import { labels } from '../../../infrastructure/Common/i18n/translationsServices';
//components
import Blok from '../Skeletons/Blok';
import AboutCompanyBlokContainer from './Bloks/AboutCompanyBlokContainer';
import MainBlok from './Bloks/MainBlok';
import BenefitsBlok from './Bloks/BenefitsBlok';
import PracticesBlok from './Bloks/PracticesBlok';
import CommandBlokContainer from './Bloks/CommandBlokContainer';
//icons
import aboutCompanyImg from '../../../assets/aboutCompany.png';
import benefitsImg from '../../../assets/benefitImg.png';
import practicesImg from '../../../assets/practicesImg.png';
import commandImg from '../../../assets/teamImg.png';

const Home:FC = () => {
    return (
        <>
            <MainBlok/>
            <Blok icon={aboutCompanyImg} title={t(labels.aboutCompany)} Content = {AboutCompanyBlokContainer}/>
            <Blok icon={benefitsImg} title={t(labels.benefits)} Content = {BenefitsBlok}/>
            <Blok icon={practicesImg} title={t(labels.practices)} Content = {PracticesBlok}/>
            <Blok icon={commandImg} title={t(labels.command)} Content = {CommandBlokContainer}/>
        </>
    )
}
export default TranslateHoc(Home);