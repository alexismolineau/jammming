import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
  constructor(props){
  super(props);


  this.state = {
    term: ''
  }

  this.search = this.search.bind(this);
  this.handleTermChange = this.handleTermChange.bind(this);
  }

  search(term) {
    this.props.onSearch(term);
  }

  handleTermChange(event) {
    this.search(event.target.value)
  }

  render() {
    return (
      <div className="SearchBar">
            <input onChange={this.handleTermChange} placeholder="Tape ta recherche" />
            <button className="SearchButton">RECHERCHER</button>
      </div>
    );
  }
}

export default SearchBar;
