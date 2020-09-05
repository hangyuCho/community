import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${(props) => props.size ?? 40}px;
  height: ${(props) => props.size ?? 40}px;
  overflow: hidden;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.black};
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

const Avatar = ({
  avatar = 'https://image.winudf.com/v2/image1/Y29tLmtha2FvLmZyaWVuZHNzdGlja2VyYXBwX2ljb25fMTU1MDYyMTM4OV8wNjQ/icon.png?w=170&fakeurl=1',
  size,
  onClick,
  ...props
}) => (
  <Wrapper size={size} onClick={onClick} {...props}>
    <img src={avatar} alt="" />
  </Wrapper>
);

Avatar.propTypes = {
  // eslint-disable-next-line react/require-default-props
  avatar: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  size: PropTypes.number,
  // eslint-disable-next-line react/require-default-props
  onClick: PropTypes.func,
};

export { Avatar };
