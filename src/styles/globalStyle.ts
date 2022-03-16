import { css } from '@emotion/react';
import { color } from './variables';
import font from '@assets/fonts/roboto-regular.woff';

export const globalStyle = css`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url(${font});
  }

  html {
    box-sizing: border-box;
    overflow: -moz-scrollbars-vertical;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  * {
    box-sizing: inherit;
    outline: none;
  }

  ::before {
    box-sizing: inherit;
    outline: none;
  }

  ::after {
    box-sizing: inherit;
    outline: none;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 0;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 0;
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
  }

  :root {
    font-size: 10px;
  }

  .wrapper {
    min-width: 320px;
    width: 100vw;
    height: 100vh;
  }

  .container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 15px;
  }

  input:focus {
    outline: none;
  }

  body {
    position: relative;

    margin: 0;
    padding: 0;

    font-family: 'Roboto', 'Arial', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${color['black-color']};

    background-color: ${color['white-color']};

    user-select: none;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  #root {
    height: 100vh;
    display: flex;
    justify-content: center;
    padding-top: 300px;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    border: 0;
    clip: rect(0 0 0 0);
  }

  .visually-hidden:not(:focus):not(:active) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .reset-list {
    margin: 0;
    padding: 0;

    list-style: none;
  }

  .wrapper {
    min-width: 320px;
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 50px;
  }

  ::-webkit-scrollbar {
    width: 14px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${color['grey-color']};
    background-clip: padding-box;
    border-radius: 5px;
  }
`;
