/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "/components/CustomDropdown/CustomDropdown.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="SOBRE O EVENTO"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/cronograma">
              <a className={classes.dropdownLink}>CRONOGRAMA</a>
            </Link>,
            <Link href="/mapa#mapa">
              <a className={classes.dropdownLink}>MAPA</a>
            </Link>,
            <Link href="/mapa#onibus">
              <a className={classes.dropdownLink}>PONTOS DE ONIBUS</a>
            </Link>,
            <Link href="/mapa#restaurantes">
            <a className={classes.dropdownLink}>RESTAURANTES PRÓXIMOS</a>
          </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/aovivo" color="transparent" className={classes.navLink}>
          <Icon className={classes.icons}>unarchive</Icon> ACOMPANHAR AO VIVO
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Siga nosso Instagram!"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/npaufg"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
