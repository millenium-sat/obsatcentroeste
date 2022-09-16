import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import MapasSection from "/pages-sections/LandingPage-Sections/MapasSection.js";
import TeamSection from "/pages-sections/LandingPage-Sections/TeamSection.js";
import InfoArea from "/components/InfoArea/InfoArea.js";
import {
  CalendarToday,
  MapOutlined,
  PeopleAltOutlined,
} from "@material-ui/icons";

import WorkSection from "/pages-sections/LandingPage-Sections/WorkSection.js";

import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  TextEvent,
  YouTubeEvent,
  createTheme,
  themes,
} from "@merc/react-timeline";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: "#efefef",
  },
  date: {
    backgroundColor: "rebeccapurple",
  },
  marker: {
    borderColor: "rebeccapurple",
  },
  timelineTrack: {
    backgroundColor: "rebeccapurple",
  },
});

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="OBSAT Centro-Oeste"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter responsive image="/img/landing-bg.jpg">
        <div className={classNames(classes.container, classes.mainRaised3)}>
          <GridContainer alignItems="center" justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <img
                src="/img/logobsat.png"
                alt="..."
                className={classes.container}
              ></img>
              <h2>Sobre o evento</h2>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <MapasSection />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1650.943581851896!2d-49.26051911943647!3d-16.605422191264058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef32b61f9c23b%3A0x76f835e6bfb2a21a!2sEMAC%20-%20Escola%20de%20M%C3%BAsica%20e%20Artes%20C%C3%AAnicas%20da%20UFG!5e1!3m2!1spt-BR!2sbr!4v1663332818519!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}