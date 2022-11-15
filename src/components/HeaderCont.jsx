import React from 'react';

import { SearchBar } from './index';

import { SiYoutubemusic } from 'react-icons/si';

const HeaderCont = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <SiYoutubemusic className="icon" />
        ASMR Youtube
      </h1>
      <SearchBar />
    </header>
  );
};

export default HeaderCont;
