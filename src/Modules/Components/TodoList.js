import Grid from "@material-ui/core/Grid";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  todolistHeader: {
    width: "100%",
    backgroundColor: "#afaf6f",
  },
  todolistBody : {
    width:"100%",
    height:"100%",
    maxHeight:"300px",
    overflow:"auto",
    backgroundColor: "#f5f59d",
  }
});

const TodoList = props => (
  <Grid container spacing={8} justify="center">
    {console.log(props)}
    {props.data.map(todo => {
      return (
        <Grid item xs={4} style={{ textAlign: "center", marginTop:"20px" }}>
          <div className={props.classes.todolistHeader}>{todo.title}</div>
          <div className={props.classes.todolistBody}>insert to-do here</div>
        </Grid>
      );
    })}
  </Grid>
);

export default withStyles(styles)(TodoList);
