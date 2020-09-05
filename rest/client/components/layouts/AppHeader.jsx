import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Avatar } from '../atoms';

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  height: ${(props) => props.theme.appHeader};
`;

const Header = styled.header`
  display: flex;
  align-items: center;
`;

const CAvatar = styled(Avatar)`
  margin-right: auto;
`;

const AppHeader = ({ onClick }) => (
  <Wrapper>
    <Header>
      <CAvatar onClick={onClick} />
    </Header>
  </Wrapper>
);

AppHeader.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export { AppHeader };
