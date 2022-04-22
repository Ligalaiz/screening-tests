import React, { FC } from 'react';
import { RegistrationForm } from '@modules/RegistrationForm';
import { Title } from '@components/Title';
import { Question } from '@components/Question';
import * as r from './RegistrationPage.style';

const RegistrationPage: FC = () => {
  return (
    <div css={r.formWrap}>
      <Title title="Регистрация" subtitle="Введите свои данные" />
      <RegistrationForm />
      <Question question="Есть аккаунт?" link="Войти" />
    </div>
  );
};

export { RegistrationPage };
