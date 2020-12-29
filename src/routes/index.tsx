import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../pages/Contact";
const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
