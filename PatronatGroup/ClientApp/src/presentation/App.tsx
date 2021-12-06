import React from "react";
//components
import Layout from "./components/Layout";
import Home from "./components/HomePage/Home";
import LenguagesButtons from "../infrastructure/Common/i18n/resources";
//semantic
import "semantic-ui-css/semantic.min.css";

import "../custom.css";
import TranslateHoc from "../infrastructure/Common/hoc/TranslateHoc";

const App = (props:any) => {
  return (
    <Layout>
      <Home />
      {/* <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} /> */}
      <LenguagesButtons />
    </Layout>
  );
};

export default TranslateHoc(App);