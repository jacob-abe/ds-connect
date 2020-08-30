import React from 'react'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Patient from "@material-ui/icons/Accessible";
import Doctor from "@material-ui/icons/LocalHospital";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

//For login page
import Button from "components/CustomButtons/Button.js";
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);
function SectionChooseType() {
    const classes = useStyles();
    
    return (
        <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} lg={6}>
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "Patient",
                    tabIcon: Patient,
                    tabContent: (
                      <span>
                        <GridItem md={12} className={classes.textCenter}>
                            <Link to={"/login-page"} className={classes.link}>
                            <Button color="primary" size="lg" simple>
                                Meet Doctor
                            </Button>
                            </Link>
                        </GridItem>
                        <br />
                        <p>
                          Come sign-up now to meet your doctor today!
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Doctor",
                    tabIcon: Doctor,
                    tabContent: (
                      <span>
                        <GridItem md={12} className={classes.textCenter}>
                            <Link to={"/login-page"} className={classes.link}>
                            <Button color="primary" size="lg" simple>
                                Join Now
                            </Button>
                            </Link>
                        </GridItem>
                        <br />
                        <p>
                          Come join the DS-Connect family today!
                        </p>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
    )
}

export default SectionChooseType
