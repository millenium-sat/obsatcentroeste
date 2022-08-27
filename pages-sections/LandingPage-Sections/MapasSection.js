import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import dynamic from "next/dynamic";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import {
  CalendarToday,
  DirectionsBusSharp,
  MapOutlined,
  PeopleAltOutlined,
  Restaurant,
} from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  const PDFViewer = dynamic(() => import("/components/Pdf/pdf-viewer"), {
    ssr: false,
  });
  return (
    <div className={classes.section}>
      <div id="mapa"/>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <InfoArea
            title="Mapa do Câmpus"
            icon={MapOutlined}
            description=""
            iconColor="info"
            vertical
          />
          <h5 className={classes.description}>
            Verifique o nome dos prédios e salas do câmpus caso precise se
            localizar!
          </h5>
          <GridItem xs={12} sm={12} md={12}>
          <img
            src="/img/mapasamambaia1.png"
            alt="..."
            width="100%"
            style={{ borderRadius: "20px" }}
            className={classes.container}
          ></img>
          <img
            src="/img/mapasamambaia2.png"
            alt="..."
            width="100%"
            style={{ borderRadius: "20px" }}
            className={classes.container}
          ></img>
</GridItem>
<div id="onibus"/>
          <InfoArea
            title="Transporte Público"
            icon={DirectionsBusSharp}
            description=""
            iconColor="info"
            vertical
          />
          <h5 className={classes.description}>
            Caso vá utilizar transporte público, verifique quais linhas você
            poderá utilizar.
          </h5>

          <img
            src="/img/mapasamambaia3.png"
            alt="..."
            width="300"
            height="500"
            style={{ borderRadius: "20px" }}
            className={classes.container}
          ></img>
      <div id="restaurantes"/>
          <InfoArea
            title="Alimentação"
            icon={Restaurant}
            description=""
            iconColor="info"
            vertical
          />
          <h5 className={classes.description}>
            Para aqueles que passarão o dia no evento, separamos uma lista de
            restaurantes nas proximidades que estarão abertos durante o evento,
            que acontecerá num sábado.
          </h5>
        </GridItem>
      </GridContainer>
      <div></div>
    </div>
  );
}
