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
import LaunchCountdown from "/containers/LaunchCountDown";
import styles from "/styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "/pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "/pages-sections/LandingPage-Sections/TeamSection.js";
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


function obtenhaDiasAteEvento(tipo) {
  let date_future = new Date('09/17/2022');
  let date_now = new Date();
  // get total seconds between the times
  var delta = Math.abs(date_future - date_now) / 1000;

  // calculate (and subtract) whole days
  var days = Math.floor(delta / 86400);
  delta -= days * 86400;

  // calculate (and subtract) whole hours
  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  // what's left is seconds
  var seconds = Math.floor(delta % 60);  // in theory the modulus is not required

  if (tipo == 'dias'){
    console.log(days);
    return days;
  } else if (tipo == 'horas'){
    console.log(hours);
    return hours;
  } else if (tipo == 'minutos'){
    console.log(minutes);
    return minutes;
  } else {
    console.log(seconds);
    return seconds;
  }

}

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
              <h2>Transmissão ao vivo</h2>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <h3 style={{ color: "black", textAlign: "center" }}>
            <big>17 DE SETEMBRO DE 2022</big>
          </h3>
          <div className={classes.container}>
            <GridContainer spacing={0} alignItems="center" justify="center">

              <LaunchCountdown days={obtenhaDiasAteEvento('dias')}
                             hours={obtenhaDiasAteEvento('horas')}
                             minutes={obtenhaDiasAteEvento('minutos')}
                             seconds={obtenhaDiasAteEvento('segundos')}
            />

            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
