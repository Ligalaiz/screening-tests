import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as f from './Form.style';

interface FormValues {
  name: string;
  nickname: string;
  email: string;
  phone: string;
  password: string;
  accept: boolean;
  [key: string]: string | boolean;
}

const Form: FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const [isHidden, setIsHidden] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log({ data });
  };

  return (
    <>
      <div css={f.titleWrap}>
        <h1 css={f.title}>Регистрация</h1>
        <p css={f.subtitle}>Введите свои данные</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} css={f.form}>
        <div css={f.fieldWrap}>
          <input
            {...register('name')}
            type="text"
            css={f.field}
            placeholder=" "
          />
          <label>Имя</label>
        </div>
        <div css={f.fieldWrap}>
          <input
            {...register('nickname')}
            type="text"
            css={f.field}
            placeholder=" "
          />
          <label>Никнейм</label>
        </div>
        <div css={f.fieldWrap}>
          <input
            {...register('email')}
            type="email"
            css={f.field}
            placeholder=" "
          />
          <label>email</label>
        </div>
        <div css={f.fieldWrap}>
          <input
            {...register('phone')}
            type="tel"
            css={f.fieldError}
            placeholder=" "
          />
          <label>Телефон</label>
        </div>
        <div css={f.fieldWrap}>
          <input
            {...register('password')}
            type={isHidden ? 'password' : 'text'}
            css={f.password}
            placeholder=" "
          />
          <label>Пароль</label>
        </div>
        <label css={f.acceptLabel}>
          <input {...register('accept')} type="checkbox" css={f.accept} />
          <i className="accept" css={f.acceptSquare} />
          <span css={f.acceptText}>
            Я даю свое согласие на обработку персональных данных
          </span>
        </label>

        <button css={f.buttonSbt}>Зарегистрироваться</button>
      </form>
      <p css={f.question}>
        Есть аккаунт?{' '}
        <a href="#/" css={f.loginLink}>
          Войти
        </a>
      </p>
    </>
  );
};

export { Form };
