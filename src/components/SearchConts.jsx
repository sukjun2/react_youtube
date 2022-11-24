import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchAPI } from '../utils/fetchAPI';
import { Videos } from './';

const SearchConts = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <main id="main">
      <div className='searchCont'>
        <div className="result"><span>{searchTerm}</span>를 검색하였습니다.</div>
        <Videos videos={videos}/>
      </div>
    </main>
  );
};

export default SearchConts;
