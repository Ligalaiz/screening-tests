import React, { FC } from 'react';
import * as m from './Message.style';
import success from '@assets/img/success.svg';

const Message: FC = ({ children }) => {
  return (
    <div css={m.messageWrap} data-testid="message">
      <div>
        <img src={success} alt="success" />
      </div>
      <p css={m.text} data-testid="messageText">
        {children}
      </p>
    </div>
  );
};

export { Message };
