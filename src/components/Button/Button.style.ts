import { css } from '@emotion/react';
import { color } from '@src/styles';

export const formBtn = css`
  width: 100%;
  padding: 12px;
  border: none;

  font-family: 'SF Compact Display';
  font-size: 17px;
  color: ${color['white-color']};
  letter-spacing: 0.03rem;
  text-transform: uppercase;

  background: ${color['black-color-light']};
  cursor: pointer;
`;

export const formBtnDisabled = css`
  ${formBtn}

  background: ${color['gray-color']};
  cursor: default;
`;
