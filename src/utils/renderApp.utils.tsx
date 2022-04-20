import { AppRouter } from '@src/router';
import React, { FC } from 'react';
import { App } from '../App';

const RenderAppUtils: FC = () => {
  return (
    <App>
      <AppRouter />
    </App>
  );
};

export { RenderAppUtils };
