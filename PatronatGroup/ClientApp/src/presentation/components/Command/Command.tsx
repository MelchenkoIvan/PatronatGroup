import { t } from "i18next";
import React, { FC, useEffect } from "react";
import ToMainButton from "../../../infrastructure/Common/components/ToMainButton";
import { labels } from "../../../infrastructure/Common/i18n/translationsServices";
import Blok from "../Skeletons/Blok";
import CommandSkeleton from "../Skeletons/Command/CommandSkeleton";
//icons
import exImg from "../../../assets/exampleImg.png";
import { Lawyer } from "../../../application/models/Lawyers";
import Sc from "../../../application/models/Sc";

interface SR {
  pageNumber: number;
  rowsOnPage: number;
  items: Array<Lawyer>;
}
interface PropsType {
  onGetPage: (sc: Sc) => void;
  command: SR;
}
const Command: FC<PropsType> = (props) => {
  useEffect(() => {
    props.onGetPage({ rowsOnPage: 100, pageNumber: 1 } as Sc);
  }, [props.onGetPage]);
  return (
    <div>
      <Blok title={t(labels.command)} isBacgroundLight />
      {props.command &&
        props.command.items.map((x) => (
          <div key={x.id}>
            <CommandSkeleton
              contactData={x.email}
              name={x.fullName!}
              icon={x.image || exImg}
              description={x.description}
            />
           
          </div>
        ))}
         <ToMainButton />
    </div>
  );
};
export default Command;
