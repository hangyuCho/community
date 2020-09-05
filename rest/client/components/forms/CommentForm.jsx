import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { createCommentRequestAction } from '../../store/actions/comment/createComment.action';

const Form = styled('form')`
  display: flex;
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

const CommentForm = () => {
  const router = useRouter();
  const { postId } = router.query;
  const dispatch = useDispatch();
  const { createCommentDone, createCommentError } = useSelector(
    (state) => state.commentReducer
  );
  const { register, handleSubmit, watch, errors, reset } = useForm();

  const onSubmit = useCallback(
    async (data) => {
      await dispatch(
        createCommentRequestAction({
          postId,
          formData: data,
        })
      );
    },
    [postId]
  );

  useEffect(() => {
    if (createCommentDone && !createCommentError) {
      reset({
        desc: '',
      });
    }
  }, [createCommentDone, createCommentError]);

  return (
    <div>
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
      <div>
        {errors.desc?.type === 'required' && <p>댓글을 입력해주세요. </p>}
        {errors.desc?.type === 'maxLength' && (
          <p>500자 이내로 입력해주세요. </p>
        )}
      </div>
    </div>
  );
};

export { CommentForm };
