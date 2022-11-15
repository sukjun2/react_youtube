import React from 'react';

import { MdYoutubeSearchedFor } from 'react-icons/md';

const SearchBar = () => {
  return (
    <div className="search">
      <label className="glass" htmlFor="searchInput">
        <MdYoutubeSearchedFor />
      </label>
      <input
        type="text"
        id="searchInput"
        className="input__search"
        placeholder="ASMR 유튜버를 검색하세요!"
        title="검색"
      />
    </div>
  );
};

export default SearchBar;
