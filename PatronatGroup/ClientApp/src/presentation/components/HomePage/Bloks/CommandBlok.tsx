import { t } from "i18next";
import React, { FC, useEffect } from "react";
import { useHistory } from "react-router";
import Slider from "react-slick";
import Button from "../../../../infrastructure/Common/components/Button";
import { labels } from "../../../../infrastructure/Common/i18n/translationsServices";
import CommandSkeleton from "../../Skeletons/Command/CommandSkeleton";
//style
import style from "./Bloks.module.css";
//icons
import exImg from "../../../../assets/exampleImg.png";
import { Lawyer } from "../../../../application/models/Lawyers";

interface PropsType {
  onGetPage: () => void;
  command: Array<Lawyer>;
}

const CommandBlok: FC<PropsType> = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const history = useHistory();

  useEffect(() => {
    props.onGetPage();
  }, [props.onGetPage]);

  return (
    <div className={style.containerCommand}>
      <Slider {...settings} className={style.slider}>
        {props.command && props.command.map((x) => (
          <div key={x.id.toString()}>
            <CommandSkeleton
              isSlider
              contactData="imelchenko61@gmail.con"
              name={x.fullName}
              icon={exImg}
              description={x.description}
            />
          </div>
        ))}
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
