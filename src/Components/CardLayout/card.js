import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import {
  PieChart, Pie, Cell,
} from 'recharts';

const styles = theme => ({
  card: {
    width: '100%',
    height: 400
  },
  header: {
    backgroundColor: "#455A64",
    color: "#90A4AE",
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '12px 0px 12px 0px',
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    backgroundColor: '#263238'
  },
  topPanel: {
    backgroundColor: "#455A64",
    height: 140,
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
});

class StatusCard extends React.Component {
  getColorTheme = (type) => {
    let NUM_COLOR = "#CDDC39";
    let DONUT_COLORS = [
      NUM_COLOR,
      'rgba(255,255,255,0.1)',
    ];
    switch (type) {
      case 'success':
        NUM_COLOR = "#00E5FF";
        DONUT_COLORS = [
          NUM_COLOR,
          'rgba(255,255,255,0.1)',
        ];
        break;
      case 'error':
        NUM_COLOR = "#F44336";
        DONUT_COLORS = [
          NUM_COLOR,
          'rgba(255,255,255,0.1)',
        ];
        break;
      case 'warning':
        NUM_COLOR = "#FFCA28";
        DONUT_COLORS = [
          NUM_COLOR,
          'rgba(255,255,255,0.1)',
        ];
        break;
      default:
        NUM_COLOR = "#CDDC39";
        DONUT_COLORS = [
          NUM_COLOR,
          'rgba(255,255,255,0.1)',
        ];
        break;
    }
    return { DONUT_COLORS, NUM_COLOR };

  }
  render() {
    const { classes, percentage, type, title } = this.props;
    const { NUM_COLOR, DONUT_COLORS } = this.getColorTheme(type);
    const data = [
      {
        name: 'Completed',
        value: percentage
      },
      {
        name: 'Remaining',
        value: (100 - percentage)
      }
    ];

    return (
        <Card className={classes.card}>
          <span className={classes.header}>{title}</span>
          <div className={classes.topPanel}>
            <PieChart width={220} height={200} onMouseEnter={this.onPieEnter}>
              <Pie
                data={data}
                cx={105}
                cy={60}
                startAngle={210}
                endAngle={-30}
                innerRadius={41}
                outerRadius={59}
                fill="#8884d8"
                paddingAngle={0}
                stroke={0}
                dataKey="value"
              >
                {data.map((_, index) =>
                  <Cell
                    key={`cell-${index}`}
                    fill={DONUT_COLORS[index % DONUT_COLORS.length]} />)}
              </Pie>
            </PieChart>
          </div>
          <CardActions className={classes.actions} disableActionSpacing>
            <div style={{ fontSize: "0.85em", color: "#999" }}>
              Overall Job Progress
            </div>
            <div>
              <span style={{ fontSize: "3em", color: NUM_COLOR }} >
                {percentage}
              </span>
              <span style={{ fontSize: "0.7em", color: "#777" }} >
                10h to finish
              </span>
            </div>
          </CardActions>
        </Card>
    );
  }
}

StatusCard.propTypes = {
  classes: PropTypes.object.isRequired,
  percentage: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default withStyles(styles)(StatusCard);
