import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled('strong')`
  font-size: 0.6rem;
  border-radius: 2px;
  border: 1px solid ${(p) => (p.color ? p.color : 'red')};
  color: ${(p) => (p.color ? p.color : 'red')};
  box-sizing: border-box;
  padding: ${(p) => p.theme.space / 4}px ${(p) => p.theme.space}px;
  margin-right: ${(p) => p.theme.space}px;
`;

const Tag = ({ text, color }) => <Wrapper color={color}>{text}</Wrapper>;

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export { Tag };
