const sumOfNumbers = (numbers) => {
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }

  return sum;
};

// DEFAULT EXPORT
export default sumOfNumbers;
