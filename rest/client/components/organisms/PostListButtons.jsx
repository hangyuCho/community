import React, { useCallback } from 'react';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import CategoryIcon from '@material-ui/icons/Category';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Buttons = styled('div')`
  position: fixed;
  bottom: ${(props) => props.theme.space * 4}px;
  right: ${(props) => props.theme.space * 4}px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${(props) => props.theme.space * 2}px;
`;

const CustomIconButton = styled(IconButton)`
  background: #404040 !important;
`;

const CustomPostCreateIcon = styled(CreateIcon)`
  color: ${(props) => props.theme.colors.white}!important;
`;

const CustomCategoryCreateIcon = styled(CategoryIcon)`
  color: ${(props) => props.theme.colors.white}!important;
`;

const PostListButtons = () => {
  const router = useRouter();

  const onClickCreatePostButton = useCallback(() => {
    router.push('/post/create');
  }, []);

  const onClickCreateCategoryButton = useCallback(() => {
    router.push('/post/category/create');
  }, []);

  return (
    <Buttons>
      <CustomIconButton aria-label="create" onClick={onClickCreatePostButton}>
        <CustomPostCreateIcon fontSize="large" />
      </CustomIconButton>
      <CustomIconButton
        aria-label="create"
        onClick={onClickCreateCategoryButton}
      >
        <CustomCategoryCreateIcon fontSize="large" />
      </CustomIconButton>
    </Buttons>
  );
};

export { PostListButtons };
