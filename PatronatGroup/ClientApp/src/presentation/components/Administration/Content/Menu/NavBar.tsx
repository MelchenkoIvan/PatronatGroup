import { t } from "i18next";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { Container, Menu, Image, Dropdown } from "semantic-ui-react";
import {User} from "../../../../../application/models/User";
import LenguagesButtons from "../../../../../infrastructure/Common/i18n/resources";
import { labels } from "../../../../../infrastructure/Common/i18n/translationsServices";
//icon
import logoImg from "../../../../../assets/LOGO.png";
import userImg from "../../../../../assets/user.png";
interface PropsTypes {
  admin: User,
  Logout:() => void
}
const NavBar:FC<PropsTypes> = ({admin,Logout}) => {
  return (
      <Menu inverted fluid>
      <Container>
        <Menu.Item as={NavLink} to="/" exact header>
          <img
            src={logoImg}
            alt="logo"
            style={{ marginRight: "10px" }}
          />
        </Menu.Item>
        <Menu.Item as={NavLink} to="/admin/clients" name={t(labels.clients)}/>
        <Menu.Item as={NavLink} to="/admin/employees" name={t(labels.employees)} />
        <Menu.Item position="right">
          <Image
            src={userImg}
            avatar
            spaced="right"
          />
          <Dropdown pointing="top left" text={admin.email}>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to="/admin/admins"text={t(labels.admins)} icon="add user" />
              <Dropdown.Item onClick={Logout} text={t(labels.logout)} icon="power" />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
        <Menu.Item>
          <LenguagesButtons />
        </Menu.Item>
      </Container>
    </Menu>
  );
};
export default NavBar;
