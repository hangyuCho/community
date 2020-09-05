import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { UserInfo } from '../molecules';

const Wrapper = styled.div`
  justify-self: flex-end;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #eaeaea;
  padding: ${(props) => props.theme.space * 4}px
    ${(props) => props.theme.space * 3}px;
  &:not(:first-of-type) {
    margin-top: ${(props) => props.theme.space * 2}px;
  }
`;

// Comment 부분
const UserDetail = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Email = styled.div`
  display: flex;
  align-items: center;
  > span {
    margin-left: ${(props) => props.theme.space}px;
  }
  margin-bottom: ${(props) => props.theme.space}px;
`;
const SNS = styled.div`
  display: flex;
  flex-wrap: wrap;
  > svg {
    &:not(:first-of-type) {
      margin-left: ${(props) => props.theme.space}px;
    }
  }
`;

const UserCard = ({ user }) => (
  <Wrapper>
    <UserInfo username={user.username} />
    <UserDetail>
      <Email>
        <EmailIcon />
        <span>{user.email}</span>
      </Email>
      <SNS>
        {user.facebook && <FacebookIcon style={{ color: '#4267B2' }} />}
        {user.twitter && <TwitterIcon style={{ color: '#1DA1F2' }} />}
        {user.github && <GitHubIcon style={{ color: '#00000' }} />}
      </SNS>
    </UserDetail>
  </Wrapper>
);

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export { UserCard };
