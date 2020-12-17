import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import StatusCard from './Components/CardLayout/card';
import Grid from '@material-ui/core/Grid';
import './App.css';

class App extends Component {
  render() {
    const xs = 8;
    const sm = 8;
    const md = 4;
    const lg = 3;
    const xl = 3;

    return (
      <Scrollbars style={{ height: '100vh', width: '100vw' }}>
        <Grid className="outer-grid-container" container justify="center" spacing={2}>
          <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
            <Grid container justify="center" spacing={4}>
              <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                <StatusCard type="success" percentage={47}
                  progressInfo="Deploying Containers 11/20"
                  duration="12h"
                  title="JS001" />
              </Grid>
              <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                <StatusCard type="error" percentage={64}
                  duration="0h"
                  progressInfo="Failed to deploy containers 9/20" title="JE002" />
              </Grid>
              <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                <StatusCard type="warning" percentage={88}
                  duration="17h"
                  progressInfo="Failed to cleanup stale containers 1/20" title="JW003" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Scrollbars>
    );
  }
}

export default App;
