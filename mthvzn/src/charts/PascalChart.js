import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import {
  XYPlot,
  XAxis,
  YAxis,
  Borders,
  VerticalGridLines,
  HorizontalGridLines,
  LabelSeries,
} from 'react-vis';
import 'react-vis/dist/style.css';

export class PascalChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {data: [], rows: [], slider_val: 4};

    this.calcPascals = this.calcPascals.bind(this);
    this.createData = this.createData.bind(this);
  }

  calcPascals = (numRows) => {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];
    let result = [];
    for (let row = 1; row <= numRows; row++) {
        let arr = [];
        for (let col = 0; col < row; col++) {
            if (col === 0 || col === row - 1) {
                arr.push(1);
            } else {
                arr.push((result[row-2][col-1] + result[row-2][col]));
            }
        }
        result.push(arr);
    }
    this.setState({rows: result});
  }

  async createData() {
    var data_points = [];
    await this.calcPascals(this.state.slider_val);

    // push base case, the "tip" of Pascal's triangle
    data_points.push({x: 0, y: 0, label: '1'});
    // console.log(this.state.rows);

    var start = -1;
    var x_pos;

    for(var i = 1; i < this.state.rows.length; i++) {
      for (var j = 0; j < this.state.rows[i].length; j++) {
        if (j == 0) {
          x_pos = start;
          data_points.push({x: x_pos, y: i, label: `${this.state.rows[i][j]}`});
        }
        else {
          x_pos += 2;
          data_points.push({x: x_pos, y: i, label: `${this.state.rows[i][j]}`});
        }
      }
      start--;
    }

    // console.log(data_points)
    this.setState({data: data_points});
  }

  handleSliderChange = (e, value) => {
    this.setState({slider_val: value});
    this.createData();
  };

  async componentDidMount(){
    // await this.calcPascals(this.state.slider_val);
    await this.createData();
  }

  render(){
    return(
      <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="center"
      >
        <XYPlot yDomain={[0, this.state.rows.length]} width={700} height={500}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LabelSeries
            animation="gentle"
            className='pascal-viz'
            radius={20}
            colorRange={['orange', 'cyan']}
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
