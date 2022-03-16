import React from 'react';
import { render } from 'react-dom';
import { Global } from '@emotion/react';
import { App } from '@src/App';
import { globalStyle } from '@src/styles';

render(
  <div className="container">
    <Global styles={globalStyle} />
    <App />
  </div>,
  document.getElementById('root'),
);
