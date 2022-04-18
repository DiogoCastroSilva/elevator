function wait(ms: number = 0): Promise<undefined> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default wait;
