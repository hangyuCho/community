import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { END } from 'redux-saga';
import { getPostRequestAction } from '../../../store/actions/post/getPost.action';
import { deletePostRequestAction } from '../../../store/actions/post/deletePost.action';
import { likePostRequestAction } from '../../../store/actions/post/likePost.action';
import { unLikePostRequestAction } from '../../../store/actions/post/unLikePost.action';
import { AppLoading, PageLayoutWithNav } from '../../../components/layouts';
import wrapper from '../../../store/configureStore';
import { loadMeRequestAction } from '../../../store/actions/user/loadme.action';
import setDefaultCookie from '../../../utils/setDefaultCookie';
import { getCommentListRequestAction } from '../../../store/actions/comment/getCommentList.action';
import {
  CommentList,
  CommentTotal,
  PostDetail,
} from '../../../components/organisms';
import { CommentForm } from '../../../components/forms';
import { AdminButton, PostLikeButton } from '../../../components/molecules';
import { GridWrapper } from '../../../components/atoms';

const Post = () => {
  const router = useRouter();
  const { postId } = router.query;
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.userReducer);
  const {
    getPostLoading,
    deletePostLoading,
    deletePostDone,
    post,
  } = useSelector((state) => state.postReducer);
  const { commentList } = useSelector((state) => state.commentReducer);

  const onClickEditPage = useCallback(() => {
    router.push(`/post/${postId}/edit`);
  }, [postId]);

  const onClickDelete = useCallback(() => {
    if (window.confirm('삭제 하시겠습니까?')) {
      dispatch(deletePostRequestAction(postId));
    }
  }, [postId]);

  const onClickLike = useCallback(() => {
    dispatch(likePostRequestAction(postId));
  }, [postId]);

  const onClickUnLike = useCallback(() => {
    dispatch(unLikePostRequestAction(postId));
  }, [postId]);

  useEffect(() => {
    if (deletePostDone) {
      router.push('/post');
    }
  }, [deletePostDone]);

  if (getPostLoading || deletePostLoading) {
    return <AppLoading />;
  }

  if (!post) {
    return <AppLoading />;
  }

  const isLiker = !!post.Likers.find((liker) => liker.id === me?.id);
  const isAuthor = post.User.id === me?.id;

  return (
    <PageLayoutWithNav pageName={post.title}>
      <GridWrapper>
        <PostDetail post={post} commentsLength={commentList.length} />
        <CommentTotal />
        {me && <CommentForm />}
        <CommentList commentList={commentList} />

        {me && isAuthor && (
          <AdminButton
            onClickEditPage={onClickEditPage}
            onClickDelete={onClickDelete}
          />
        )}

        {me &&
          (isLiker ? (
            <PostLikeButton isLiker={isLiker} onClick={onClickUnLike} />
          ) : (
            <PostLikeButton isLiker={isLiker} onClick={onClickLike} />
          ))}
      </GridWrapper>
    </PageLayoutWithNav>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    setDefaultCookie(context);
    context.store.dispatch(loadMeRequestAction());
    context.store.dispatch(getPostRequestAction(context.params.postId));
    context.store.dispatch(getCommentListRequestAction(context.params.postId));
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Post;
