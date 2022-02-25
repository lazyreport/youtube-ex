import React from "react";
import searchbar from "./searchbar.css";
import { useRef } from "react";

export default function SearchBar(props) {
  const inputRef = useRef();
  /* search 기능 함수 */
  const searchFnc = () => {
    const value = inputRef.current.value; /* input 현재값 가져오기 */
    props.searchResult(value);
  };
  /* search bar button 호출 함수 */
  const inputClick = () => {
    searchFnc();
  };
  /* input box enter key 호출 함수*/
  const inputEnter = (e) => {
    if (e.key === "Enter") {
      searchFnc();
    }
  };
  return (
    <div className="SearchArea">
      <div className="logoArea">
        <h1 className="logo">
          <img src="/images/logo.png" className="logoImage" alt="youtube" />
        </h1>
      </div>
      {/* left */}
      <div className="searchInputArea">
        <input
          type="search"
          className="searchInput"
          placeholder="검색"
          onKeyPress={inputEnter}
          ref={inputRef}
        />
        <button className="searchBtn" onClick={inputClick}>
          <img src="/images/searchicon.png" alt="search" />
        </button>
      </div>
      {/* center */}
      <div className="topMenuArea">
        <button className="gridMenuBtn">
          <img src="/images/gridmenuicon.png" alt="topmenu" />
        </button>
      </div>
      {/* right */}
    </div>
  );
}
