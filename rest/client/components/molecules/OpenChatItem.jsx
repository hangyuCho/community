import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled('div')`
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 5px 0px,
    rgba(0, 0, 0, 0.12) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px;
  margin-bottom: 10px;
  border-radius: 7px;
  overflow: hidden;
  padding: 20px;
  width: 240px;
  margin-right: 8px;
  cursor: pointer;
`;
const CommonP = styled('p')`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  word-break: break-all;
  margin-bottom: 4px;
`;

const Category = styled(CommonP)`
  font-size: 0.8rem;
  font-style: italic;
  color: #136ad5;
`;

const Title = styled(CommonP)`
  font-weight: 900;
  font-size: 1.2rem;
`;
const Desc = styled(CommonP)`
  -webkit-line-clamp: 2;
`;
const SecretCode = styled(CommonP)``;

const OpenChatItem = ({ item, onClickOutLink }) => (
  <Wrapper onClick={onClickOutLink(item.url)}>
    <Category>#{item.category}</Category>
    <Title>{item.title}</Title>
    <Desc>{item.desc}</Desc>
    {item.secretCode && <SecretCode>참여코드 : {item.secretCode}</SecretCode>}
  </Wrapper>
);
OpenChatItem.propTypes = {
  onClickOutLink: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    secretCode: PropTypes.string,
  }),
};

export { OpenChatItem };
