import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;
const Tag = styled('span')`
  font-size: 13px;
  font-style: italic;
  &:not(:last-of-type) {
    margin-right: ${(props) => props.theme.space}px;
  }
  a {
    color: #0070f3;
    text-decoration: none;
  }
`;

const Tags = ({ tags }) => (
  <Wrapper>
    {tags.map((tag) => (
      <Tag key={tag.id}>
        <Link href="#">
          <a>#{tag.name}</a>
        </Link>
      </Tag>
    ))}
  </Wrapper>
);

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
};

export { Tags };
