import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Avatar } from '../atoms';

// User 부분
const Wrapper = styled.div`
  padding: 0 ${(props) => props.theme.space * 4}px;
  margin-right: ${(props) => props.theme.space * 4}px;
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Username = styled.div`
  margin-top: ${(props) => props.theme.space}px;
  white-space: normal;
  width: 60px;
  text-align: center;
  h4 {
    font-size: 0.6rem;
    width: 100%;
    word-break: break-all;
  }
`;

const UserInfo = ({ avatar, username, ...props }) => (
  <Wrapper {...props}>
    <Avatar avatar={avatar} />
    <Username>
      <h4>{username}</h4>
    </Username>
  </Wrapper>
);

UserInfo.propTypes = {
  // eslint-disable-next-line react/require-default-props
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
};

export { UserInfo };
