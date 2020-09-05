import {useMemo} from 'react'
import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client'
import {setContext} from "apollo-link-context";
import {concatPagination} from '@apollo/client/utilities'
import {onError} from "apollo-link-error";
import Router from "next/router";

let apolloClient: any

function createApolloClient() {

    const httpLink = createHttpLink({
        uri: "http://localhost:4000/graphql",
        credentials: "include"
    });

    const errorLink = onError(({graphQLErrors, networkError}) => {
        if (graphQLErrors)
            graphQLErrors.map(({message, locations, path}) => {
                console.log(
                    `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                );
                console.log(message)
                if (message.includes("인증")) {
                    Router.replace("/login");
                } else {
                    console.log("dispatch");
                }
            });
        if (networkError) console.log(`[Network error]: ${networkError}`);
    });

    const authLink = setContext((_, {headers}) => {
        return {
            headers: {
                ...headers,
            }
        };
    });

    const cache = new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    allPosts: concatPagination(),
                },
            },
        },
    })

    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        // @ts-ignore
        link: errorLink.concat(authLink.concat(httpLink)),
        cache
    })
}

export function initializeApollo(initialState = null) {
    const _apolloClient = apolloClient ?? createApolloClient()

    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // gets hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        const existingCache = _apolloClient.extract()
        // Restore the cache using the data passed from getStaticProps/getServerSideProps
        // combined with the existing cached data
        _apolloClient.cache.restore({...existingCache, ...(initialState as any)})
    }
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') return _apolloClient
    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient

    return _apolloClient
}

export function useApollo(initialState: any) {
    return useMemo(() => initializeApollo(initialState), [initialState])
}