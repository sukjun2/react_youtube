import React, { useEffect, useState } from 'react';

import { fetchAPI } from '../utils/fetchAPI';
import { Category, Videos } from './index';

// import dummy from '../utils/youtube.json';

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState('Vito ASMR');
  const [videos, setVideos] = useState(null);
  // const [videos, setVideos] = useState(dummy.items);

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectCategory}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [selectCategory]);

  return (
    <main id="main">
      <aside id="aside">
        <Category
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </aside>
      <section id="contents">
        <h2>
          <em>{selectCategory}</em>유튜버
        </h2>
        <Videos videos={videos} />
      </section>
    </main>
  );
};

export default MainConts;
