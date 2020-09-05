import React, { useCallback, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import SendIcon from '@material-ui/icons/Send';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { QuillWrapper } from '../organisms';
import { createNoticeRequestAction } from '../../store/actions/notice/createNotice.action';
import { editNoticeRequestAction } from '../../store/actions/notice/editNotice.action';
import { ButtonWrapper } from '../atoms';

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    width: 100%;
  }
`;

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

const NoticeForm = () => {
  // state
  const [isEdit, setIsEdit] = useState(false);
  const [desc, setDesc] = useState('');
  const [disabledSubmitButton, setDisabledSubmitButton] = useState(false);

  // hook
  const dispatch = useDispatch();
  const router = useRouter();
  const { noticeId } = router.query;
  const { notice, createNoticeDone, editNoticeDone } = useSelector(
    (state) => state.noticeReducer
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
          editNoticeRequestAction({
            noticeId,
            formData: { title: data.title, desc },
          })
        );
      } else {
        dispatch(
          createNoticeRequestAction({
            title: data.title,
            desc,
          })
        );
      }
    },
    [isEdit, noticeId, desc]
  );

  useEffect(() => {
    if (noticeId) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  }, [noticeId]);

  useEffect(() => {
    if (createNoticeDone) {
      router.push(`/notice/${notice.id}`);
    }
  }, [createNoticeDone, notice]);

  useEffect(() => {
    if (editNoticeDone) {
      router.replace(`/notice/${noticeId}`);
    }
  }, [editNoticeDone, noticeId]);

  useEffect(() => {
    if (!desc || !formState.isValid || Object.keys(errors).length > 0) {
      setDisabledSubmitButton(true);
    } else {
      setDisabledSubmitButton(false);
    }
  }, [desc, formState.isValid, errors]);

  // 수정모드일때 기존 포스트 데이터를 useForm에 넣는 작업
  useEffect(() => {
    if (isEdit && notice) {
      reset({
        title: notice.title,
      });
      setDesc(notice.desc);
    }
  }, [isEdit, notice]);

  // 폼 랜더링
  return (
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
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

NoticeForm.propTypes = {};

export { NoticeForm };
