import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
/* import Button from "@material-ui/core/Button";
import ArrowRightIcon from "@material-ui/icons/ArrowRight"; */

import listSkill from "../../../../data/listSkill";
import Carousel from "../../../../components/Carousel/Carousel";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      <Box>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    /* backgroundColor: theme.palette.background.paper */
    backgroundColor: "#f5f5f5"
  }
}));

function PopularCourses() {
  const classes = useStyles();
  const [value, setValue] = React.useState(listSkill[0].id);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTab = () => {
    return listSkill.map((item, index) => {
      return (
        <Tab
          value={item.id}
          label={item.id}
          key={index}
          {...a11yProps(`${item.id}`)}
        />
      );
    });
  };

  const renderTabPanel = () => {
    return listSkill.map((item, index) => {
      return (
        <TabPanel value={value} index={item.id} key={index}>
          <Carousel ID={index} />
        </TabPanel>
      );
    });
  };

  return (
    <div className="popular-courses">
      <div className="courses container-fluid">
        <div className="courses__title">Popular courses</div>
      </div>

      <div className={classes.root}>
        <div className="popular__header courses container-fluid">
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
              variant="fullWidth"
              textColor="primary"
              indicatorColor="primary"
            >
              {renderTab()}
            </Tabs>
          </AppBar>
          {/*           <Button>
            <ArrowRightIcon /> All
          </Button> */}
        </div>
        {renderTabPanel()}
      </div>
    </div>
  );
}

export default PopularCourses;
