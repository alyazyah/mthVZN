import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import {
  XYPlot,
  Borders,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeries,
} from 'react-vis';
import 'react-vis/dist/style.css';

export class FibonacciChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {data: [], slider_val: 7};
  }

  createData = () => {
    var t, r, data_points = [];

    for (t = 0; t < this.state.slider_val; t+=0.075) {
      r = Math.pow(Math.E, 0.30635*t);
      data_points.push({x: r * Math.cos(t), y: r * Math.sin(t)});
    }

    this.setState({data: data_points});
  }

  handleSliderChange = (e, value) => {
    this.setState({slider_val: value});
    this.createData();
  };

  componentDidMount(){
    this.createData();
  }

  render(){
    return(
      <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="center"
      >
        <XYPlot width={500} height={500}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <MarkSeries
            className="fibonacci-viz"
            animation="gentle"
            strokeWidth={1}
            opacity="0.75"
            sizeRange={[5, 15]}
            data={this.state.data}
          />
      </XYPlot>

      <Slider
          value={this.state.slider_val}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={15}
          onChange={this.handleSliderChange}
      />
    </Grid>
    );
  }
}
