import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import CustomTabs from "/components/CustomTabs/CustomTabs.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js";


const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (

    <div id="nav-tabs">
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
        
          <h3 style={{ color: "white", textAlign: "center"}}>
            <big>17 DE SETEMBRO DE 2022 -- 07:00 às 17:30</big>
          </h3>
          <CustomTabs
            headerColor="danger"
            tabs={[
              {
                tabName: "7:00 - 7:30",
                //tabIcon: Face,
                tabContent: (
                  <p className={classes.textCenter}>
                    Vitae. Class semper pede senectus. Interdum arcu posuere Natoque. Nullam nisl integer morbi phasellus facilisi semper tempor condimentum velit eu. Potenti morbi dui suscipit inceptos pretium. Lacinia viverra Ullamcorper, mauris semper aliquam cras curae; elit justo est est penatibus proin mollis molestie vestibulum nullam auctor ante mollis. Lorem praesent pretium Montes metus mattis taciti et. Cum class ullamcorper pulvinar neque penatibus cubilia. Pellentesque suspendisse. Laoreet ullamcorper ipsum ipsum. Elit nisl vivamus fringilla phasellus condimentum erat hac iaculis egestas faucibus vulputate nonummy pretium pretium senectus aliquet, feugiat mauris ipsum. Taciti sociis mus orci. Posuere, ligula ac amet. Ridiculus primis sociosqu, diam.
                  </p>
                )
              },
              {
                tabName: "8:00 - 8:30",
                //tabIcon: Chat,
                tabContent: (
                  <p className={classes.textCenter}>
                    Vitae. Class semper pede senectus. Interdum arcu posuere Natoque. Nullam nisl integer morbi phasellus facilisi semper tempor condimentum velit eu. Potenti morbi dui suscipit inceptos pretium. Lacinia viverra Ullamcorper, mauris semper aliquam cras curae; elit justo est est penatibus proin mollis molestie vestibulum nullam auctor ante mollis. Lorem praesent pretium Montes metus mattis taciti et. Cum class ullamcorper pulvinar neque penatibus cubilia. Pellentesque suspendisse. Laoreet ullamcorper ipsum ipsum. Elit nisl vivamus fringilla phasellus condimentum erat hac iaculis egestas faucibus vulputate nonummy pretium pretium senectus aliquet, feugiat mauris ipsum. Taciti sociis mus orci. Posuere, ligula ac amet. Ridiculus primis sociosqu, diam.
                  </p>
                )
              },
              {
                tabName: "9:00 - 11:30",
                //tabIcon: Face,
                tabContent: (
                  <p className={classes.textCenter}>
                    Vitae. Class semper pede senectus. Interdum arcu posuere Natoque. Nullam nisl integer morbi phasellus facilisi semper tempor condimentum velit eu. Potenti morbi dui suscipit inceptos pretium. Lacinia viverra Ullamcorper, mauris semper aliquam cras curae; elit justo est est penatibus proin mollis molestie vestibulum nullam auctor ante mollis. Lorem praesent pretium Montes metus mattis taciti et. Cum class ullamcorper pulvinar neque penatibus cubilia. Pellentesque suspendisse. Laoreet ullamcorper ipsum ipsum. Elit nisl vivamus fringilla phasellus condimentum erat hac iaculis egestas faucibus vulputate nonummy pretium pretium senectus aliquet, feugiat mauris ipsum. Taciti sociis mus orci. Posuere, ligula ac amet. Ridiculus primis sociosqu, diam.
                  </p>
                )
              },
              {
                tabName: "12:00 - 12:30",
                //tabIcon: Face,
                tabContent: (
                  <p className={classes.textCenter}>
                    Vitae. Class semper pede senectus. Interdum arcu posuere Natoque. Nullam nisl integer morbi phasellus facilisi semper tempor condimentum velit eu. Potenti morbi dui suscipit inceptos pretium. Lacinia viverra Ullamcorper, mauris semper aliquam cras curae; elit justo est est penatibus proin mollis molestie vestibulum nullam auctor ante mollis. Lorem praesent pretium Montes metus mattis taciti et. Cum class ullamcorper pulvinar neque penatibus cubilia. Pellentesque suspendisse. Laoreet ullamcorper ipsum ipsum. Elit nisl vivamus fringilla phasellus condimentum erat hac iaculis egestas faucibus vulputate nonummy pretium pretium senectus aliquet, feugiat mauris ipsum. Taciti sociis mus orci. Posuere, ligula ac amet. Ridiculus primis sociosqu, diam.
                  </p>
                )
              },
              {
                tabName: "13:00 - 13:30",
                //tabIcon: Face,
                tabContent: (
                  <p className={classes.textCenter}>
                    Vitae. Class semper pede senectus. Interdum arcu posuere Natoque. Nullam nisl integer morbi phasellus facilisi semper tempor condimentum velit eu. Potenti morbi dui suscipit inceptos pretium. Lacinia viverra Ullamcorper, mauris semper aliquam cras curae; elit justo est est penatibus proin mollis molestie vestibulum nullam auctor ante mollis. Lorem praesent pretium Montes metus mattis taciti et. Cum class ullamcorper pulvinar neque penatibus cubilia. Pellentesque suspendisse. Laoreet ullamcorper ipsum ipsum. Elit nisl vivamus fringilla phasellus condimentum erat hac iaculis egestas faucibus vulputate nonummy pretium pretium senectus aliquet, feugiat mauris ipsum. Taciti sociis mus orci. Posuere, ligula ac amet. Ridiculus primis sociosqu, diam.
                  </p>
                )
              },
              {
                tabName: "14:00 - 15:30",
                //tabIcon: Face,
                tabContent: (
                  <p className={classes.textCenter}>
                    Vitae. Class semper pede senectus. Interdum arcu posuere Natoque. Nullam nisl integer morbi phasellus facilisi semper tempor condimentum velit eu. Potenti morbi dui suscipit inceptos pretium. Lacinia viverra Ullamcorper, mauris semper aliquam cras curae; elit justo est est penatibus proin mollis molestie vestibulum nullam auctor ante mollis. Lorem praesent pretium Montes metus mattis taciti et. Cum class ullamcorper pulvinar neque penatibus cubilia. Pellentesque suspendisse. Laoreet ullamcorper ipsum ipsum. Elit nisl vivamus fringilla phasellus condimentum erat hac iaculis egestas faucibus vulputate nonummy pretium pretium senectus aliquet, feugiat mauris ipsum. Taciti sociis mus orci. Posuere, ligula ac amet. Ridiculus primis sociosqu, diam.
                  </p>
                )
              },
              {
                tabName: "16:00 - 17:30",
                //tabIcon: Face,
                tabContent: (
                  <p className={classes.textCenter}>
                    Vitae. Class semper pede senectus. Interdum arcu posuere Natoque. Nullam nisl integer morbi phasellus facilisi semper tempor condimentum velit eu. Potenti morbi dui suscipit inceptos pretium. Lacinia viverra Ullamcorper, mauris semper aliquam cras curae; elit justo est est penatibus proin mollis molestie vestibulum nullam auctor ante mollis. Lorem praesent pretium Montes metus mattis taciti et. Cum class ullamcorper pulvinar neque penatibus cubilia. Pellentesque suspendisse. Laoreet ullamcorper ipsum ipsum. Elit nisl vivamus fringilla phasellus condimentum erat hac iaculis egestas faucibus vulputate nonummy pretium pretium senectus aliquet, feugiat mauris ipsum. Taciti sociis mus orci. Posuere, ligula ac amet. Ridiculus primis sociosqu, diam.
                  </p>
                )
              },
              {
                tabName: "12:00 - 12:30",
                //tabIcon: Face,
                tabContent: (
                  <p className={classes.textCenter}>
                    Vitae. Class semper pede senectus. Interdum arcu posuere Natoque. Nullam nisl integer morbi phasellus facilisi semper tempor condimentum velit eu. Potenti morbi dui suscipit inceptos pretium. Lacinia viverra Ullamcorper, mauris semper aliquam cras curae; elit justo est est penatibus proin mollis molestie vestibulum nullam auctor ante mollis. Lorem praesent pretium Montes metus mattis taciti et. Cum class ullamcorper pulvinar neque penatibus cubilia. Pellentesque suspendisse. Laoreet ullamcorper ipsum ipsum. Elit nisl vivamus fringilla phasellus condimentum erat hac iaculis egestas faucibus vulputate nonummy pretium pretium senectus aliquet, feugiat mauris ipsum. Taciti sociis mus orci. Posuere, ligula ac amet. Ridiculus primis sociosqu, diam.
                  </p>
                )
              },
              {
                tabName: "13:00 - 13:30",
                //tabIcon: Build,
                tabContent: (
                  <p className={classes.textCenter}>
                    Vitae. Class semper pede senectus. Interdum arcu posuere Natoque. Nullam nisl integer morbi phasellus facilisi semper tempor condimentum velit eu. Potenti morbi dui suscipit inceptos pretium. Lacinia viverra Ullamcorper, mauris semper aliquam cras curae; elit justo est est penatibus proin mollis molestie vestibulum nullam auctor ante mollis. Lorem praesent pretium Montes metus mattis taciti et. Cum class ullamcorper pulvinar neque penatibus cubilia. Pellentesque suspendisse. Laoreet ullamcorper ipsum ipsum. Elit nisl vivamus fringilla phasellus condimentum erat hac iaculis egestas faucibus vulputate nonummy pretium pretium senectus aliquet, feugiat mauris ipsum. Taciti sociis mus orci. Posuere, ligula ac amet. Ridiculus primis sociosqu, diam.
                  </p>
                )
              }
              
            ]}
          />
        
        </GridItem>
      </GridContainer>
    </div>
  );
}
