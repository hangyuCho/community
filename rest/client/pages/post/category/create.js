import React, { useEffect } from 'react';
import { END } from 'redux-saga';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { AppLoading, PageLayoutWithNav } from '../../../components/layouts';
import wrapper from '../../../store/configureStore';
import setDefaultCookie from '../../../utils/setDefaultCookie';
import { loadMeRequestAction } from '../../../store/actions/user/loadme.action';
import { getCategoryListRequestAction } from '../../../store/actions/category/getCategoryList.action';
import { CategoryList } from '../../../components/organisms';
import { CategoryForm } from '../../../components/forms';

const Create = () => {
  const { categoryList, createCategoryLoading } = useSelector(
    (state) => state.categoryReducer
  );

  const router = useRouter();
  const { loadMeLoading, loadMeError, me } = useSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    if (!me) {
      router.push('/login');
    }
  }, [me]);

  if (loadMeLoading || createCategoryLoading) {
    return <AppLoading />;
  }

  if (loadMeError) {
    return <div>error...</div>;
  }

  return (
    <PageLayoutWithNav pageName="Create Post Category">
      <CategoryForm />
      <CategoryList categoryList={categoryList} />
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
