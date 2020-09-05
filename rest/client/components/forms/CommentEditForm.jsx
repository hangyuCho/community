import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import IconButton from '@material-ui/core/IconButton';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { editCommentRequestAction } from '../../store/actions/comment/editComment.action';

const Form = styled('form')`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const TextareaDesc = styled(TextareaAutosize)`
  margin-right: auto;
  width: 100%;
  padding: ${(props) => props.theme.space}px;
  outline: none;
`;
const CustomIconButton = styled(IconButton)`
  margin: 0 !important;
  margin-left: ${(props) => props.theme.space * 2}px!important;
  padding: 0 !important;
`;

const CustomChatBubbleIcon = styled(ChatBubbleIcon)``;

const CommentEditForm = ({ comment, setEditToggle }) => {
  const router = useRouter();
  const { postId } = router.query;
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      desc: comment.desc,
    },
  });

  const onSubmit = useCallback(
    async (data) => {
      if (data.desc === comment.desc) {
        setEditToggle(false);
        return;
      }
      await dispatch(
        editCommentRequestAction({
          postId,
          commentId: comment.id,
          formData: data,
        })
      );
      setEditToggle(false);
    },
    [postId, comment]
  );

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextareaDesc
          name="desc"
          rowsMax={7}
          ref={register({ required: true, maxLength: 500 })}
          aria-label="comment-desc"
          placeholder="댓글을 입력해주세요. "
        />
        <CustomIconButton
          type="submit"
          aria-label="create"
          onClick={() => {}}
          disabled={errors.email || errors.title}
        >
          <CustomChatBubbleIcon fontSize="default" />
        </CustomIconButton>
      </Form>
      {errors.desc?.type === 'required' && <p>댓글을 입력해주세요. </p>}
      {errors.desc?.type === 'maxLength' && <p>500자 이내로 입력해주세요. </p>}
    </>
  );
};

CommentEditForm.propTypes = {
  comment: PropTypes.object.isRequired,
  setEditToggle: PropTypes.func.isRequired,
};

export { CommentEditForm };
