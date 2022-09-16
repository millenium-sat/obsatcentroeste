import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import { CalendarToday, MapOutlined, PeopleAltOutlined } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Sobre o evento</h2>
          <h5 className={classes.description}>
            A Olimpíada Brasileira de Satélites MCTI é uma Olimpíada Científica
            de abrangência nacional, concebida pelo Ministério da Ciência,
            Tecnologia e Inovações, e organizada pela Universidade Federal de
            São Carlos (UFSCar) em conjunto com a Agência Espacial Brasileira
            (AEB/MCTI), o Instituto Nacional de Pesquisas Espaciais (INPE/MCTI)
            e a Escola de Engenharia de São Carlos (EESC), da Universidade de
            São Paulo (USP).
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Onde acontecerá?"
              description="O evento será realizado na EMAC - Escola de Música e Artes Cênicas - Câmpus 2 da Universidade Federal de Goiás, em Goiânia - GO."
              icon={MapOutlined}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Quando?"
              description="O evento será realizado no dia 17 de Setembro de 2022."
              icon={CalendarToday}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Quem pode participar?"
              description="O evento é aberto a todos os estudantes e público geral, de todo o Brasil."
              icon={PeopleAltOutlined}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
