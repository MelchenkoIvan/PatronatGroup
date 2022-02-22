import React, { FC } from "react";

import Menu from "./Menu/Menu";
//style
import style from "./Header.module.css";
import styleMenu from "./Menu/Menu.module.css";
//icons
import logo from "../../../assets/LOGO.png";
import TranslateHoc from "../../../infrastructure/Common/hoc/TranslateHoc";

const Header: FC = () => {
  const onClickMenu = () => {
    var div = document.getElementById(style.containerButton);
    div && div.classList.toggle(style.change);
    var menu = document.getElementById(styleMenu.menu);
    menu && menu.classList.toggle(styleMenu.showMenu);
  };
  return (
    <div className={style.header}>
      <img src={logo} alt={logo} className={style.logo} />
      <Menu />
      <div id={style.containerButton} onClick={onClickMenu}>
        <div className={style.bar1}></div>
        <div className={style.bar2}></div>
        <div className={style.bar3}></div>
      </div>
    </div>
  );
};
export default TranslateHoc(Header);
