import React, { useEffect } from 'react';
import { END } from 'redux-saga';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { PostForm } from '../../../components/forms';
import { AppLoading, PageLayoutWithNav } from '../../../components/layouts';
import wrapper from '../../../store/configureStore';
import { loadMeRequestAction } from '../../../store/actions/user/loadme.action';
import setDefaultCookie from '../../../utils/setDefaultCookie';
import { getCategoryListRequestAction } from '../../../store/actions/category/getCategoryList.action';
import { getPostRequestAction } from '../../../store/actions/post/getPost.action';

const EditPost = () => {
  const router = useRouter();
  const { me, loadMeLoading } = useSelector((state) => state.userReducer);
  const { categoryList } = useSelector((state) => state.categoryReducer);
  const { post, getPostError, getPostLoading } = useSelector(
    (state) => state.postReducer
  );

  useEffect(() => {
    if (!me) {
      router.push('/post');
    }
  }, [me]);

  useEffect(() => {
    if (me?.id !== post?.UserId) {
      router.push('/post');
    }
  }, [me, post]);

  useEffect(() => {
    if (getPostError) {
      router.push('/post');
    }
  }, [getPostError]);

  if (!me || loadMeLoading || getPostLoading) {
    return <AppLoading />;
  }

  return (
    <PageLayoutWithNav pageName="Edit Post">
      <PostForm categoryList={categoryList} />
    </PageLayoutWithNav>
  );
};
export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    setDefaultCookie(context);
    context.store.dispatch(loadMeRequestAction());
    context.store.dispatch(getPostRequestAction(context.params.postId));
    context.store.dispatch(getCategoryListRequestAction());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default EditPost;
