import { get, set, del } from './storage.utils';

const KEY = 'foo';
const VALUE = 'bar';

describe('Storage functions', () => {
  it('set check set data to localStorage #smoke', () => {
    set(KEY, VALUE);

    expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, `${'"bar"'}`);
  });

  it('get check get data from localStorage #smoke', () => {
    get(KEY);

    expect(localStorage.getItem).toHaveBeenLastCalledWith(KEY);
  });

  it('del check delete data from localStorage #smoke', () => {
    del(KEY);

    expect(localStorage.removeItem).toHaveBeenLastCalledWith(KEY);
  });
});
