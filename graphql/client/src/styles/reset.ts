import { css } from 'styled-components';

export default css`
    @charset "UTF-8";

    /* browser reset */
    * {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        vertical-align: baseline;
    }
    *,
    :after,
    :before {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    body {
        word-wrap: break-word;
        word-break: keep-all;
        -webkit-text-size-adjust: none;
    }
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }
    ul,
    li,
    ol,
    dl,
    dt,
    dd {
        list-style: none;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: 100%;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    img,
    video {
        vertical-align: top;
        border: 0;
    }
    button {
        background: none;
        outline: none;
        border: none;
        cursor: pointer;
        background-color: transparent;
        border-radius: 0px;
    }
    label {
        cursor: pointer;
        vertical-align: middle;
    }
    input,
    select,
    textarea,
    button {
        font: inherit;
        color: inherit;
        vertical-align: middle;
        -webkit-border-radius: 0;
    } /* -webkit-appearance:none; */
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px #f6f8f9 inset !important;
    } /*크롬에서 자동완성된 input의 노란색을 삭제*/
    textarea {
        resize: none;
    }
    a,
    a:hover,
    a:focus {
        color: inherit;
        text-decoration: none;
    }
    i,
    em,
    address {
        font-style: normal;
        font-weight: normal;
    }
    label img {
        pointer-events: none;
    } /* label 클릭불가 해결*/
    input[type='number']::-webkit-outer-spin-button,
    input[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none; /*number ui 삭제*/
    }

    /* 공통 css 시작 */
    html,
    body {
        width: 100%;
        height: 100%;
        /* width:1920px; height:1080px; */
        margin: 0;
        padding: 0;
        font-family: inherit;
        font-size: 1rem;
        /* font-size: 16px */
        overflow-x: hidden;
    }
    /* text drag selection */
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    ul li {
        display: block;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    a:active,
    a:hover {
        text-decoration: none;
    }
    a:active {
        background-color: transparent;
    }
    section {
        display: block;
        margin: 0;
        padding: 0;
    }
    article {
        display: block;
        margin: 0;
        padding: 0;
    }
`;
