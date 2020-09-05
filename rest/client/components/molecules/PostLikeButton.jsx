import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import styled from 'styled-components';

const Wrapper = styled('div')`
  position: fixed;
  bottom: ${(props) => props.theme.space * 4}px;
  right: ${(props) => props.theme.space * 4}px;
`;

const CustomIconButton = styled(IconButton)`
  background: #140f18 !important;
`;

const CustomFavoriteIcon = styled(FavoriteIcon)`
  color: red !important;
`;

const CustomFavoriteBorderIcon = styled(FavoriteBorderIcon)`
  color: red !important;
`;

const PostLikeButton = ({ isLiker = false, onClick }) => (
  <Wrapper>
    <CustomIconButton aria-label="create" onClick={onClick}>
      {isLiker ? (
        <CustomFavoriteIcon fontSize="large" />
      ) : (
        <CustomFavoriteBorderIcon fontSize="large" />
      )}
    </CustomIconButton>
  </Wrapper>
);

PostLikeButton.propTypes = {
  isLiker: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { PostLikeButton };
