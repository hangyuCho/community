import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { createCategoryRequestAction } from '../../store/actions/category/createCategory.action';
import { ErrorMessage, Input } from '../atoms';

const Wrapper = styled('div')`
  margin: ${(props) => props.theme.space * 3}px 0;
`;

const CategoryForm = (props) => {
  const dispatch = useDispatch();
  const { createCategoryDone, createCategoryLoading } = useSelector(
    (state) => state.categoryReducer
  );

  const { register, handleSubmit, errors, reset } = useForm({
    mode: 'all',
  });

  const onSubmit = useCallback((data) => {
    dispatch(createCategoryRequestAction(data));
  }, []);

  useEffect(() => {
    if (!createCategoryLoading && createCategoryDone) {
      reset({
        name: '',
      });
    }
  }, [createCategoryLoading, createCategoryDone]);

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Input>
          <input
            name="name"
            placeholder="Category Name"
            ref={register({ required: true, maxLength: 30 })}
          />
        </Input>
      </form>
      {errors.name?.type === 'required' && (
        <ErrorMessage>필수항목입니다.</ErrorMessage>
      )}
      {errors.name?.type === 'maxLength' && (
        <ErrorMessage>30자 이내로 입력해주세요. </ErrorMessage>
      )}
    </Wrapper>
  );
};

CategoryForm.propTypes = {
  //
};

export { CategoryForm };
