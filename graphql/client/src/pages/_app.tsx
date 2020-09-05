import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import Head from 'next/head';
import { GlobalStyle } from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const App = ({ Component, pageProps }: any) => {
    const apolloClient = useApollo(pageProps.initialApolloState);

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap"
                    rel="stylesheet"
                />
                <title>Tamastudy</title>
            </Head>
            <ApolloProvider client={apolloClient}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </ThemeProvider>
            </ApolloProvider>
        </>
    );
};

export default App;
