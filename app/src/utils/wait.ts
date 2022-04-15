function wait<T extends Function>(callback: T, ms: number) {
  if (ms === void 0) {
    ms = 0;
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback());
    }, ms);
  });
}

export default wait;
