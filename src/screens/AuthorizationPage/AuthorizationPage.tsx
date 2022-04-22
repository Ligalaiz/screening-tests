import React, { FC } from 'react';
import { AuthorizationForm } from '@modules/AuthorizationForm';
import { Title } from '@components/Title';
import { Question } from '@components/Question';
import * as a from './AuthorizationPage.style';

const AuthorizationPage: FC = () => {
  return (
    <div css={a.formWrap}>
      <Title title="Вход" subtitle="Введите свои данные" />
      <AuthorizationForm />
      <Question question="Нет аккаунта?" link="Зарегистрироваться" />
    </div>
  );
};

export { AuthorizationPage };
