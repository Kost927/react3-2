import React, { Component } from "react";
import styles from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    inputValue: ""
  };

  handleInputSearch = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <>
        <header className={styles.Searchbar}>
          <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={styles.SearchFormButton}>
              <span className={styles.SearchFormButtonLabel}>Search</span>
            </button>
            <input
              onChange={this.handleInputSearch}
              value={this.state.inputValue}
              className={styles.SearchFormInput}
              type="text"
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
