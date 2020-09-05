import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled('div')`
  font-size: 13px;
  font-style: italic;
  color: #0070f3;
  text-decoration: none;
`;

const Category = ({ name }) => <Wrapper>@{name}</Wrapper>;

Category.propTypes = {
  name: PropTypes.string.isRequired,
};

export { Category };
