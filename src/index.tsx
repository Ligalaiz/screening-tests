import React from 'react';
import { render } from 'react-dom';
import { Global } from '@emotion/react';
import { App } from '@src/App';
import { globalStyle } from '@src/styles';
import { RenderAppUtils } from '@utils/renderApp.utils';
import { BrowserRouter as Router } from 'react-router-dom';

render(
  <Router>
    <div className="container">
      <Global styles={globalStyle} />
      <RenderAppUtils />
      <App />
    </div>
  </Router>,
  document.getElementById('root'),
);
