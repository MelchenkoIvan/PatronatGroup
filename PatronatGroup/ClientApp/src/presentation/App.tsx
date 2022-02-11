import React, { FC, useEffect } from "react";
import Layout from "./components/Layout";
import TranslateHoc from "../infrastructure/Common/hoc/TranslateHoc";
import { Route, useHistory } from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutCompany from "./components/AboutCompany/AboutCompany";
import Contacts from "./components/Contacts/Contacts";
import Practices from "./components/Practices/Practices";
import Home from "./components/HomePage/Home";
import LoginFormContainer from "./components/Administration/LoginFormContainer";
import { connect } from "react-redux";
import {User} from "../application/models/User";
import { RootState } from "../application/store/store";
import { ToastContainer } from "react-toastify";
import { getCookie } from "../infrastructure/Services/cookieService";
import i18next from "i18next";
import NavBarContainer from "./components/Administration/Content/Menu/NavBarContainer";
import { get } from "lodash";
import ClientsContainer from "./components/Administration/Content/Clients/ClientsContainer";
import EmployeesContainer from "./components/Administration/Content/Employees/EmployeesContainer";
import RegisterFormContainer from "./components/Administration/RegisterFormContainer";
import * as actions from "../application/store/actions/adminActions"
//styles
import "semantic-ui-css/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../custom.css";
import "react-toastify/dist/ReactToastify.css";
import CommandContainer from "./components/Command/CommandContainer";
import AdminsContainer from "./components/Administration/Content/Admins/AdminsContainer";



interface PropsType {
  admin: User;
  onGetPage: () => void;
}
const App: FC<PropsType> = ({ admin, onGetPage}) => {
  let history = useHistory();
  let isExact = history.location.pathname.includes("/admin");

  useEffect(() => {
    const cookieLang = getCookie("lang");
    
    i18next.changeLanguage(cookieLang);

    if(isExact){
      const cookieToken = getCookie("token");
      cookieToken !== "" && onGetPage();
      cookieToken == "" && history.replace("/admin") ;
    }
  },[isExact,history,onGetPage]);
  

  return (
    <Layout>
      <ToastContainer position="bottom-right" hideProgressBar />
      {isExact ? (
        <div>
          {!admin.token ? (
            <Route exact path="/admin" component={LoginFormContainer} />
          ) : (
            <>
              <NavBarContainer />
              <Route exact path="/admin/clients" component={ClientsContainer} />
              <Route exact path="/admin/employees" component={EmployeesContainer} />
              {admin.isDefaultAdmin && <Route exact path="/admin/admins" component={AdminsContainer} />}
            </>
          )}
        </div>
      ) : (
        <div className="containerLayout">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutCompany" component={AboutCompany} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/practices" component={Practices} />
          <Route exact path="/command" component={CommandContainer} />
          <Footer />
        </div>
      )}
    </Layout>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    admin: get(state, "administration.admin"),
  };
};
let mapDispatchToProps = (dispatch: any) => {
  return {
    onGetPage: () => dispatch(actions.GetCurrentUser())
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default TranslateHoc(AppContainer);
