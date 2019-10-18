import React, { Component } from "react";
import { IoIosSearch } from "react-icons/io";

import "./SearchForm.scss";

class SearchForm extends Component {
  render() {
    const { placeholder, nameClass } = this.props;
    return (
      <form>
        <div className="form__search_inner">
          <input
            type="text"
            placeholder={placeholder}
            className={nameClass}
            required
          />
          <button>
            <IoIosSearch />
          </button>
        </div>
      </form>
    );
  }
}

export default SearchForm;
