import React, { Component } from 'react';
import StatusCard from './Components/CardLayout/card';
import Grid from '@material-ui/core/Grid';
import './App.css';

class App extends Component {
  render() {
    const xs = 8;
    const sm = 8;
    const md = 3;
    const lg = 3;
    const xl = 3;

    return (
      <div>
        <Grid container justify="center" spacing={8}>
          <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
            <StatusCard type="success" percentage={30} title="JS001" />
          </Grid>
          <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
            <StatusCard type="error" percentage={10} title="JE002" />
          </Grid>
          <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
            <StatusCard type="warning" percentage={10} title="JW003" />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
