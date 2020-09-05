import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const Wrapper = styled('div')`
  display: flex;
  box-sizing: border-box;
  padding: 8px;
  align-items: center;
`;

const Date = styled('p')`
  background-color: black;
  border-radius: 4px;
  box-sizing: border-box;
  color: white;
  padding: 4px;
  margin-right: 16px;
  font-size: 0.8rem;
  min-width: 80px;
  text-align: center;
`;

const Title = styled('p')`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  a {
    font-size: 1.2rem;
    text-decoration: none;
    color: inherit;
  }
`;

const NoticeMainItem = ({ id, date, title }) => (
  <Wrapper>
    <Date>{dayjs(date).format('YYYY-MM-DD')}</Date>
    <Title>
      <Link href={`/notice/${id}`}>
        <a>{title}</a>
      </Link>
    </Title>
  </Wrapper>
);

NoticeMainItem.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export { NoticeMainItem };
