import { css } from '@emotion/react';
import { color } from '@src/styles';

export const formWrap = css`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;

export const question = css`
  max-width: 374px;

  font-size: 1.7rem;
  color: ${color['gray-color-light']};
  line-height: 2rem;
  text-align: center;
`;

export const loginLink = css`
  margin-left: 5px;

  font-family: 'SF Compact Display';
  font-weight: 600;
  font-size: 1.7rem;
  color: ${color['black-color-light-X1']};
`;
