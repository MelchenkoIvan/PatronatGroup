import React from "react";
//components
import Layout from "./components/Layout";
import Home from "./components/HomePage/Home";
import LenguagesButtons from "../infrastructure/Common/i18n/resources";
//semantic
import "semantic-ui-css/semantic.min.css";

import "../custom.css";
import TranslateHoc from "../infrastructure/Common/hoc/TranslateHoc";
import { Route } from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = (props: any) => {
  return (
    <Layout>
      <div className="containerLayout">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/aa" component={Header} />
        <Footer/>
      </div>
    </Layout>
  );
};

export default TranslateHoc(App);
