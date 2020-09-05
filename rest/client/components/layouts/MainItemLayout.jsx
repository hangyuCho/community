import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

const Top = styled('div')`
  display: flex;
`;
const ItemTitle = styled('h1')`
  margin-bottom: ${(props) => props.theme.space * 2}px;
  margin-right: auto;
`;
const More = styled('div')``;
const CIconButton = styled(IconButton)`
  margin: 0 !important;
`;

const MainItemLayout = ({ itemName, children }) => (
  <div>
    <Top>
      <ItemTitle>{itemName}</ItemTitle>
      <More>
        <CIconButton
          aria-label="post-edit"
          onClick={() => alert('더보기를 누르셨습니다.(구현예정)')}
        >
          <AddIcon fontSize="default" />
        </CIconButton>
      </More>
    </Top>
    <div>{children}</div>
  </div>
);

MainItemLayout.propTypes = {
  itemName: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export { MainItemLayout };
