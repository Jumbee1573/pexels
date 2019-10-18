import React, { Component } from "react";
import { IoIosSearch } from "react-icons/io";

import "./SearchForm.scss";

class SearchForm extends Component {
  render() {
    const { placeholder, meaning } = this.props;
    return (
      <form className="form__search">
        <div className="form__search_inner">
          <input
            type="search"
            placeholder={placeholder}
            className={
              meaning === "content"
                ? "form__search_input-content form-input"
                : "form__search_input form-input"
            }
          />
          <button
            type="submit"
            className={
              meaning === "content"
                ? "form__search_button-content form-button"
                : "form__search_button form-button"
            }
          >
            <IoIosSearch />
          </button>
        </div>
      </form>
    );
  }
}

export default SearchForm;
