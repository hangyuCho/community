import React from 'react';
import styled from 'styled-components';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ChatIcon from '@material-ui/icons/Chat';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PropTypes from 'prop-types';

const Bottom = styled('div')`
  display: flex;
  justify-content: space-around;
  margin: ${(props) => props.theme.space * 2}px 0;
  > div {
    display: flex;
    align-items: center;
  }
  p {
    margin-left: ${(props) => props.theme.space}px;
    font-size: 12px;
    margin-top: 2px;
  }
`;

const CustomVisibilityIcon = styled(VisibilityIcon)`
  font-size: 1.3rem !important;
`;

const CustomChatIcon = styled(ChatIcon)`
  font-size: 1.3rem !important;
`;

const CustomFavoriteIcon = styled(FavoriteIcon)`
  font-size: 1.3rem !important;
  color: #de3939;
`;

const BottomInfo = ({ view, comments, likers }) => (
  <Bottom>
    <div>
      <CustomVisibilityIcon />
      <p>{view}</p>
    </div>
    <div>
      <CustomChatIcon />️<p>{comments}</p>
    </div>
    <div>
      <CustomFavoriteIcon />️<p>{likers}</p>
    </div>
  </Bottom>
);

BottomInfo.propTypes = {
  view: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  likers: PropTypes.number.isRequired,
};

export { BottomInfo };
