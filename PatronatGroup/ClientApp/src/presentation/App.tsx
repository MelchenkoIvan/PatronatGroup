import React from "react";
//components
import Layout from "./components/Layout";
import TranslateHoc from "../infrastructure/Common/hoc/TranslateHoc";
import { Route } from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutCompany from "./components/AboutCompany/AboutCompany";
import Contacts from "./components/Contacts/Contacts";
import Practices from "./components/Practices/Practices";
import Command from "./components/Command/Command";
import Home from "./components/HomePage/Home";

import { ToastContainer } from "react-toastify";
//styles
import "semantic-ui-css/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../custom.css";
import 'react-toastify/dist/ReactToastify.css'



const App = (props: any) => {
  return (
    <Layout>
       <ToastContainer position='bottom-right' hideProgressBar />
      <div className="containerLayout">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutCompany" component={AboutCompany} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/practices" component={Practices} />
        <Route exact path="/command" component={Command} />
        <Footer/>
      </div>
    </Layout>
  );
};

export default TranslateHoc(App);
