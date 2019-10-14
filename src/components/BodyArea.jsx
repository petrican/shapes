import React, { Component } from "react";
import MainFilters from "./MainFilters";
import FilterTitle from "./FilterTitle";
import ListingContainer from "./ListingContainer";
import { baseUrl } from '../helpers/index';
import axios from 'axios';

export class BodyArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shapes: ["ROUND", "SQUARE", "TRIANGLE", "OVAL", "RECTANGLE"],
      shapesState: {
        ROUND: true,
        SQUARE: true,
        TRIANGLE: true,
        OVAL: true,
        RECTANGLE: true
      },
      colors: ["grey", "yellow", "blue", "green", "red", "purple"],
      colorsState: {
        grey: true,
        yellow: true,
        blue: true,
        green: true,
        red: true,
        purple: true
      },
      title: "All items",
      data: []
    }
  }

  updateNameFilters = (newShapes) => {
    this.setState({shapesState: newShapes});
  } 

  updateColorFilters = (newColor) => {
    this.setState({colorsState: newColor});
  }
  
  componentDidMount() {
    // get items here 
    axios(`${baseUrl}/shapes.json`)
    .then((res) => {
      this.setState({data: res.data});
    })
    .catch((err) => {
      console.log(err); 
    });
  }

  render() {
    return (
      <div className="body-area">
        <MainFilters
          shapes={this.state.shapes}
          colors={this.state.colors}
          shapesState={this.state.shapesState}
          colorsState={this.state.colorsState}
          updateNameFilters={this.updateNameFilters}
          updateColorFilters={this.updateColorFilters}
        />
        <FilterTitle {...this.state} />
        <ListingContainer
          items={this.state.data}
          shapesState={this.state.shapesState}
          colorsState={this.state.colorsState}
        />
      </div>
    );
  }
}

export default BodyArea;
