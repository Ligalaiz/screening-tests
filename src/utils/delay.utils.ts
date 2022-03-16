const delay = (ms: number, callback?: jest.Mock<any, any>) =>
  new Promise<void>((res) =>
    setTimeout(() => {
      res();
      if (typeof callback === 'function') callback();
    }, ms),
  );

export { delay };
