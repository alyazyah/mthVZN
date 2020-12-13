import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {FibonacciChart} from '../charts/FibonacciChart';

const styles = {
  paper: {
    margin: '20px',
  }
}

class Fibonacci extends React.Component {

  render(){

    const { classes } = this.props;

    return(
      <Paper elevation={2} className={classes.paper}>
        <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
        >
          <Typography variant='h5'>
            Fibonacci Sequence Visualization
          </Typography>
          <p>The Golden Spiral, derived from the Fibonacci sequence, is a unique ratio that describes many concepts found in nature. The further away the spiral gets from the origin, the wider the spiral becomes. The Golden Spiral has a variety of real world applications: from design and fashion to predicting trends in the financial market. For more explanation on the spiral and its equation, please visit the link at the bottom of this page.</p>

          <FibonacciChart />

          <Typography variant='h6'>
            References
          </Typography>
          <a href="https://www.intmath.com/blog/mathematics/golden-spiral-6512">Equation for Fibonacci Spiral</a>

        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(Fibonacci);
