import { GitLink } from '@components/GitLink';
import { Form } from '@modules/Form';
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <GitLink />
        <Form />
        <Outlet />
      </div>
    </div>
  );
};

export { Layout };
