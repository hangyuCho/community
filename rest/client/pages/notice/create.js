import React, { useEffect } from 'react';
import { END } from 'redux-saga';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { AppLoading, PageLayoutWithNav } from '../../components/layouts';
import wrapper from '../../store/configureStore';
import setDefaultCookie from '../../utils/setDefaultCookie';
import { loadMeRequestAction } from '../../store/actions/user/loadme.action';
import { NoticeForm } from '../../components/forms';

const Create = (props) => {
  const router = useRouter();
  const { loadMeLoading, me } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (!me) {
      router.push('/notice');
    }
  }, [me]);

  if (!me || loadMeLoading) {
    return <AppLoading />;
  }

  return (
    <PageLayoutWithNav pageName="Create Notice">
      <NoticeForm />
    </PageLayoutWithNav>
  );
};

Create.propTypes = {
  //
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    setDefaultCookie(context);
    context.store.dispatch(loadMeRequestAction());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Create;
