import React, { Fragment } from "react";
import "./App.scss";
import {
  Navbar,
  Header,
  Intro,
  Testimonial,
  FeaturedProjects,
} from "./constants/componentReft";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Intro />
      <FeaturedProjects />
      <Testimonial />
    </Fragment>
  );
};

export default App;
