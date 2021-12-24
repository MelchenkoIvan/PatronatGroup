import React, { FC } from "react";
import Button from "../../../../infrastructure/Common/components/Button";
import TranslateHoc from "../../../../infrastructure/Common/hoc/TranslateHoc";
import { labels } from "../../../../infrastructure/Common/i18n/translationsServices";
import LenguagesButtons from "../../../../infrastructure/Common/i18n/resources";
import { useHistory } from "react-router";
//style
import style from "./Menu.module.css";
import Social from "../../../../infrastructure/Common/components/Social";



interface Props {
  translate: (label: string) => string;
}
const Menu: FC<Props> = (props) => {
  const history = useHistory();
  return (
    <div className={style.container}>
      <div id={`${style.menu}`}>
        <div className={style.containerButtons}>
          <Button content={props.translate(labels.toMain)} onClick={() => {history.push({pathname:`/`})}}/>
          <Button content={props.translate(labels.aboutCompany)} onClick={() => {history.push({pathname:`/aboutCompany`})}}/>
          <Button content={props.translate(labels.practices)} onClick={() => {history.push({pathname:`/practices`})}}/>
          <Button content={props.translate(labels.command)} onClick={() => {history.push({pathname:`/command`})}}/>
          <Button content={props.translate(labels.contacts)} onClick={() => {history.push({pathname:`/contacts`})}}/>
        </div>
        <div className={style.socialAndLang}>
          <Social />
          <div className={style.lang}>
            <LenguagesButtons />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TranslateHoc(Menu);
