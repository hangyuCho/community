import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import { END } from 'redux-saga';
import wrapper from '../store/configureStore';
import { loadMeRequestAction } from '../store/actions/user/loadme.action';
import setDefaultCookie from '../utils/setDefaultCookie';

const Profile = (props) => {
  const { me, loadMeDone } = useSelector((state) => state.userReducer);
  useEffect(() => {
    if (!me && loadMeDone) {
      alert('로그인해주세요. ');
      Router.push('/');
    }
  }, [me, loadMeDone]);
  return <div>Profile</div>;
};

Profile.propTypes = {};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    setDefaultCookie(context);
    context.store.dispatch(loadMeRequestAction());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Profile;
