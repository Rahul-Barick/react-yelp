import React from 'react';
import './SearchBar.css';

/**
 * Class Search Bar
 */
class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match',
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count',
    };
  }

  /**
   * Determine which option has been selected
   *
   * @param {String} sortByOption
   *
   * Returns current css class for
   * selecting sorting option
   */
  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    }

    return '';
  }

  /**
   * A method sets the state of sorting option
   *
   * @param {String} sortByOption
   */
  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption,
    });
  }

  /**
   * A method that sets the state of the
   * term searched in imput search bar
   *
   * @param {Object} event
   */
  handleTermChange(event) {
    this.setState({
      term: event.target.value,
    });
  }

  /**
   * A method that sets the state of the
   * location search in the input search bar
   *
   * @param {Object} event
   */
  handleLocationChange(event) {
    this.setState({
      location: event.target.value,
    });
  }

  /**
   * Handle search when Let's Go Button is clicked
   * @param {Object} event
   */
  handleSearch(event) {
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy,
    );
    event.preventDefault();
  }

  /**
   * Dynamically create the list of items
   * needed to display the sort options.
   */
  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      const sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          className={this.getSortByClass(sortByOptionValue)}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input
            placeholder="Search Businesses"
            onChange={this.handleTermChange}
          />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <button onClick={this.handleSearch}>Let's Go</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
