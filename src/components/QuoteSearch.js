import { useEffect, useState } from "react";
import { Button } from "rsuite";

import SearchImg from "../assets/SearchImg";

import "../styles/quoteSearch.scss";

const QuotesSearch = () => {
  const formSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  return (
    <>
      <div className="quote-search-container">
        <div className="quote-search-img-container">
          <SearchImg />
        </div>
        <div className="quote-search-form-container">
          <h3 className="quote-search-heading">Search For Quotes</h3>
          <form className="quote-search-form" onSubmit={formSubmit}>
            <input type="text" placeholder="Type here to search" />
            <Button type="submit" text="Search">
              SEARCH
            </Button>
          </form>
          <div className="quote-search-results-container"></div>
        </div>
      </div>
    </>
  );
};
export default QuotesSearch;
