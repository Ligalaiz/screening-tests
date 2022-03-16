import React, { FC, MouseEvent } from 'react';
import * as btn from './ButtonStyle';

interface IButton {
  type?: 'button' | 'submit' | 'reset' | undefined;
  isDisabled?: boolean;
  name?: string;
  handleClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  testid?: string;
}

const Button: FC<IButton> = ({
  children,
  type = 'button',
  name,
  handleClick,
  isDisabled,
  testid,
}) => {
  return (
    <button
      data-testid={testid}
      type={type || 'button'}
      name={name}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export { Button };
