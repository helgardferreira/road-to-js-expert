function myNew(constructor, ...args) {
  const value = Object.create(constructor.prototype);
  constructor.call(value, ...args);

  return value;
}

export default myNew;
