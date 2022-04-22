import React, { FC } from 'react';
import * as q from './Question.style';

interface IQuestion {
  question: string;
  link: string;
}

const Question: FC<IQuestion> = ({ question, link }) => {
  return (
    <p css={q.question} data-testid="formQuestion">
      {question}{' '}
      <a href="#/" css={q.loginLink} data-testid="formLink">
        {link}
      </a>
    </p>
  );
};

export { Question };
