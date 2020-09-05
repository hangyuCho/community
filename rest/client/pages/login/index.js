import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { useRouter } from 'next/router';
import { END } from 'redux-saga';
import { AppLoading, PageLayoutWithNav } from '../../components/layouts';
import { logInRequestAction } from '../../store/actions/user/login.action';
import wrapper from '../../store/configureStore';
import { loadMeRequestAction } from '../../store/actions/user/loadme.action';
import setDefaultCookie from '../../utils/setDefaultCookie';
import { ButtonWrapper, ErrorMessage, Input } from '../../components/atoms';

const Login = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loadMeLoading, logInDone, logInLoading, me } = useSelector(
    (state) => state.userReducer
  );
  const { register, handleSubmit, errors, formState } = useForm({
    mode: 'all',
  });

  const onSubmit = useCallback((data) => {
    dispatch(logInRequestAction(data));
  }, []);

  const onClickHome = useCallback(() => {
    router.push('/');
  }, []);

  useEffect(() => {
    if (me) {
      router.back();
    }
  }, [me]);

  useEffect(() => {
    if (logInDone) {
      dispatch(loadMeRequestAction());
    }
  }, [logInDone]);

  if (loadMeLoading || logInLoading) {
    return <AppLoading />;
  }

  return (
    <PageLayoutWithNav pageName="Login">
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Input>
          <input
            type="text"
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
        <ButtonWrapper>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            value="submit"
            endIcon={<PersonAddIcon />}
            disabled={!formState.isValid || Object.keys(errors).length > 0}
          >
            로그인
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

Login.propTypes = {};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    setDefaultCookie(context);
    context.store.dispatch(loadMeRequestAction());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Login;
