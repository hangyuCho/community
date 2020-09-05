import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { END } from 'redux-saga';
import { signUpRequestAction } from '../../store/actions/user/signup.action';
import { AppLoading, PageLayoutWithNav } from '../../components/layouts';
import wrapper from '../../store/configureStore';
import { loadMeRequestAction } from '../../store/actions/user/loadme.action';
import setDefaultCookie from '../../utils/setDefaultCookie';
import { ButtonWrapper, ErrorMessage, Input } from '../../components/atoms';

const Signup = (props) => {
  const [selectedSns, setSelectedSns] = useState(false);
  const [checkedTerm, setCheckedTerm] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { loadMeLoading, me, signUpLoading, signUpDone } = useSelector(
    (state) => state.userReducer
  );
  const { register, handleSubmit, errors, formState } = useForm({
    mode: 'all',
  });
  const onSubmit = useCallback(
    (data) => {
      let formData = {};
      Object.entries(data).map(([k, v]) => {
        formData = {
          ...formData,
          [k]: v === '' ? null : v,
        };
        return formData;
      });
      if (checkedTerm) {
        dispatch(signUpRequestAction(formData));
      }
    },
    [dispatch, checkedTerm]
  );

  const onClickHome = useCallback(() => {
    router.push('/');
  }, []);

  useEffect(() => {
    if (me) {
      router.push('/');
    }
  }, [me]);

  useEffect(() => {
    if (signUpDone) {
      router.push('/login');
    }
  }, [signUpDone]);

  if (loadMeLoading || signUpLoading) {
    return <AppLoading />;
  }

  return (
    <PageLayoutWithNav pageName="Sign up">
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Input>
          <input
            placeholder="Username"
            name="username"
            ref={register({ required: true, minLength: 2, maxLength: 10 })}
          />
          {errors.username?.type === 'required' && (
            <ErrorMessage>필수항목입니다.</ErrorMessage>
          )}
          {errors.username?.type === 'minLength' && (
            <ErrorMessage>유저명은 2자 이상 입력해주세요.</ErrorMessage>
          )}
          {errors.username?.type === 'maxLength' && (
            <ErrorMessage>유저명은 10자 이내로 입력해주세요.</ErrorMessage>
          )}
        </Input>

        <Input>
          <input
            placeholder="Email"
            name="email"
            ref={register({
              required: true,
              maxLength: 100,
              pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i,
            })}
          />
          {errors.email?.type === 'required' && (
            <ErrorMessage>필수항목입니다.</ErrorMessage>
          )}
          {errors.email?.type === 'pattern' && (
            <ErrorMessage>이메일 형식에 맞지 않습니다.</ErrorMessage>
          )}
          {errors.email?.type === 'maxLength' && (
            <ErrorMessage>이메일은 100자 이내로 입력해주세요.</ErrorMessage>
          )}
        </Input>

        <Input>
          <input
            placeholder="Password"
            name="password"
            type="password"
            ref={register({ required: true, minLength: 4, maxLength: 100 })}
          />
          {errors.password?.type === 'required' && (
            <ErrorMessage>필수항목입니다.</ErrorMessage>
          )}
          {errors.password?.type === 'minLength' && (
            <ErrorMessage>비밀번호는 4자 이상 입력해주세요.</ErrorMessage>
          )}
          {errors.password?.type === 'maxLength' && (
            <ErrorMessage>비밀번호는 100자 이내로 입력해주세요.</ErrorMessage>
          )}
        </Input>

        <div>
          <FormControlLabel
            control={
              <Checkbox
                icon={<AddBoxIcon />}
                checkedIcon={<IndeterminateCheckBoxIcon />}
                value={selectedSns}
                onChange={() => setSelectedSns(!selectedSns)}
              />
            }
            label="SNS"
            labelPlacement="start"
          />
        </div>
        {selectedSns && (
          <div>
            <Input>
              <input
                placeholder="facebook"
                name="facebook"
                type="text"
                ref={register({ maxLength: 100 })}
              />
              {errors.facebook?.type === 'maxLength' && (
                <ErrorMessage>100자 까지 입력 가능합니다.</ErrorMessage>
              )}
            </Input>
            <Input>
              <input
                placeholder="twitter"
                name="twitter"
                type="text"
                ref={register({ maxLength: 100 })}
              />
              {errors.twitter?.type === 'maxLength' && (
                <ErrorMessage>100자 까지 입력 가능합니다.</ErrorMessage>
              )}
            </Input>
            <Input>
              <input
                placeholder="github"
                name="github"
                type="text"
                ref={register({ maxLength: 100 })}
              />
              {errors.github?.type === 'maxLength' && (
                <ErrorMessage>100자 까지 입력 가능합니다.</ErrorMessage>
              )}
            </Input>
          </div>
        )}
        <div style={{ textAlign: 'center' }}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                value={checkedTerm}
                onChange={() => setCheckedTerm(!checkedTerm)}
              />
            }
            label="회원가입에 동의하십니까?"
          />
        </div>
        <ButtonWrapper>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            value="submit"
            disabled={
              !checkedTerm ||
              !formState.isValid ||
              Object.keys(errors).length > 0
            }
            endIcon={<PersonAddIcon />}
          >
            회원가입
          </Button>
          <Button
            type="button"
            variant="contained"
            value="submit"
            endIcon={<HomeIcon />}
            onClick={onClickHome}
          >
            홈으로
          </Button>
        </ButtonWrapper>
      </form>
    </PageLayoutWithNav>
  );
};

Signup.propTypes = {};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    setDefaultCookie(context);
    context.store.dispatch(loadMeRequestAction());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Signup;
