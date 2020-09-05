import React from 'react';
import { CommentCard } from './index';

const CommentList = ({ commentList }) => {
  if (commentList.length === 0) {
    return <div>댓글이 존재하지 않습니다. </div>;
  }
  return commentList.map((comment) => (
    <CommentCard key={comment.id} comment={comment} />
  ));
};

export { CommentList };
