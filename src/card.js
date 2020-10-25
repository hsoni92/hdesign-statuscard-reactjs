import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import red from '@material-ui/core/colors/red';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';

const data = [
  { name: 'Group A', value: 60 },
  { name: 'Group B', value: 40 },
];
const COLORS = [
'rgba(255,255,255,0.7)',
'rgba(255,255,255,0.3)',
];

const styles = theme => ({
  card: {
    width: 220,
    height: 350,
  },
  header: {
    backgroundColor: "#d81b60",
    color: "#fff",
    width: "100%",
    height:30,
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '12px 0px 12px 0px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    height:165,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  topPanel: {
    backgroundColor: "#d81b60",
    height: "130px",
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <span className={classes.header}>Job001</span>
        <div className={classes.topPanel}>

          <PieChart width={400} height={200} onMouseEnter={this.onPieEnter}>
            
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
              {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
              }
            </Pie>

          </PieChart>


        </div>
        <CardActions className={classes.actions} disableActionSpacing>
          <div style={{fontSize:"0.85em", color:"#999"}}>Overall Job Progress</div>
          <div><span style={{fontSize:"3em", color:"#d81b60"}} >37</span><span style={{fontSize:"0.7em", color:"#777"}} >10h to finish</span></div>
        </CardActions>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
