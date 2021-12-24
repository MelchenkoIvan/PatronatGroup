import { t } from "i18next";
import React, { FC } from "react";
import { useHistory } from "react-router";
import Slider from "react-slick";
import Button from "../../../../infrastructure/Common/components/Button";
import { labels } from "../../../../infrastructure/Common/i18n/translationsServices";
import CommandSkeleton from "../../Skeletons/Command/CommandSkeleton";
//style
import style from "./Bloks.module.css";
//icons
import exImg from "../../../../assets/exampleImg.png";

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
        <CommandSkeleton
         isSlider
          contactData="imelchenko61@gmail.con"
          name="Melchenko Ivan"
          icon={exImg}
          description="Lorem ipsum dolor sit amet.
    consectetur adipiscing elit.
    In arcu cursus euismod quis viverra nibh.
    Mattis ullamcorper velit sed ullamcorper morbi tincidunt."
        />
         <CommandSkeleton
         isSlider
          contactData="imelchenko61@gmail.con"
          name="Melchenko Ivan"
          icon={exImg}
          description="Lorem ipsum dolor sit amet.
    consectetur adipiscing elit.
    In arcu cursus euismod quis viverra nibh.
    Mattis ullamcorper velit sed ullamcorper morbi tincidunt."
        />
      </Slider>
      <div className={style.commandButton}>
        <Button
          content={t(labels.allPartners)}
          style={{ width: "30%" }}
          onClick={() => {
            history.push({ pathname: `/command` });
          }}
        />
      </div>
    </div>
  );
};
export default CommandBlok;
