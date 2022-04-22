import { css } from '@emotion/react';
import { color } from '@src/styles';

export const titleWrap = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  max-width: 374px;
  margin-bottom: 6.3rem;
`;

export const title = css`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 4.7rem;
  line-height: 55px;
  color: ${color['black-color-light']};
`;

export const subtitle = css`
  font-family: 'Roboto';
  font-size: 1.5rem;
  line-height: 18px;
  color: ${color['black-color-light']};
`;
