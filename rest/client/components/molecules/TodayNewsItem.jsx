import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NewsArticle } from './NewsArticle';

const Wrapper = styled('div')`
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px,
    rgba(0, 0, 0, 0.12) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px;
  margin-bottom: 10px;
  border-radius: 7px;
  overflow: hidden;
  padding: 20px;
`;
const Name = styled('h3')`
  margin-bottom: 16px;
  text-transform: uppercase;
`;

const TodayNewsItem = ({ name }) => {
  const array = [1, 2, 3, 4, 5];
  const onClickNews = useCallback(
    (url) => () => {
      const win = window.open(url, '_blank');
      win.focus();
    },
    []
  );
  return (
    <Wrapper>
      <Name>{name}</Name>
      {array.map((ttt) => (
        <NewsArticle key={ttt} onClickNews={onClickNews} />
      ))}
    </Wrapper>
  );
};

TodayNewsItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export { TodayNewsItem };
