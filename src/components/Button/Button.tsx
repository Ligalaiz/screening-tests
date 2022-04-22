import React, { FC } from 'react';
import * as b from './Button.style';

interface IButton {
  type?: 'button' | 'submit' | 'reset' | undefined;
  name?: string;
  testid?: string;
  children: string;
  disabled: boolean;
}

const Button: FC<IButton> = ({ children, type = 'button', name, testid, disabled }) => {
  return (
    <button
      disabled={disabled}
      css={disabled ? b.formBtnDisabled : b.formBtn}
      data-testid={testid}
      type={type || 'button'}
      data-name={name}
    >
      {children}
    </button>
  );
};

export { Button };
