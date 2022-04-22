import React, { FC } from 'react';
import * as t from './Title.style';

interface ITitle {
  title: string;
  subtitle: string;
}

const Title: FC<ITitle> = ({ title, subtitle }) => {
  return (
    <div css={t.titleWrap}>
      <h1 css={t.title} data-testid="formTitle">
        {title}
      </h1>
      <p css={t.subtitle} data-testid="formSubtitle">
        {subtitle}
      </p>
    </div>
  );
};

export { Title };
