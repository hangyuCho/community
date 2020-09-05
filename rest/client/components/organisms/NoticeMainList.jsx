import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { NoticeMainItem } from '../molecules';

const Wrapper = styled('div')``;

const NoticeMainList = (props) => {
  const { noticeList } = useSelector((state) => state.noticeReducer);
  return (
    <Wrapper>
      {noticeList.length === 0 && <div>공지사항이 존재하지 않습니다. </div>}
      {noticeList.map((notice) => (
        <NoticeMainItem
          key={notice.id}
          id={notice.id}
          date={notice.createdAt}
          title={notice.title}
        />
      ))}
    </Wrapper>
  );
};

NoticeMainList.propTypes = {
  //
};

export { NoticeMainList };
