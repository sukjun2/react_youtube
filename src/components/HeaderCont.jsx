import React from 'react';

const HeaderCont = () => {
  return (
    <header id="header">
      <h1>ASMR Youtube</h1>
      <div className="search">
        <label className='blind' htmlFor="searchInput">검색</label>
        <input
          type="text"
          id="searchInput"
          className="input__search"
          placeholder="ASMR 유튜버를 검색하세요!"
          title="검색"
        />
      </div>
    </header>
  );
};

export default HeaderCont;
