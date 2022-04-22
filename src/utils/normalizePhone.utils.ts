import React, { FormEvent } from 'react';

const normalizePhone = (e: FormEvent<HTMLInputElement>) => {
  const target = e.target as typeof e.target & {
    value: string;
  };

  let result = '';
  if (target.value) {
    const str = target.value.replace(/\s/g, '');
    const count = str.length < 10 ? str.length : 10;

    for (let s = 0; s < count; s += 1) {
      if (s < 6) {
        result += s % 3 ? str[s] : ` ${str[s]}`;
      } else {
        result += s % 2 ? str[s] : ` ${str[s]}`;
      }
    }
  }
  target.value = result.trim();
};

export { normalizePhone };
