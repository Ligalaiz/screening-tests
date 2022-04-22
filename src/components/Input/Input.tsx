import React, { FC, useRef } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { normalizePhone } from '@src/utils';
import * as i from './Input.style';

interface FormValues {
  name?: string;
  nickname?: string;
  email?: string;
  phone?: string;
  password: string;
  mix?: string;
  accept?: boolean;
  [key: string]: string | boolean | undefined;
}

interface IInput {
  type: string;
  testId: string;
  register: UseFormRegister<FormValues>;
  errors?: any;
  placeholder?: string;
  name: 'name' | 'nickname' | 'email' | 'phone' | 'password' | 'accept' | 'mix';
}

const Input: FC<IInput> = ({ name = '', testId, children, type, register, errors, placeholder = ' ' }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  let inputStyle = i.field;
  const isAccept = name === 'accept';
  const isPassword = name === 'password';
  const isPhone = name === 'phone';

  if (isPassword) inputStyle = i[`${name}`];
  if (name === 'phone') inputStyle = i[`${name}`];
  if (errors?.[`${name}`]) {
    if (isPhone) inputStyle = i.phoneError;
    if (isPassword) inputStyle = i.passwordError;
    inputStyle = i.fieldError;
  }

  const onButtonClick = () => {
    if (inputRef.current) {
      const inputPassword = inputRef.current as typeof inputRef.current & {
        type: string;
      };

      inputPassword.type = inputPassword.type === 'text' ? 'password' : 'text';
    }
  };

  const acceptViews = (
    <label css={i.acceptLabel}>
      <input {...register('accept')} type={type} css={i.accept} data-testid={testId} />
      <i className="accept" css={i.acceptSquare} />
      <span css={i.acceptText}>{isAccept && children}</span>
    </label>
  );

  const defaultViews = (
    <div css={i.fieldWrap}>
      <input
        {...register(`${name}`)}
        type={type}
        {...(isPassword && { ref: inputRef })}
        {...(name === 'phone' && { onChange: normalizePhone })}
        css={inputStyle}
        defaultValue=""
        placeholder={placeholder}
        data-testid={testId}
      />
      <label>{!isAccept && children}</label>
      {isPhone && (
        <div className="phoneCode" css={i.phoneCode}>
          +7
        </div>
      )}
      {type === 'password' && <button type="button" onClick={onButtonClick} css={i.passwordBtn} />}
    </div>
  );

  return isAccept ? acceptViews : defaultViews;
};

export { Input };
