export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

export function subtract(numbers) {
  const [first, ...rest] = numbers;
  return rest.reduce((result, num) => result - num, first);
}

export function multiply(numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

export function divide(numbers) {
  const [first, ...rest] = numbers;
  // Check for division by zero
  if (rest.some(num => num === 0)) {
    return "Error: Division by zero";
  }
  return rest.reduce((result, num) => result / num, first);
}

