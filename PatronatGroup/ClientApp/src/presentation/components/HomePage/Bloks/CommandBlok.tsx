import { t } from "i18next";
import React, { FC } from "react";
import { useHistory } from "react-router";
import Slider from "react-slick";
import Button from "../../../../infrastructure/Common/components/Button";
import { labels } from "../../../../infrastructure/Common/i18n/translationsServices";
//style
import style from "./Bloks.module.css";

const CommandBlok: FC = () => {
  const history = useHistory();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={style.containerCommand}>
      <Slider {...settings} className={style.slider}>
        <div className={style.slide}>
          <div>
            <img />
          </div>
          <div>
            <div className={style.workerName}>
              Lorem ipsum
            </div>
            <div className={style.workerPosition}>
              Lorem ipsum
            </div>
            <div className={style.aboutWorker}>
              Lorem ipsum
            </div>
          </div>
        </div>
        <div className={style.slide}>
          <div>
            <img />
          </div>
          <div>
            <div className={style.workerName}>
              Lorem ipsum
            </div>
            <div className={style.workerPosition}>
              Lorem ipsum
            </div>
            <div className={style.aboutWorker}>
              Lorem ipsum
            </div>
          </div>
        </div>
      </Slider>
      <div className={style.commandButton}>
        <Button content={t(labels.allPartners)} style={{width:"30%"}} onClick={() => {history.push({pathname:`/command`})}} />
      </div>
    </div>
  );
};
export default CommandBlok;
