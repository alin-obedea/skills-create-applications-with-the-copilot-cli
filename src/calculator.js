#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add      - Addition: adds two numbers (a + b)
 *   subtract - Subtraction: subtracts b from a (a - b)
 *   multiply - Multiplication: multiplies two numbers (a × b)
 *   divide   - Division: divides a by b (a ÷ b), with division-by-zero handling
 *
 * Usage:
 *   node calculator.js <operation> <num1> <num2>
 *
 * Examples:
 *   node calculator.js add 5 3
 *   node calculator.js subtract 10 4
 *   node calculator.js multiply 6 7
 *   node calculator.js divide 20 4
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a minus b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a divided by b
// Throws an error if b is zero to prevent division by zero
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero is not allowed');
  return a / b;
}

// CLI entry point — only runs when executed directly, not when required as a module
if (require.main === module) {
const [, , operation, arg1, arg2] = process.argv;

const validOperations = ['add', 'subtract', 'multiply', 'divide'];

if (!operation || !validOperations.includes(operation)) {
  console.error(`Usage: node calculator.js <operation> <num1> <num2>`);
  console.error(`Supported operations: ${validOperations.join(', ')}`);
  process.exit(1);
}

const a = parseFloat(arg1);
const b = parseFloat(arg2);

if (isNaN(a) || isNaN(b)) {
  console.error('Error: Both arguments must be valid numbers.');
  process.exit(1);
}

try {
  let result;
  switch (operation) {
    case 'add':
      result = add(a, b);
      break;
    case 'subtract':
      result = subtract(a, b);
      break;
    case 'multiply':
      result = multiply(a, b);
      break;
    case 'divide':
      result = divide(a, b);
      break;
  }
  console.log(`Result: ${result}`);
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}

} // end require.main === module

module.exports = { add, subtract, multiply, divide };
