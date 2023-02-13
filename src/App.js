import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import "./App.scss";
import {
  Navbar,
  Header,
  Intro,
  Testimonial,
  FeaturedProjects,
  Contact,
} from "./constants/componentReft";

const App = () => {
  <Helmet>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="Explore the dynamic portfolio of Neeraj Kumar Yadav , a Front-End Developer, showcasing expertise in HTML, CSS, JavaScript, React and more."
    />
    <meta
      name="keywords"
      content="yaduvanshiNK, portfolio webiste, Front-End Developer, react developer, JavaScript developer"
    />
    <meta name="author" content="yaduvanshiNK" />
    <title>yaduvanshiNK | Frontend Developer</title>
  </Helmet>;
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Intro />
      <FeaturedProjects />
      <Testimonial />
      <Contact />
    </Fragment>
  );
};

export default App;
