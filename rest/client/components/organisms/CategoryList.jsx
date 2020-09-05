import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteCategoryRequestAction } from '../../store/actions/category/deleteCategory.action';

const Wrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;
const Item = styled('span')`
  display: flex;
  padding: ${(props) => props.theme.space}px
    ${(props) => props.theme.space * 2}px;
  margin-right: ${(props) => props.theme.space * 2}px;
  margin-bottom: ${(props) => props.theme.space * 2}px;
  background: #23241f;
  color: #eaeaea;
  border-radius: 32px;
  align-items: center;
  > span {
    font-size: 1.2rem;
    margin-right: ${(props) => props.theme.space}px;
  }
  > button {
    display: flex;
    align-items: center;
    cursor: pointer;
    outline: none;
    margin: 0;
    padding: 0;
  }
`;

const CategoryList = ({ categoryList }) => {
  const dispatch = useDispatch();
  const onClickDeleteCategory = useCallback(
    (categoryId) => () => {
      dispatch(deleteCategoryRequestAction(categoryId));
    },
    []
  );
  return (
    <Wrapper>
      {categoryList.map((category) => (
        <Item key={category.id}>
          <span>{category.name}</span>
          <button type="button" onClick={onClickDeleteCategory(category.id)}>
            <DeleteForeverRoundedIcon color="inherit" />
          </button>
        </Item>
      ))}
    </Wrapper>
  );
};

CategoryList.propTypes = {
  categoryList: PropTypes.array.isRequired,
};

export { CategoryList };
