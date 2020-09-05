import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const TotalComment = styled('h1')`
  font-size: 1.4rem;
  font-weight: 800;
`;

const CommentTotal = (props) => {
  const { commentList } = useSelector((state) => state.commentReducer);

  return (
    commentList.length > 0 && (
      <TotalComment>
        {commentList.length} Comment{commentList.length === 1 ? '' : 's'}
      </TotalComment>
    )
  );
};

CommentTotal.propTypes = {
  //
};

export { CommentTotal };
