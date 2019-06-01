import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">{this.props.count} products found.</div>
        <div className="col-md-4">
          <label htmlFor="sort">Order by</label>
          <select
            className="form-control"
            name="sort"
            id="sort"
            value={this.props.sort}
            onChange={this.props.handleChangeSort}
          >
            <option value="">Select</option>
            <option value="lowest">lowest to highest</option>
            <option value="highest">highest to lowest</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="size">Filter size</label>
          <select
            className="form-control"
            name="size"
            id="size"
            value={this.props.size}
            onChange={this.props.handleChangeSize}
          >
            <option value="">All</option>
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
          </select>
        </div>
      </div>
    );
  }
}
