import React from 'react';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser/index';
import { BottomInfo, Category } from '../molecules';
import { Desc } from '../atoms';
import { UserCard } from './UserCard';

const PostDetail = ({ post, commentsLength }) => (
  <>
    <BottomInfo
      likers={post.Likers.length}
      view={post.view}
      comments={commentsLength}
    />
    <Category name={post.Category.name} />
    <Desc>{Parser(post.desc)}</Desc>
    <UserCard user={post.User} />
  </>
);

PostDetail.propTypes = {
  post: PropTypes.object.isRequired,
  commentsLength: PropTypes.number.isRequired,
};

export { PostDetail };
