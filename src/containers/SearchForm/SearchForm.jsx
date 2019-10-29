import React, { useState } from "react";
// import { connect } from "react-redux";
import { IoIosSearch } from "react-icons/io";
import { useTranslation } from "react-i18next";
// import axios from "axios";

// import { searching } from "../../actions/actionCreator";

import "./SearchForm.scss";

const SearchForm = ({ meaning }) => {
  const [searchValue, changeSearchValue] = useState("");
  const { t } = useTranslation();

  const handleInputChange = ({ target: { value } }) => {
    changeSearchValue(value);
  };

  //   searching = ({ key }) => {
  //     const { searchValue } = this.state;
  //     const { searching } = this.props;
  //     if (searchValue.length >= 1) {
  //       searching(searchValue);
  //       axios
  //         .get(
  //           `https://api.pexels.com/v1/search?query=${searchValue}&per_page=15&page=1`,
  //           {
  //             headers: {
  //               Authorization:
  //                 "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf"
  //             }
  //           }
  //         )
  //         .then(res => {
  //           this.setState({ result: res });
  //         });
  //     }

  // if (searchValue.length >= 1 && key === "Enter") {
  //   searching(searchValue);
  // }
  //   };

  // const { t } = useTranslation();
  return (
    <div className="form__search">
      <input
        type="text"
        placeholder={t("inputPlaceholder")}
        //   onKeyPress={this.searching}
        onChange={handleInputChange}
        value={searchValue}
        className={
          meaning === "content"
            ? "form__search_input-content form-input"
            : "form__search_input form-input"
        }
      />
      <button
        //   onClick={this.searching}
        className={
          meaning === "content"
            ? "form__search_button-content form-button"
            : "form__search_button form-button"
        }
      >
        <IoIosSearch />
      </button>
    </div>
  );
};

export default SearchForm;
// export default connect(
//   ({ search }) => ({ search }),
//   { searching }
// )(SearchForm);
