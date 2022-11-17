import React from 'react';

import { SearchBar } from './index';
import { SiYoutubemusic } from 'react-icons/si';
import { Link } from 'react-router-dom';

const HeaderCont = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <Link to="/">
          <SiYoutubemusic className="icon" />
          ASMR Youtube
        </Link>
      </h1>
      <SearchBar />
    </header>
  );
};

export default HeaderCont;
