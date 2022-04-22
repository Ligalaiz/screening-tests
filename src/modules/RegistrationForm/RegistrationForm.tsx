import { Input } from '@components/Input';
import { Message } from '@components/Message';
import { Button } from '@components/Button';
import { errorBoundary } from '@src/hoc/errorBoundary';
import { useForceUpdate } from '@src/hook/useForceUpdate';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as f from './RegistrationForm.style';

interface FormValues {
  name?: string;
  nickname?: string;
  email?: string;
  phone?: string;
  password: string;
  accept?: boolean;
  [key: string]: string | boolean | undefined;
}

const InputWithWithErrorBoundary = errorBoundary(Input);
let isSubmit = false;

const RegistrationForm: FC = () => {
  const forceUpdate = useForceUpdate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitSuccessful },
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      nickname: '',
      email: '',
      phone: '',
      password: '',
      accept: false,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Registration', { data });
    setTimeout(() => reset());
  };

  if (isSubmitSuccessful) {
    isSubmit = true;
    setTimeout(() => {
      isSubmit = false;
      forceUpdate();
    }, 3000);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} css={f.form} data-testid="registrationForm">
        <InputWithWithErrorBoundary name="name" register={register} type="text" errors={errors} testId="nameField">
          Имя
        </InputWithWithErrorBoundary>
        <InputWithWithErrorBoundary
          name="nickname"
          register={register}
          type="text"
          errors={errors}
          testId="nicknameField"
        >
          Никнейм
        </InputWithWithErrorBoundary>
        <InputWithWithErrorBoundary name="email" register={register} type="email" errors={errors} testId="emailField">
          email
        </InputWithWithErrorBoundary>
        <InputWithWithErrorBoundary
          name="phone"
          register={register}
          type="tel"
          errors={errors}
          testId="phoneField"
          placeholder="___ ___ __ __"
        >
          Телефон
        </InputWithWithErrorBoundary>
        <InputWithWithErrorBoundary
          name="password"
          register={register}
          type="password"
          errors={errors}
          testId="passwordField"
        >
          Пароль
        </InputWithWithErrorBoundary>
        <InputWithWithErrorBoundary
          name="accept"
          register={register}
          type="checkbox"
          errors={errors}
          testId="acceptField"
        >
          Я даю свое согласие на обработку персональных данных
        </InputWithWithErrorBoundary>

        <Button name="formBtn" type="submit" testid="formBtn" disabled={!isValid}>
          Зарегистрироваться
        </Button>
      </form>
      {isSubmit && <Message>Вы зарегистрированы</Message>}
    </>
  );
};

export { RegistrationForm };
