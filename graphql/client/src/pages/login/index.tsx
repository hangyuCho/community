import React, { FunctionComponent } from 'react';
import { ApolloClient, NormalizedCacheObject, useMutation, useQuery } from '@apollo/client';
import { GetServerSideProps } from 'next';
import { initializeApollo } from '../../lib/apolloClient';
import { CurrentUserDocument, LoginDocument, LoginMutation, MutationLoginArgs } from '../../generated/apolloComponents';
import PageLayout from '../../components/layouts/AppPageLayout';

interface OwnProps {}

type Props = OwnProps;

const Login: FunctionComponent<Props> = () => {
    const { data, loading } = useQuery(CurrentUserDocument);
    const [onClickLogin] = useMutation<LoginMutation, MutationLoginArgs>(LoginDocument, {
        variables: {
            input: {
                email: 'the2792@gmail.com',
                password: '12345',
            },
        },
        onError({ message }) {
            alert(message);
        },
        update(cache, { data }) {
            if (!data || !data.login) {
                return;
            }
            cache.writeQuery({
                query: CurrentUserDocument,
                data: {
                    currentUser: data.login,
                },
            });
        },
    });

    if (loading || !data) {
        return <div>Loading ...</div>;
    }
    return (
        <PageLayout title={'Login Page'}>
            {JSON.stringify(data)}
            <button type={'button'} onClick={async () => await onClickLogin()}>
                LOGIN
            </button>
        </PageLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo();
    const res = await apolloClient.query({
        query: CurrentUserDocument,
        context: {
            headers: {
                cookie: ctx.req.headers.cookie,
            },
        },
    });
    apolloClient.writeQuery({
        query: CurrentUserDocument,
        data: {
            currentUser: res.data?.currentUser,
        },
    });
    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
        },
    };
};

export default Login;
