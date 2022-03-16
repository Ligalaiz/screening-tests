import React, { FC, ChangeEvent } from 'react';
import * as InputStyle from './InputStyle';

interface IInput {
  placeholder: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
  value: string;
  className?: string;
  testid?: string;
}

const Input: FC<IInput> = ({
  value,
  placeholder,
  name,
  handleChange,
  type = 'text',
  className,
  testid,
}) => {
  return (
    <input
      value={value}
      onChange={handleChange}
      data-testid={testid}
      type={type}
      name={name}
      placeholder={placeholder}
      className={className}
    />
  );
};

export { Input };
