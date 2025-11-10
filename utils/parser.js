import _ from "lodash";

export function parseNumbers(input) {
  // Convert strings to numbers using lodash map
  const numbers = _.map(input, str => Number(str));
  // Remove any invalid entries (NaN, null, etc) using lodash compact
  return _.compact(numbers);
}

export function isValidOperation(operation) {
  const validOps = ["add", "subtract", "multiply", "divide"];
  // Check if operation is in the valid operations array using lodash includes
  return _.includes(validOps, operation);
}

