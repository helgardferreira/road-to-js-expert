function myNew(constructor, ...args) {
  const value = Object.create(constructor.prototype);
  constructor.apply(value, args);

  return value;
}

export default myNew;
