import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, withStyles } from "material-ui";

import footerStyle from "variables/styles/footerStyle";

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#home" className={classes.block}>
                Home
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/dashboard" className={classes.block}>
                DashBoard
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="http://99.73.162.183:3000/" target="_blank" rel="noopener noreferrer" className={classes.block}>
                MarketPlace
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://www.coindesk.com" target="_blank" rel="noopener noreferrer" className={classes.block}>
                Coindesk
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
          </span>
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
