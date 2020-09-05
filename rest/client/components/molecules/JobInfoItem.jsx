import React, { useCallback } from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import RoomIcon from '@material-ui/icons/Room';
import SearchIcon from '@material-ui/icons/Search';
import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { UserInfo } from './UserInfo';
import { Tag } from '../atoms';

dayjs.extend(relativeTime);

const Wrapper = styled('div')`
  background-color: #eaeaea;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: ${(p) => p.theme.space * 4}px ${(p) => p.theme.space * 3}px
    ${(p) => p.theme.space * 2}px;
  border-radius: 8px;
`;

const Contents = styled('div')``;

const TitleWrapepr = styled('div')`
  margin-bottom: ${(p) => p.theme.space}px;
  display: flex;
  align-items: center;
`;

const Title = styled('div')`
  font-size: 1.2rem;
  font-weight: 900;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Text = styled('p')`
  font-size: 0.9rem;
  font-weight: 400;
  margin: ${(p) => p.theme.space / 2}px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

const Company = styled(Text)``;

const Address = styled(Text)`
  display: flex;
  align-items: center;
`;

const Desc = styled(Text)`
  -webkit-line-clamp: 3;
`;

const CreatedAt = styled(Text)`
  text-align: right;
`;

const JobInfoItem = (props) => {
  const onClickGoogleMap = useCallback(
    (url) => () => {
      const win = window.open(url, '_blank');
      win.focus();
    },
    []
  );

  return (
    <Wrapper>
      <div>
        <UserInfo username="짬뽕" />
      </div>
      <Contents>
        <TitleWrapepr>
          <Tag text="New" color="red" />
          <Title>
            <Link href="#">
              <a>
                フロントエンドエンジニアフロントエンドエンジニアフロントエンドエンジニアフロントエンドエンジニア
              </a>
            </Link>
          </Title>
        </TitleWrapepr>
        <Company>
          TAMA株式会社
          <IconButton
            size="small"
            onClick={onClickGoogleMap(
              `https://www.google.co.jp/search?complete=1&hl=ja&q=${encodeURIComponent(
                'TAMA株式会社'
              )}&gws_rd=ssl`
            )}
          >
            <SearchIcon />
          </IconButton>
        </Company>
        <Address>
          川崎市高津区{' '}
          <IconButton
            size="small"
            onClick={onClickGoogleMap(
              `https://www.google.com/maps/place/${encodeURIComponent(
                '川崎市高津区'
              )}`
            )}
          >
            <RoomIcon />
          </IconButton>
        </Address>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          consequuntur eos eum fuga iure maiores minus mollitia necessitatibus
          obcaecati quam quibusdam tempora! Enim id laudantium quaerat quidem,
          reiciendis voluptas voluptates?
        </Desc>
        <CreatedAt>{dayjs(Date.now()).fromNow()}</CreatedAt>
      </Contents>
    </Wrapper>
  );
};

JobInfoItem.propTypes = {
  //
};

export { JobInfoItem };
