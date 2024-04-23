import React from "react";
import { IoMdSearch } from "react-icons/io";
import * as classes from "./Search.module.scss";

const Search = () => {
  return (
    <>
      <div className={classes.searchContainer}>
        <input
          type="text"
          className={classes.searchInput}
          placeholder="Search"
        />
        <span className={classes.searchIcon}>
          <IoMdSearch />
        </span>
      </div>
    </>
  );
};

export default Search;
