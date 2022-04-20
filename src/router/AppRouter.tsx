import { NotFoundPage } from '@components/NotFoundPage';
import { Layout } from '@src/screens/Layout';
import React, { FC } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid';

const AppRouter: FC = () => {
  const match = useParams();
  return (
    <TransitionGroup>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="*"
            element={
              <CSSTransition in={match != null} timeout={1000} key={uuid()}>
                <NotFoundPage />
              </CSSTransition>
            }
          />
        </Route>
      </Routes>
    </TransitionGroup>
  );
};

export { AppRouter };
