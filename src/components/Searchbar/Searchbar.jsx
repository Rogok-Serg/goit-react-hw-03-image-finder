import React, { Component } from 'react';

// import { Api } from 'components/Api/Api';

export class Searchbar extends Component {
  state = {
    searcheQuery: '',
  };
  handleImageGhange = event => {
    this.setState({
      searcheQuery: event.target.value.toLowerCase(),
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searcheQuery.trim() === '') {
      alert('Please enter data to search');
    }
    this.props.onSubmit(this.state.searcheQuery);
    this.setState({ searcheQuery: '' });
  };
  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit} className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            className="input"
            value={this.state.searcheQuery}
            onChange={this.handleImageGhange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
