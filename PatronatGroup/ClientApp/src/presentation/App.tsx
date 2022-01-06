import React, { FC } from "react";
//components
import Layout from "./components/Layout";
import TranslateHoc from "../infrastructure/Common/hoc/TranslateHoc";
import { Route, useRouteMatch } from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutCompany from "./components/AboutCompany/AboutCompany";
import Contacts from "./components/Contacts/Contacts";
import Practices from "./components/Practices/Practices";
import Command from "./components/Command/Command";
import Home from "./components/HomePage/Home";
import LoginFormContainer from "./components/Administration/LoginFormContainer";
import { connect } from "react-redux";
import User from "../application/models/User";
import { RootState } from "../application/store/store";
import { ToastContainer } from "react-toastify";
import AdminPage from "./components/Administration/Content/AdminPage";
//styles
import "semantic-ui-css/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../custom.css";
import "react-toastify/dist/ReactToastify.css";

interface PropsType{
  admin: User
}
const App:FC<PropsType> = ({admin}) => {
  let match = useRouteMatch("/admin");

  return (
    <Layout>
      <ToastContainer position="bottom-right" hideProgressBar />
      {match?.isExact ? (
      <div>
          {!admin.email ? <Route exact path="/admin" component={LoginFormContainer} /> 
          : <Route exact path="/admin" component={AdminPage} /> }
         
      </div>
       
      ) : (
        <div className="containerLayout">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutCompany" component={AboutCompany} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/practices" component={Practices} />
          <Route exact path="/command" component={Command} />
          <Footer />
        </div>
      )}
    </Layout>
  );
};


const mapStateToProps = (state:RootState) => {
  return{
    admin: state.administration.admin
  }
};
let mapDispatchToProps = (dispatch:any) =>{
  return{
  }
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default TranslateHoc(AppContainer);
