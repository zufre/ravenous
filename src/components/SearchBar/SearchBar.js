import React, { Component } from "react";

import "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest rated": "rating",
  "Most Reviewed": "review_count"
};

class SearchBar extends Component {
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  }
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions}</ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div class="SearchBar-submit">
          <a href="!#">Let's Go</a>
        </div>
      </div>
    );
  }
}
export default SearchBar;
