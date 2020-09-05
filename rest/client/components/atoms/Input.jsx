import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled('div')`
  > input {
    width: 100%;
    padding: ${(p) => p.theme.space * 2}px 0;
    font-size: 1.4rem;
    font-weight: 600;
    color: ${(p) => (p.error ? '#D8000C' : '#000000')};
    margin-bottom: ${(p) => p.theme.space}px;
    outline: none;
    border: none;
    border-bottom: 1px solid ${(p) => (p.error ? '#D8000C' : '#737373')};
    ${(p) =>
      p.error &&
      css`
        background-color: #ffd2d2;
      `};
    &::placeholder {
      color: ${(p) => (p.error ? '#D8000C' : '#737373')};
    }
  }
`;

const Input = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
);

Input.propTypes = {};

export { Input };
