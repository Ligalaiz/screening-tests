import { css } from '@emotion/react';
import { color } from '@src/styles';
import eye from '@assets/img/eye.svg';

export const form = css`
  display: flex;
  flex-wrap: wrap;
  max-width: 374px;
  margin-bottom: 3rem;
`;

export const fieldWrap = css`
  position: relative;
  width: 100%;
  margin-bottom: 1.7rem;

  & > label {
    color: ${color['gray-color-light']};
    pointer-events: none;
    position: absolute;
    transition: all 0.2s linear;
    font-size: 1.5rem;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    line-height: 1.8rem;
    z-index: 1000;
  }

  & input:focus + label,
  & input:not(:placeholder-shown) + label {
    top: -10px;
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;

export const field = css`
  position: relative;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${color['gray-color']};
  padding: 9px 0;

  color: ${color['black-color-light']};
  font-size: 1.5rem;
`;

export const fieldError = css`
  ${field}
  border-bottom: 1px solid ${color['red-color']};

  color: ${color['red-color']};
`;

export const password = css`
  ${field}

  width: 100%;
  padding-right: 20px;
  margin-bottom: 0;
`;

export const passwordLabel = css`
  position: relative;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 19px;
    height: 14px;
    background-image: url(${eye});
    transform: translateY(-50%);
  }
`;

export const accept = css`
  ${field}

  max-width: 374px;
`;

export const acceptLabel = css`
  position: relative;

  padding-left: 30px;
  font-size: 13px;
  line-height: 16px;
  color: ${color['black-color']};
  max-width: 374px;
  display: block;
  margin-bottom: 34px;

  cursor: pointer;
  & > input {
    position: absolute;
    z-index: -1;

    opacity: 0;
  }

  & > .accept {
    position: absolute;
    left: 0;
    display: inline-flex;
    align-items: center;
    user-select: none;
    width: 1.7rem;
    height: 1.7rem;
  }

  & > .accept::before {
    content: '';

    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid ${color['gray-color']};
    margin-right: 0.5em;

    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }

  & > input ~ .accept::after {
    content: '';
    position: absolute;
    border-color: ${color['black-color-light']};
    background-color: ${color['black-color-light']};
    border: 1px solid ${color['black-color-light']};
    visibility: hidden;
    width: 1rem;
    height: 1rem;
    left: 50%;
    top: 50%;
    transform: translate(-59%, -50%);
    transition: all 0.2s linear;
  }

  & > input:checked ~ .accept::after {
    visibility: visible;
  }
`;

export const acceptSquare = css`
  position: relative;
`;

export const acceptText = css`
  letter-spacing: -0.7px;
`;

export const titleWrap = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

export const loginLink = css`
  margin-left: 5px;
  font-family: 'SF Compact Display';
  font-weight: 600;
  font-size: 1.7rem;
  color: ${color['black-color-light-X1']};
`;

export const buttonSbt = css`
  padding: 12px;
  border: none;
  width: 100%;
  background: ${color['black-color-light']};
  font-family: 'SF Compact Display';
  letter-spacing: 0.03rem;
  text-transform: uppercase;
  font-size: 17px;
  color: ${color['white-color']};
  cursor: pointer;
`;

export const buttonSbtDisabled = css`
  background: ${color['gray-color']};
`;

export const question = css`
  color: ${color['gray-color-light']};
  font-size: 1.7rem;
  line-height: 2rem;
  max-width: 374px;
  text-align: center;
`;
