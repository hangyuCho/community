import React, { useEffect } from 'react';
import { END } from 'redux-saga';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { AppLoading, PageLayoutWithNav } from '../../components/layouts';
import { PostForm } from '../../components/forms';
import wrapper from '../../store/configureStore';
import { loadMeRequestAction } from '../../store/actions/user/loadme.action';
import setDefaultCookie from '../../utils/setDefaultCookie';
import { getCategoryListRequestAction } from '../../store/actions/category/getCategoryList.action';

const Create = () => {
  const router = useRouter();
  const { categoryList } = useSelector((state) => state.categoryReducer);
  const { loadMeLoading, loadMeError, me } = useSelector(
    (state) => state.userReducer
  );
  const { createPostLoading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    if (!me) {
      router.push('/login');
    }
  }, [me]);

  if (loadMeLoading || createPostLoading) {
    return <AppLoading />;
  }

  if (loadMeError) {
    return <div>error...</div>;
  }

  return (
    <PageLayoutWithNav pageName="Create Post">
      <PostForm categoryList={categoryList} />
    </PageLayoutWithNav>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    setDefaultCookie(context);
    context.store.dispatch(loadMeRequestAction());
    context.store.dispatch(getCategoryListRequestAction());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Create;
