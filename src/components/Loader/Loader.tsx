import React from 'react';
import { loader } from './LoaderStyle';
import { TodoStore } from '@src/store';

const Loader = () => {
  const { isLoading } = TodoStore;

  if (!isLoading) return null;

  return <div css={loader} />;
};

export { Loader };
