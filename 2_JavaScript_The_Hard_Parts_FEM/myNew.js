function myNew(constructor, ...args) {
  const value = Object.create(constructor.prototype);
  return constructor.apply(value, args) || value;
}

export default myNew;
