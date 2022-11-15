import React, { useEffect, useState } from 'react';

import { fetchAPI } from '../utils/fetchAPI';
import { Category, Videos } from './index';

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState('Vito ASMR');
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=Vito ASMR`).then((data) =>
      console.log(data)
    );
  }, []);

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
