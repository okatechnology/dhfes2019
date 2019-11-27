const toggleItemOfArray = <T>(array: T[], value: T) => {
  const clone = [...array];
  if (array.includes(value)) {
    clone.splice(array.indexOf(value), 1);
  } else {
    clone.push(value);
  }
  return clone;
};

export default toggleItemOfArray;
