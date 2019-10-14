import React, { Component } from "react";

type Props = {
  colorsState: object, // foo is required.
  colorsNow: object, // bar is required
  color: string,
  active: boolean
};

class ColorFilterItem extends Component<Props> {
  handleClick = () => {
    const colorsNow = Object.assign({}, this.props.colorsState);
    colorsNow[this.props.color] = !this.props.active;

    let doReset = true;
    for (const key of Object.keys(colorsNow)) {
      if (colorsNow[key] !== false) doReset = false;
    }
    if (doReset === true) {
      for (const key of Object.keys(colorsNow)) {
        colorsNow[key] = true;
      }
    }
    // set new color filter here
    this.props.updateColorFilters(colorsNow);
  };

  render() {
    let setClass = this.props.active === true ? "active" : "inactive";
    setClass = `${setClass} square-${this.props.color}`;
    return (
      <div
        className={setClass}
        id={this.props.keySet}
        key={this.props.keySet}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default ColorFilterItem;
