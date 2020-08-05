import { css } from "styled-components";
const reset = css`
  * {
    outline: 0 !important;
    box-sizing: border-box;
  }
  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  div,
  p,
  blockquote,
  pre,
  code,
  address,
  ul,
  ol,
  li,
  menu,
  nav,
  section,
  article,
  aside,
  dl,
  dt,
  dd,
  table,
  thead,
  tbody,
  tfoot,
  label,
  caption,
  th,
  td,
  form,
  fieldset,
  legend,
  hr,
  input,
  button,
  textarea,
  object,
  figure,
  figcaption {
    margin: 0;
    padding: 0;
  }
  html,
  body {
    width: 100%;
    height: 100%;
  }
  html {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  body {
    width: 100%;
    background: #fff;
    min-width: 320px;
    -webkit-text-size-adjust: none;
    word-wrap: break-word;
    word-break: break-all;
  }
  body,
  input,
  select,
  textarea,
  button {
    border: none;
    font-size: 12px;
    font-family: "Spoqa Han Sans", sans-serif;
    color: #333;
    font-weight: 300;
    background: transparent;
  }
  ul,
  ol,
  li {
    list-style: none;
  }
  table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
  }
  img,
  fieldset {
    border: 0;
  }
  address,
  cite,
  code,
  em {
    font-style: normal;
    font-weight: normal;
  }
  label,
  img,
  input,
  select,
  textarea,
  button {
    vertical-align: middle;
  }
  caption,
  legend {
    line-height: 0;
    font-size: 1px;
    overflow: hidden;
  }
  hr {
    display: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 300;
  }
  main,
  header,
  section,
  nav,
  footer,
  aside,
  article,
  figure {
    display: block;
  }
  a {
    color: #333;
    text-decoration: none;
  }
  p {
    line-height: 160%;
  }

  textarea {
    border: 1px solid #dbdbdb;
    resize: none;
  }
  select {
    height: 32px;
    font-size: 13px;
    color: #373737;
    border: 1px solid #e9e9e9;
    background: #fff;
    border-radius: 5px;
  }
  input[type="tel"],
  input[type="time"],
  input[type="text"],
  input[type="password"],
  input[type="search"],
  input[type="email"],
  input[type="file"],
  input[type="url"],
  input[type="number"],
  input[type="date"],
  textarea {
    width: 100%;
    height: 30px;
    font-size: 13px;
    color: #373737;
    border: 1px solid #e9e9e9;
    background: #fff;
    border-radius: 5px;
    transition: all 0.5s;
    vertical-align: middle;
  }
  input::-webkit-input-placeholder {
    color: #b5b5b5;
    font-size: 12px;
    line-height: 100%;
  }
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #fff inset;
    -webkit-text-fill-color: #000;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
  input[type="text"]::-ms-clear {
    display: none;
  }
  textarea {
    padding: 10px;
    height: auto;
  }

  input[type="tel"][readonly],
  input[type="text"][readonly],
  input[type="password"][readonly],
  input[type="email"][readonly],
  input[type="search"][readonly],
  input[type="tel"][disabled],
  input[type="text"][disabled],
  input[type="password"][disabled],
  input[type="search"][disabled],
  input[type="email"][disabled] {
    background: #eaeaea;
    border-color: #c0c0c0;
    color: #666;
    -webkit-appearance: none;
    font-size: 12px;
  }
  textarea[readonly],
  textarea[disabled] {
    padding: 11px;
    font-size: 16px;
    color: #666;
    font-weight: normal;
    line-height: 140%;
    height: 78px;
    background: #eaeaea;
    border: 1px solid #c0c0c0;
  }
  button {
    cursor: pointer;
  }
`;

export default reset;
