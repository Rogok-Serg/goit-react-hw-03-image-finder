import React, { Component } from 'react';
import css from './Searchbar.module.css';

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
      <header className={css.searchbar}>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>
          <input
            className={css.input}
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
