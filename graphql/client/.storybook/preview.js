import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import { GlobalStyle } from '../src/styles/GlobalStyles';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../src/lib/apolloClient';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
        storySort: (a, b) =>
            a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    },
};

export const decorators = [
    (Story) => {
        const client = useApollo({});
        return (
            <ApolloProvider client={client}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Story />
                </ThemeProvider>
            </ApolloProvider>
        );
    },
];
