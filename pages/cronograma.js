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
import Analytics from '/components/Analytics/Analytics.js'
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
              <h2>Cronograma</h2>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <h3 style={{ color: "white", textAlign: "center" }}>
            <big>17 DE SETEMBRO DE 2022 -- 07:00 às 17:30</big>
          </h3>
          <div className={classes.container}>
            <GridContainer spacing={0} alignItems="center" justify="center">
              <GridItem align xs={12} sm={12} md={12}>
                <Timeline className={classes.mainRaised2} theme={customTheme}>
                  <Events>
                    <ImageEvent
                      date="08:00 - 09:00"
                      text="**Credenciamento das equipes <br><br>Local: Entrada da EMAC**"     
                    />
                    <ImageEvent
                      date="09:00 - 9:30"
                      text="**Cerimônia de Abertura <br><br>Local: Auditório<br>Aberto para Equipes e Público**"
                    />
                    <ImageEvent
                      date="09:30 - 10:00"
                      text="**Setup da área de trabalho**"
                    />
                    <ImageEvent 
                      date="10:00 - 11:30" 
                      text="**Avaliação das Equipes nas suas respectivas Áreas de Trabalho <br><br>Local: Tenda das Equipes<br>Aberto para Equipes participantes**"
                    />
                    <ImageEvent
                      date="11:30 - 13:00"
                      text="**Apresentação dos Pitches<br><br>Local: Auditório<br>Aberto para Equipes e Público**"
                    />
                    <ImageEvent
                      date="13:00 - 14:00"
                      text="**Intervalo para almoço**"
                    />
                    <ImageEvent
                      date="14:00 - 15:00"
                      text="**Lançamento das equipes selecionadas <br><br>Local: Pista de lançamento<br>Aberto para Equipes e Público**"
                    />
                    <ImageEvent
                      date="15:00 - 15:30"
                      text="**Palestra: Conhecendo o grupo SkyRocket<br>Palestrante: SkyRocket<br>Resumo:** Nesta palestra, iremos conhecer sobre o grupo de construção de foguetes SkyRocket, criado por estudantes de engenharia do Instituto Federal de Goiás."
                    />
                   <ImageEvent
                      date="15:30 - 16:00"
                      text="**Palestra:  Passos da construção de um satélite LEO para a análise de imagens.<br>Palestrante: Yovani Adolfo Villanueva<br>Resumo:** Com foco na parte prática e com o conhecimento de Yovani, doutorando em matemática e já tendo participado de um lançamento orbital de um satélite , iremos abordar os passos necessários para a construção de um satélite LEO para a análise de imagens."
                   
                    />
                   <ImageEvent
                      date="16:00 - 16:30"
                      text="**Palestra: Conhecendo o grupo Pequi Mecânico<br>Palestrante: Pequi Mecânico<br>Resumo:** Nesta palestra, iremos conhecer sobre o grupo de robótica Pequi Mecânico, criado por estudantes de engenharia da Universidade Federal de Goiás."
                    />
                   <ImageEvent
                      date="16:30 - 17:00"
                      text="**Apresentação SuperTime - Equipes Millenium e Goyasat**"
                    />                  
                   <ImageEvent
                      date="17:00 - 17:30"
                      text="**Cerimônia de Premiação e Encerramento<br><br>Local: Auditório<br>Aberto para Equipes e Público**"
                    />         
                  </Events>
                </Timeline>
              </GridItem>
            </GridContainer>
            <Analytics />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}