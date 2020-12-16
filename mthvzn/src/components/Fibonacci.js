import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {FibonacciChart} from '../charts/FibonacciChart';
import fib1 from './fib1.gif';
import fib2 from './fib2.gif';

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
          <p><center>The Golden Spiral, derived from the Fibonacci sequence, is a unique ratio that describes many concepts found in nature. The further away the spiral gets from the origin, the wider the spiral becomes. The Golden Spiral has a variety of real world applications: from design and fashion to predicting trends in the financial market.</center></p>
          <p><center>To begin, the areas of the first 6 Fibonacci numbers are graphed. As shown in the GIF, these areas naturally fit and connect to each other when they are graphed. After drawing a square, it connects to the last one, in order to create a square that is the sum of the two previously drawn squares. This is what occurs in the Fibonacci sequence. </center></p>
          <p><center><img src={fib1} alt="GIF of first 6 Fibonacci numbers graphed" /></center></p>
          <p><center>To create a spiral, we will use circles. The GIF below shows how the circles are used to create a spiral with each grouping of squares. Finally, you will be able to see how the spiral can be found in nature. For more explanation on the spiral and its equation, please visit the link at the bottom of this page.</center></p>
          <p><center><img src={fib2} alt="GIF of spiral formation" /></center></p>
          <p><center>Now, try it out yourself!</center></p>


          <FibonacciChart />

          <Typography variant='h6'>
            References
          </Typography>
          <a href="https://www.intmath.com/blog/mathematics/golden-spiral-6512">Equation for Fibonacci Spiral</a>
          <a href="https://www.youtube.com/watch?v=8A3JnWzgXGk&ab_channel=RestoreThePlanet">Understanding The Fibonacci Spiral</a>

        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(Fibonacci);
