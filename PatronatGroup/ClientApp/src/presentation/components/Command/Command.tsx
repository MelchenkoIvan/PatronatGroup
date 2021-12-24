import { t } from "i18next";
import React, { FC } from "react";
import ToMainButton from "../../../infrastructure/Common/components/ToMainButton";
import { labels } from "../../../infrastructure/Common/i18n/translationsServices";
import Blok from "../Skeletons/Blok";
import CommandSkeleton from "../Skeletons/Command/CommandSkeleton";
//icons
import exImg from "../../../assets/exampleImg.png";
const Command: FC = () => {
  return (
    <div>
      <Blok title={t(labels.command)} isBacgroundLight/>
      <CommandSkeleton contactData="imelchenko61@gmail.con" name="Melchenko Ivan" icon={exImg} description="Lorem ipsum dolor sit amet.
    consectetur adipiscing elit.
    In arcu cursus euismod quis viverra nibh.
    Mattis ullamcorper velit sed ullamcorper morbi tincidunt.
    Eu consequat ac felis donec.
    Ac turpis egestas sed tempus urna et.
    Ipsum a arcu cursus vitae congue mauris rhoncus.
    In cursus turpis massa tincidunt dui ut ornare lectus sit.
    Augue ut lectus arcu bibendum at varius vel pharetr"/>
      <ToMainButton />
    </div>
  );
};
export default Command;

