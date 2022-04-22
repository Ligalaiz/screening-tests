import { Input } from '@components/Input';
import { Message } from '@components/Message';
import { Button } from '@components/Button';
import { errorBoundary } from '@src/hoc/errorBoundary';
import { useForceUpdate } from '@src/hook/useForceUpdate';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as f from './AuthorizationForm.style';

interface FormValues {
  mix?: string;
  password: string;
  [key: string]: string | boolean | undefined;
}

const InputWithWithErrorBoundary = errorBoundary(Input);
let isSubmit = false;

const AuthorizationForm: FC = () => {
  const forceUpdate = useForceUpdate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitSuccessful },
  } = useForm<FormValues>({
    defaultValues: {
      mix: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Authorization', { data });
    setTimeout(() => reset());
  };

  if (isSubmitSuccessful) {
    isSubmit = true;
    setTimeout(() => {
      isSubmit = false;
      forceUpdate();
    }, 1000);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} css={f.form} data-testid="registrationForm">
        <InputWithWithErrorBoundary name="mix" register={register} type="text" errors={errors} testId="mixField">
          Email или номер телефона
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

        <Button name="formBtn" type="submit" testid="formBtn" disabled={!isValid}>
          Войти
        </Button>
      </form>
      {isSubmit && <Message>Вы авторизованы</Message>}
    </>
  );
};

export { AuthorizationForm };
