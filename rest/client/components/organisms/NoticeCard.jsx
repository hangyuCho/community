import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
import { mediaQueries } from '../../styles/mediaQueries';

dayjs.extend(relativeTime);

const Tr = styled('div')`
  display: grid;
  grid-template-columns: minmax(30px, 1fr) 12fr minmax(40px, 1fr);
  grid-gap: 32px;
  ${mediaQueries('lt')`
      grid-template-columns: 1fr 12fr 3fr 3fr 1fr;
  `};
`;

const Td = styled('div')`
  text-align: center;
  width: 100%;
  margin: ${(p) => p.theme.space * 2}px 0;
  font-size: 1rem;
  font-weight: ${(p) => (p.th ? 900 : 400)};
  ${(p) =>
    p.th &&
    css`
      text-transform: uppercase;
    `}
`;

const Id = styled(Td)``;
const Title = styled(Td)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${(p) =>
    p.isTd &&
    css`
      text-align: left;
      a {
        text-decoration: none;
        color: inherit;
        transition: all 500ms ease;
        &:hover {
          color: #838383;
        }
      }
    `};
`;
const View = styled(Td)``;
const CreatedAt = styled(Td)`
  display: none;
  ${mediaQueries('lt')`
      display:block
  `};
`;
const UpdatedAt = styled(Td)`
  display: none;
  ${mediaQueries('lt')`
      display:block;
  `};
`;

const NoticeCard = ({ notice, header = false }) => (
  <Tr>
    {header ? (
      <>
        <Id th>id</Id>
        <Title th>title</Title>
        <CreatedAt th>createdAt</CreatedAt>
        <UpdatedAt th>updatedAt</UpdatedAt>
        <View th>view</View>
      </>
    ) : (
      <>
        <Id>{notice.id}</Id>
        <Title isTd>
          <Link href={`/notice/${notice.id}`}>
            <a>{notice.title}</a>
          </Link>
        </Title>
        <CreatedAt>{dayjs(notice.createdAt).format('YYYY-MM-DD')}</CreatedAt>
        <UpdatedAt>{dayjs(notice.updatedAt).format('YYYY-MM-DD')}</UpdatedAt>
        <View>{notice.view}</View>
      </>
    )}
  </Tr>
);

NoticeCard.propTypes = {
  // eslint-disable-next-line react/require-default-props
  notice: PropTypes.object,
  // eslint-disable-next-line react/require-default-props
  header: PropTypes.bool,
};

export { NoticeCard };
