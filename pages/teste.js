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
import ProductSection from "/pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "/pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "/pages-sections/LandingPage-Sections/WorkSection.js";
import SectionTabs from "/pages-sections/Components-Sections/SectionTabs.js";
import CustomTabs from "/components/CustomTabs/CustomTabs.js";
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";

import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  TextEvent,
  YouTubeEvent,
} from '@merc/react-timeline';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    
    <div alignItems="top" style={{backgroundImage:"url(/img/landing-bg.jpg)"}}>
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="OBSAT Centro-Oeste"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 800,
          color: "white",
        }}
        {...rest}
      />


      <h3 style={{ color: "white", textAlign: "center"}}>
            <big>17 DE SETEMBRO DE 2022 -- 07:00 às 17:30</big>
      </h3>
        <div className={classes.container}>
          <GridContainer spacing={0} alignItems="center" justify="center" >
            <GridItem align xs={12} sm={12} md={8}>
              <Timeline>
                <Events>
                  <TextEvent date="07:00 - 08:00" text="**Credenciamento**" />
                  <TextEvent date="08:00 - 09:00" text="**Montagem das Mesas e dos Nanossatélites <br><br>Local: Tenda das Equipes **" />
                  <TextEvent date="09:00 - 12:00" text="**Avaliação Técnica dos Satélites <br><br>Local: Sala de avaliação e tendas das equipes**" />
                  <TextEvent date="12:00 - 13:00" text="**Apresentação dos Pitches <br><br>Local: Auditório**" />
                  <TextEvent date="13:00 - 14:00" text="**Almoço**" />
                  <TextEvent date="14:00 - 14:30" text="**Divulgação do Resultado Final <br><br>Local: Auditório**" />
                  <TextEvent date="14:50 - 15:00" text="**Integração dos satélites no balão**" />
                  <TextEvent date="15:00 - 16:00" text="**Lançamento do balão <br><br>Local: Pista de lançamento**" />
                  <TextEvent date="16:00 - 16:30"  text="**Cerimônia de premiação  <br><br>Local: Auditório**" />
                  <TextEvent date="16:30 - 17:30"  text="**Rastreamento e Recuperação do Balão Estratosférico e dos Satélites**" />
                </Events>
              </Timeline>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
