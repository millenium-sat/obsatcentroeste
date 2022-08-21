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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2190.070006971043!2d-49.263835306767675!3d-16.60291889711333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef335e9ae5c59%3A0xa44bb280fb99fa6e!2sCh%C3%A1caras%20Calif%C3%B3rnia%2C%20Goi%C3%A2nia%20-%20GO%2C%2074045-155!5e1!3m2!1spt-BR!2sbr!4v1661113826407!5m2!1spt-BR!2sbr" width="100%" height="450"></iframe>
        </GridItem>
      </GridContainer>
    </div>
  );
}
