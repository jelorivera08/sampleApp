import React, { Component } from "react";
import Header from "./Modules/Containers/Header";
import Grid from '@material-ui/core/Grid'

class App extends Component {
  render() {
    return (
      <Grid container spacing={8} className="App">
        <Header />
      </Grid>
    );
  }
}

export default App;
