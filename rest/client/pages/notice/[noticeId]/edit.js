import React, { useEffect } from 'react';
import { END } from 'redux-saga';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import wrapper from '../../../store/configureStore';
import setDefaultCookie from '../../../utils/setDefaultCookie';
import { loadMeRequestAction } from '../../../store/actions/user/loadme.action';
import { getNoticeRequestAction } from '../../../store/actions/notice/getNotice.action';
import { AppLoading, PageLayoutWithNav } from '../../../components/layouts';
import { NoticeForm } from '../../../components/forms';

const Edit = (props) => {
  const router = useRouter();
  const { me, loadMeLoading } = useSelector((state) => state.userReducer);
  const { notice, getNoticeError, getNoticeLoading } = useSelector(
    (state) => state.noticeReducer
  );

  useEffect(() => {
    if (!me) {
      router.push('/notice');
    }
  }, [me]);

  useEffect(() => {
    if (me?.id !== notice?.User.id) {
      router.push('/notice');
    }
  }, [me, notice]);

  useEffect(() => {
    if (getNoticeError) {
      router.push('/notice');
    }
  }, [getNoticeError]);

  if (!me || loadMeLoading || getNoticeLoading) {
    return <AppLoading />;
  }

  return (
    <PageLayoutWithNav pageName="Edit Notice">
      <NoticeForm />
    </PageLayoutWithNav>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    setDefaultCookie(context);
    context.store.dispatch(loadMeRequestAction());
    context.store.dispatch(getNoticeRequestAction(context.params.noticeId));
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Edit;
