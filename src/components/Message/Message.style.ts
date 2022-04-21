import { css } from '@emotion/react';
import { color } from '@src/styles';

export const messageWrap = css`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  background: ${color['white-color']};

  z-index: 1000;
`;

export const text = css`
  color: ${color['black-color-light']};
`;
