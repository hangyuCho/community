import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import SendIcon from '@material-ui/icons/Send';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { QuillWrapper } from '../organisms';
import { createPostRequestAction } from '../../store/actions/post/createPost.action';
import { editPostRequestAction } from '../../store/actions/post/editPost.action';
import { ButtonWrapper } from '../atoms';

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    width: 100%;
  }
`;

const Category = styled('div')``;

const Title = styled('div')`
  > input {
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid #737373;
    padding: ${(props) => props.theme.space * 2}px 0;
    font-size: 1.4rem;
    font-weight: 900;
  }
`;
const Desc = styled('div')`
  .ql-container.ql-snow {
    height: 400px;
  }
`;

const PostForm = ({ categoryList }) => {
  // state
  const [isEdit, setIsEdit] = useState(false);
  const [desc, setDesc] = useState('');
  const [disabledSubmitButton, setDisabledSubmitButton] = useState(false);

  // hook
  const dispatch = useDispatch();
  const router = useRouter();
  const { postId } = router.query;

  const { post, createPostDone, editPostDone } = useSelector(
    (state) => state.postReducer
  );

  // useForm
  const { register, handleSubmit, errors, formState, reset } = useForm({
    mode: 'all',
  });

  // 포스트 작성/수정 버튼
  const onSubmit = useCallback(
    (data) => {
      if (!desc) {
        alert('본문을 입력해주세요. ');
      } else if (isEdit) {
        dispatch(
          editPostRequestAction({
            postId,
            formData: { title: data.title, desc, CategoryId: data.CategoryId },
          })
        );
      } else {
        dispatch(
          createPostRequestAction({
            title: data.title,
            desc,
            CategoryId: data.CategoryId,
          })
        );
      }
    },
    [isEdit, postId, desc]
  );

  useEffect(() => {
    if (postId) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  }, [postId]);

  useEffect(() => {
    if (createPostDone) {
      router.push(`/post/${post.id}`);
    }
  }, [createPostDone, post]);

  useEffect(() => {
    if (editPostDone) {
      router.replace(`/post/${postId}`);
    }
  }, [editPostDone, postId]);

  useEffect(() => {
    if (!desc || !formState.isValid || Object.keys(errors).length > 0) {
      setDisabledSubmitButton(true);
    } else {
      setDisabledSubmitButton(false);
    }
  }, [desc, formState.isValid, errors]);

  // 수정모드일때 기존 포스트 데이터를 useForm에 넣는 작업
  useEffect(() => {
    if (isEdit && post) {
      reset({
        title: post.title,
      });
      setDesc(post.desc);
    }
  }, [isEdit, post]);

  // 폼 랜더링
  return (
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Category>
        <select
          name="CategoryId"
          ref={register}
          defaultValue={isEdit ? post?.Category.id : null}
        >
          {categoryList.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </Category>
      <Title>
        <input
          name="title"
          placeholder="Title"
          ref={register({ required: true, maxLength: 50 })}
        />
        {errors.title?.type === 'required' && <span>필수항목입니다.</span>}
        {errors.title?.type === 'maxLength' && (
          <span>50자 이내로 입력해주세요. </span>
        )}
      </Title>
      <Desc>
        <QuillWrapper name="desc" desc={desc} setDesc={setDesc} />
      </Desc>
      <ButtonWrapper>
        <Button
          type="button"
          variant="contained"
          value="submit"
          endIcon={<SaveIcon />}
          onClick={() => {}}
          disabled
        >
          일시저장
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          value="submit"
          endIcon={<SendIcon />}
          disabled={disabledSubmitButton}
        >
          {isEdit ? '수정하기' : '작성하기'}
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

PostForm.propTypes = {
  categoryList: PropTypes.array.isRequired,
};

export { PostForm };
