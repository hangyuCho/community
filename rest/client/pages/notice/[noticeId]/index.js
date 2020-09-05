import React, { useCallback } from 'react';
import { END } from 'redux-saga';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import wrapper from '../../../store/configureStore';
import setDefaultCookie from '../../../utils/setDefaultCookie';
import { loadMeRequestAction } from '../../../store/actions/user/loadme.action';
import { getNoticeRequestAction } from '../../../store/actions/notice/getNotice.action';
import { PageLayoutWithNav } from '../../../components/layouts';
import { NoticeDetail, UserCard } from '../../../components/organisms';
import { AdminButton, CreateButton } from '../../../components/molecules';
import { deleteNoticeRequestAction } from '../../../store/actions/notice/deleteNotice.action';

const Notice = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { notice } = useSelector((state) => state.noticeReducer);
  const { me } = useSelector((state) => state.userReducer);
  const isAdmin = me?.role === 'admin';
  const { noticeId } = router.query;

  const onClickDelete = useCallback(() => {
    dispatch(deleteNoticeRequestAction(noticeId));
  }, [noticeId]);

  const onClickEditPage = useCallback(() => {
    router.push(`/notice/${noticeId}/edit`);
  }, [noticeId]);

  return (
    <PageLayoutWithNav pageName={notice.title}>
      <NoticeDetail desc={notice.desc} view={notice.view} />
      <UserCard user={notice.User} />
      {isAdmin && (
        <AdminButton
          onClickDelete={onClickDelete}
          onClickEditPage={onClickEditPage}
        />
      )}
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

export default Notice;
