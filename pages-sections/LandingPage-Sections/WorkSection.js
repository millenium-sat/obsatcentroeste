import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Localização</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1650.943581851896!2d-49.26051911943647!3d-16.605422191264058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef32b61f9c23b%3A0x76f835e6bfb2a21a!2sEMAC%20-%20Escola%20de%20M%C3%BAsica%20e%20Artes%20C%C3%AAnicas%20da%20UFG!5e1!3m2!1spt-BR!2sbr!4v1663332818519!5m2!1spt-BR!2sbr" width="100%" height="450"></iframe>
        </GridItem>
      </GridContainer>
    </div>
  );
}
