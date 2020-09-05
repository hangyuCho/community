import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import PropTypes from 'prop-types';

const Wrapper = styled('div')`
  position: fixed;
  bottom: ${(props) => props.theme.space * 14}px;
  right: ${(props) => props.theme.space * 4}px;
`;

const MainButton = styled('button')`
  flex: 0 0 auto;
  color: rgba(0, 0, 0, 0.54);
  padding: 12px;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
  background: black;
  width: 59px;
  height: 59px;
`;

const CustomBorderColorIcon = styled(BorderColorIcon)``;
const CustomDeleteForeverIcon = styled(DeleteForeverIcon)``;
const CustomSupervisorAccountIcon = styled(SupervisorAccountIcon)`
  color: white !important;
`;

const MoreContents = styled('div')`
  position: absolute;
  top: 50%;
  left: -100px;
  width: 120px;
  height: 80px;
  transform: translateY(-50%);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AdminButton = ({ onClickEditPage, onClickDelete }) => {
  const [more, setMore] = useState(false);

  const onMouseOverAdminButton = useCallback(() => {
    setMore(true);
  }, [more]);

  const onMouseLeaveAdminButton = useCallback(() => {
    setMore(false);
  }, [more]);

  return (
    <Wrapper onMouseLeave={onMouseLeaveAdminButton}>
      <MainButton type="button" onMouseOver={onMouseOverAdminButton}>
        <CustomSupervisorAccountIcon fontSize="large" />
      </MainButton>
      {more && (
        <MoreContents>
          <IconButton aria-label="post-edit" onClick={onClickEditPage}>
            <CustomBorderColorIcon fontSize="default" />
          </IconButton>
          <IconButton aria-label="post-delete" onClick={onClickDelete}>
            <CustomDeleteForeverIcon fontSize="default" />
          </IconButton>
        </MoreContents>
      )}
    </Wrapper>
  );
};

AdminButton.propTypes = {
  onClickEditPage: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

export { AdminButton };
