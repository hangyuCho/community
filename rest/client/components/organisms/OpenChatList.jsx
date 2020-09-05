import React, { useCallback } from 'react';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';
import { OpenChatItem } from '../molecules';

const Wrapper = styled('div')`
  .swiper-container {
    overflow: hidden;
  }
  .swiper-wrapper {
    display: flex;
  }
`;

const OpenChatList = (props) => {
  const openChatList = [
    {
      id: 1,
      title: '한일 IT 커뮤니티',
      desc:
        'orem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci aliquam, consectetur, consequuntur eveniet exercitationem incidunt laboriosam magni maxime minima modi, non praesentium quam repellendus sed voluptas. Nihil, quasi!',
      category: 'IT',
      url: 'https://open.kakao.com/o/gQKzPKqb',
      secretCode: '0906', // nullable
    },
    {
      id: 2,
      title: '한일 주식 커뮤니티',
      desc:
        'orem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci aliquam, consectetur, consequuntur eveniet exercitationem incidunt laboriosam magni maxime minima modi, non praesentium quam repellendus sed voluptas. Nihil, quasi!',
      category: 'IT',
      url: 'https://open.kakao.com/o/gQKzPKqb',
      secretCode: '0906', // nullable
    },
    {
      id: 3,
      title: '한일 번개 커뮤니티',
      desc:
        'orem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci aliquam, consectetur, consequuntur eveniet exercitationem incidunt laboriosam magni maxime minima modi, non praesentium quam repellendus sed voluptas. Nihil, quasi!',
      category: 'IT',
      url: 'https://open.kakao.com/o/gQKzPKqb',
      secretCode: '0906', // nullable
    },
    {
      id: 4,
      title: '한일 종합 커뮤니티',
      desc:
        'orem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci aliquam, consectetur, consequuntur eveniet exercitationem incidunt laboriosam magni maxime minima modi, non praesentium quam repellendus sed voluptas. Nihil, quasi!',
      category: 'IT',
      url: 'https://open.kakao.com/o/gQKzPKqb',
      secretCode: '0906', // nullable
    },
  ];
  const onClickOutLink = useCallback(
    (url) => () => {
      const win = window.open(url, '_blank');
      win.focus();
    },
    []
  );
  return (
    <Wrapper>
      <Swiper
        slidesPerView="auto"
        spaceBetween={7}
        slidesOffsetBefore={2}
        rebuildOnUpdate
      >
        {openChatList.map((oc) => (
          <div key={oc.id}>
            <OpenChatItem item={oc} onClickOutLink={onClickOutLink} />
          </div>
        ))}
      </Swiper>
    </Wrapper>
  );
};

OpenChatList.propTypes = {};

export { OpenChatList };
