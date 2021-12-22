import React from "react";
//components
import Layout from "./components/Layout";
import Home from "./components/HomePage/Home";
import TranslateHoc from "../infrastructure/Common/hoc/TranslateHoc";
import { Route } from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutCompany from "./components/AboutCompany/AboutCompany";
import Contacts from "./components/Contacts/Contacts";
//styles
import "semantic-ui-css/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../custom.css";


const App = (props: any) => {
  return (
    <Layout>
      <div className="containerLayout">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutCompany" component={AboutCompany} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/aa" component={Header} />
        <Footer/>
      </div>
    </Layout>
  );
};

export default TranslateHoc(App);
