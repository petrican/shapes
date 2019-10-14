import React, { Component } from "react";

type Props = {
  colorsState: object, 
  colorsNow: object,
  item: string,
  active: boolean
};

class NameFilterItem extends Component<Props> {
  handleClick = () => {
    const shapesNow = Object.assign({}, this.props.shapesState);
    shapesNow[this.props.item] = !this.props.active;
    let doReset = true;
    for (const key of Object.keys(shapesNow)) {
      if (shapesNow[key] !== false) doReset = false;
    }
    if (doReset === true) {
      for (const key of Object.keys(shapesNow)) {
        shapesNow[key] = true;
      }
    }
    // set new named filter here
    this.props.updateNameFilters(shapesNow);
  };

  render() {
    const activeFlag =
      this.props.active === true ? "name-active" : "name-inactive";
    return (
      <li
        className={activeFlag}
        key={this.props.setKey}
        onClick={this.handleClick}
      >
        {this.props.item}
      </li>
    );
  }
}

export default NameFilterItem;
