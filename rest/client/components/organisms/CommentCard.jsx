import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import IconButton from '@material-ui/core/IconButton';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { CommentEditForm } from '../forms';
import { deleteCommentRequestAction } from '../../store/actions/comment/deleteComment.action';
import { UserInfo } from '../molecules';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #eaeaea;
  padding: ${(props) => props.theme.space * 2}px;
  &:not(:first-of-type) {
    margin-top: ${(props) => props.theme.space * 2}px;
  }
  margin-bottom: ${(props) => props.theme.space}px;
`;

// Comment 부분
const CommentInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Description = styled.p`
  width: calc(100% - 54px);
  padding-right: ${(props) => props.theme.space * 3}px;
`;
const ButtonWrapper = styled.div`
  width: 54px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CustomBorderColorIcon = styled(BorderColorIcon)``;
const CustomDeleteForeverIcon = styled(DeleteForeverIcon)``;

const CommentCard = ({ comment }) => {
  const dispatch = useDispatch();
  const [editToggle, setEditToggle] = useState(false);
  const router = useRouter();
  const { me } = useSelector((state) => state.userReducer);

  const { postId } = router.query;

  const onClickDeleteComment = useCallback(
    (commentId) => () => {
      dispatch(
        deleteCommentRequestAction({
          postId,
          commentId,
        })
      );
    },
    [postId]
  );

  const currentUserId = me?.id;

  return (
    <Wrapper>
      <UserInfo username={comment.User.username} />
      <CommentInfo>
        {editToggle ? (
          <CommentEditForm comment={comment} setEditToggle={setEditToggle} />
        ) : (
          <>
            <Description>{comment.desc}</Description>
            {comment.UserId === currentUserId && (
              <ButtonWrapper>
                <IconButton
                  aria-label="post-edit"
                  onClick={() => setEditToggle(true)}
                >
                  <CustomBorderColorIcon fontSize="default" />
                </IconButton>
                <IconButton
                  aria-label="post-delete"
                  onClick={onClickDeleteComment(comment.id)}
                >
                  <CustomDeleteForeverIcon fontSize="default" />
                </IconButton>
              </ButtonWrapper>
            )}
          </>
        )}
      </CommentInfo>
    </Wrapper>
  );
};

CommentCard.propTypes = {
  comment: PropTypes.object.isRequired,
};

export { CommentCard };
