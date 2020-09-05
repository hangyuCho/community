import React from 'react';
import { END } from 'redux-saga';
import styled from 'styled-components';
import wrapper from '../store/configureStore';
import { loadMeRequestAction } from '../store/actions/user/loadme.action';
import setDefaultCookie from '../utils/setDefaultCookie';
import { MainItemLayout, PageLayoutWithNav } from '../components/layouts';
import {
  ApiList,
  JobInfoList,
  OpenChatList,
  TodayNewsList,
  NoticeMainList,
} from '../components/organisms';
import { getNoticeListRequestAction } from '../store/actions/notice/getNoticeList.action';

const Wrapper = styled('div')`
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: ${(p) => p.theme.space * 6}px;
`;

const Home = () => (
  <PageLayoutWithNav pageName="Home">
    <Wrapper>
      <MainItemLayout itemName="공지사항">
        <NoticeMainList />
      </MainItemLayout>

      <MainItemLayout itemName="오늘의 뉴스">
        <TodayNewsList />
      </MainItemLayout>

      <MainItemLayout itemName="취업정보">
        <JobInfoList />
      </MainItemLayout>

      <MainItemLayout itemName="오픈채팅방">
        <OpenChatList />
      </MainItemLayout>

      <MainItemLayout itemName="타마 API 모음">
        <ApiList />
      </MainItemLayout>
    </Wrapper>
  </PageLayoutWithNav>
);

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    setDefaultCookie(context);
    context.store.dispatch(loadMeRequestAction());
    context.store.dispatch(getNoticeListRequestAction({ limit: 3 }));
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

Home.propTypes = {};

export default Home;
