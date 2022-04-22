import { css } from '@emotion/react';
import { color } from '@src/styles';
import eye from '@assets/img/eye.svg';

export const fieldWrap = css`
  position: relative;

  width: 100%;
  margin-bottom: 1.7rem;

  & > label {
    position: absolute;
    top: 50%;
    left: 0;

    font-size: 1.5rem;
    color: ${color['gray-color-light']};
    line-height: 1.8rem;

    pointer-events: none;
    transition: all 0.2s linear;
    transform: translateY(-50%);
    z-index: 1000;
  }

  & input:focus + label,
  & input:not(:placeholder-shown) + label {
    top: -10px;
    font-size: 1.2rem;

    line-height: 1.4rem;
  }

  & input::placeholder {
    visibility: hidden;
  }

  & input:focus::placeholder {
    visibility: visible;
  }

  & input:focus ~ .phoneCode,
  & input:not(:placeholder-shown) ~ .phoneCode {
    visibility: visible;
  }
`;

export const field = css`
  position: relative;

  width: 100%;
  border: none;
  border-bottom: 1px solid ${color['gray-color']};
  padding: 9px 0;

  font-size: 1.5rem;
  color: ${color['black-color-light']};
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

export const passwordError = css`
  ${fieldError}
  ${password}
`;

export const passwordBtn = css`
  position: absolute;
  top: 50%;
  right: 0;

  width: 25px;
  height: 25px;
  border: none;
  padding: 0;

  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 50%;
  background-image: url(${eye});

  transform: translateY(-50%);
`;

export const phone = css`
  ${field}

  padding-left: 20px;
`;

export const phoneError = css`
  ${fieldError}
  ${phone}
`;

export const phoneCode = css`
  position: absolute;
  top: 6px;
  left: 0;

  font-size: 1.5rem;
  color: ${color['black-color']};

  visibility: hidden;
  transition: visibility 0.2s linear;
`;

export const accept = css`
  ${field}

  max-width: 374px;
`;

export const acceptSquare = css`
  position: relative;
`;

export const acceptText = css`
  letter-spacing: -0.7px;
`;

export const acceptLabel = css`
  position: relative;

  display: block;
  max-width: 374px;
  margin-bottom: 34px;
  padding-left: 30px;

  font-size: 13px;
  color: ${color['black-color']};
  line-height: 16px;

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
    width: 1.7rem;
    height: 1.7rem;

    user-select: none;
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
    left: 50%;
    top: 50%;

    width: 1rem;
    height: 1rem;
    border-color: ${color['black-color-light']};
    background-color: ${color['black-color-light']};
    border: 1px solid ${color['black-color-light']};

    visibility: hidden;
    transform: translate(-59%, -50%);
    transition: all 0.2s linear;
  }

  & > input:checked ~ .accept::after {
    visibility: visible;
  }
`;
