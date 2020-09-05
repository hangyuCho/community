import React from 'react';
import { END } from 'redux-saga';
import { useSelector } from 'react-redux';
import wrapper from '../../store/configureStore';
import setDefaultCookie from '../../utils/setDefaultCookie';
import { loadMeRequestAction } from '../../store/actions/user/loadme.action';
import { getNoticeListRequestAction } from '../../store/actions/notice/getNoticeList.action';
import { PageLayoutWithNav } from '../../components/layouts';
import { NoticeCard } from '../../components/organisms';
import { CreateButton } from '../../components/molecules';

const NoticeList = (props) => {
  const { me } = useSelector((state) => state.userReducer);
  const { noticeList } = useSelector((state) => state.noticeReducer);

  const isAdmin = me?.role === 'admin';

  return (
    <PageLayoutWithNav pageName="Notice">
      <NoticeCard header />
      {noticeList.map((notice) => (
        <NoticeCard key={notice.id} notice={notice} />
      ))}
      {isAdmin && <CreateButton path="/notice/create" />}
    </PageLayoutWithNav>
  );
};

NoticeList.propTypes = {
  //
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    setDefaultCookie(context);
    context.store.dispatch(loadMeRequestAction());
    context.store.dispatch(getNoticeListRequestAction());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default NoticeList;
