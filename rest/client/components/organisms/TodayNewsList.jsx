import React from 'react';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';
import { TodayNewsItem } from '../molecules';

const Wrapper = styled('div')`
  .swiper-container {
    overflow: hidden;
  }
  .swiper-wrapper {
    display: flex;
  }
`;

const TodayNewsList = () => {
  const array = [
    { id: 1, name: 'yahoo' },
    { id: 2, name: 'naver' },
    { id: 3, name: 'nate' },
    { id: 4, name: 'yahoojp' },
    { id: 5, name: 'line' },
  ];

  return (
    <Wrapper>
      <Swiper
        slidesPerView="auto"
        spaceBetween={7}
        slidesOffsetBefore={2}
        rebuildOnUpdate
      >
        {array.map((item) => (
          <div key={item.id}>
            <TodayNewsItem name={item.name} />
          </div>
        ))}
      </Swiper>
    </Wrapper>
  );
};

TodayNewsList.propTypes = {
  //
};

export { TodayNewsList };
