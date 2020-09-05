import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import wrapper from '../store/configureStore';
import GlobalStyle from '../styles/GlobalStyles';
import theme from '../styles/theme';
import { AppFooter, AppMenu } from '../components/layouts';
import '../node_modules/react-quill/dist/quill.snow.css';

const Tama = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      q
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/swiper/css/swiper.min.css"
      />
      <title>Tama</title>
    </Head>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <AppMenu />
      <Component />
      <AppFooter />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
        consequatur deleniti dignissimos, dolorem dolores explicabo incidunt
        nihil quam quas sed. Molestias quos, reiciendis. Accusantium, cum
        dolorem nam odit tenetur vel.
      </div>
    </ThemeProvider>
  </>
);

Tama.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(Tama);
