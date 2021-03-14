import React, { Component } from "react";

import css from './Filter.module.css'

class Filter extends Component {
  
  handleChange = (e) => {
    const { value } = e.target;

    this.props.filter( value );
  };

  
  render() {
    return (
      <div className={css.filter}>
        <label htmlFor="filter">Find contacts by the name</label>
        <input name="filter" id="filter" onChange={this.handleChange} autocomplete='off'/>
      </div>
    );
  }
}

export default Filter;
