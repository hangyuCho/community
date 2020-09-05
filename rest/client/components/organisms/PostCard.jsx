import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { BottomInfo, UserInfo, Category } from '../molecules';

dayjs.extend(relativeTime);

const Wrapper = styled('div')`
  border: 1px solid #e2e2e2;
  padding: ${(props) => props.theme.space * 2}px
    ${(props) => props.theme.space * 4}px;
  margin: ${(props) => props.theme.space * 2}px 0;
`;
const Dates = styled('div')`
  text-align: right;
  font-size: 12px;
  font-style: italic;
`;

const Contents = styled('div')`
  display: flex;
  padding: ${(props) => props.theme.space * 2}px 0;
`;

const PostInfo = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 0 ${(props) => props.theme.space * 2}px;
`;
const Title = styled('div')`
  font-size: 21px;
  font-weight: 900;
  margin-bottom: auto;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const PostCard = ({ post }) => (
  <Wrapper key={post.id}>
    <Dates>
      <p>{dayjs(post.createdAt).fromNow()}</p>
    </Dates>
    <Contents>
      <UserInfo username={post.User.username} />
      <PostInfo>
        <Category name={post.Category.name} />
        <Title>
          <Link href={`/post/${post.id}`}>
            <a>
              <h2>{post.title}</h2>
            </a>
          </Link>
        </Title>
      </PostInfo>
    </Contents>
    <BottomInfo
      likers={post.Likers.length}
      view={post.view}
      comments={post.Comments.length}
    />
  </Wrapper>
);

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export { PostCard };
