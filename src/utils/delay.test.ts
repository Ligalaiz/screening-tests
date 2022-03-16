import { delay } from '.';

jest.useFakeTimers();

describe('Delay function', () => {
  it('delay function check was called after 1 second', () => {
    const callback = jest.fn();

    delay(1000, callback);

    jest.advanceTimersByTime(1000);

    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
