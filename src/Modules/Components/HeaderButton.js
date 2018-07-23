import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    width: "100%",
    height: "100px",
    marginTop: "30px",
    marginBottom: "30px",
    color: "white",
    backgroundColor: "#e2e28d"
  }
});

const HeaderButton = props => (
  <Grid container spacing={8} justify="center">
    <Grid item xs={3} style={{ textAlign: "center" }}>
      <Button className={props.classes.button} onClick={props.handleClick}>
        ADD A TODO
      </Button>
    </Grid>
  </Grid>
);

export default withStyles(styles)(HeaderButton);
