import React from 'react';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';
import Yelp from '../../util/Yelp';

/**
 * Main App Component
 */
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: [],
    };

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`); /* eslint-disable-line */
    Yelp.search(term, location, sortBy).then((businesses) => {
      this.setState({
        businesses,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList business={this.state.businesses} />
      </div>
    );
  }
}

export default App;
