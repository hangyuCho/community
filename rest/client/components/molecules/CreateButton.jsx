import React, { useCallback } from 'react';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const Wrapper = styled('div')`
  position: fixed;
  bottom: ${(props) => props.theme.space * 4}px;
  right: ${(props) => props.theme.space * 4}px;
`;

const CustomIconButton = styled(IconButton)`
  background: #404040 !important;
`;

const CustomCreateIcon = styled(CreateIcon)`
  color: ${(props) => props.theme.colors.white}!important;
`;

const CreateButton = ({ path }) => {
  const router = useRouter();

  const { me } = useSelector((state) => state.userReducer);

  const onClickCreatePage = useCallback(() => {
    router.push(path);
  }, [path]);

  if (!me) {
    return null;
  }

  return (
    <Wrapper>
      <CustomIconButton aria-label="create" onClick={onClickCreatePage}>
        <CustomCreateIcon fontSize="large" />
      </CustomIconButton>
    </Wrapper>
  );
};

CreateButton.propTypes = {
  path: PropTypes.string.isRequired,
};

export { CreateButton };
