/**
 * Unit tests for the CLI Calculator
 *
 * Covers all operations:
 *   - Addition (+)
 *   - Subtraction (-)
 *   - Multiplication (*)
 *   - Division (/)
 *   - Modulo (%)
 *   - Exponentiation (^)
 *   - Square Root (√)
 *
 * Each suite includes the image examples plus additional edge cases.
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// ── Addition ────────────────────────────────────────────────────────────────
describe('add', () => {
  // Example from image: 2 + 3 = 5
  test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds positive numbers', () => {
    expect(add(10, 20)).toBe(30);
  });

  test('adds negative numbers', () => {
    expect(add(-4, -6)).toBe(-10);
  });

  test('adds a positive and a negative number', () => {
    expect(add(10, -3)).toBe(7);
  });

  test('adds zero to a number (identity)', () => {
    expect(add(5, 0)).toBe(5);
  });

  test('adds two zeros', () => {
    expect(add(0, 0)).toBe(0);
  });

  test('adds floating-point numbers', () => {
    expect(add(1.5, 2.5)).toBeCloseTo(4.0);
  });
});

// ── Subtraction ─────────────────────────────────────────────────────────────
describe('subtract', () => {
  // Example from image: 10 - 4 = 6
  test('subtracts 10 - 4 to equal 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts to a negative result', () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test('subtracts a negative number (double negative)', () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test('subtracts zero from a number (identity)', () => {
    expect(subtract(7, 0)).toBe(7);
  });

  test('subtracts a number from itself to equal zero', () => {
    expect(subtract(9, 9)).toBe(0);
  });

  test('subtracts floating-point numbers', () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

// ── Multiplication ──────────────────────────────────────────────────────────
describe('multiply', () => {
  // Example from image: 45 * 2 = 90
  test('multiplies 45 * 2 to equal 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies two positive numbers', () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test('multiplies by zero (zero property)', () => {
    expect(multiply(99, 0)).toBe(0);
  });

  test('multiplies by one (identity property)', () => {
    expect(multiply(8, 1)).toBe(8);
  });

  test('multiplies two negative numbers to give a positive result', () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test('multiplies a positive and a negative number', () => {
    expect(multiply(5, -3)).toBe(-15);
  });

  test('multiplies floating-point numbers', () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10.0);
  });
});

// ── Division ────────────────────────────────────────────────────────────────
describe('divide', () => {
  // Example from image: 20 / 5 = 4
  test('divides 20 / 5 to equal 4', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides to produce a whole number', () => {
    expect(divide(12, 3)).toBe(4);
  });

  test('divides to produce a decimal result', () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test('divides a negative number by a positive number', () => {
    expect(divide(-10, 2)).toBe(-5);
  });

  test('divides two negative numbers to give a positive result', () => {
    expect(divide(-9, -3)).toBe(3);
  });

  test('divides zero by a number to equal zero', () => {
    expect(divide(0, 5)).toBe(0);
  });

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
  });

  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
  });
});

// ── Modulo ──────────────────────────────────────────────────────────────────
describe('modulo', () => {
  // Example from image: 5 % 2 = 1
  test('returns remainder of 5 % 2 to equal 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('returns remainder of 10 % 3 to equal 1', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('returns zero when a is exactly divisible by b', () => {
    expect(modulo(12, 4)).toBe(0);
  });

  test('returns the dividend when b is larger than a', () => {
    expect(modulo(3, 7)).toBe(3);
  });

  test('handles negative dividend', () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test('handles negative divisor', () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test('returns zero when dividend is zero', () => {
    expect(modulo(0, 5)).toBe(0);
  });

  // Edge case: modulo by zero
  test('throws an error when dividing by zero', () => {
    expect(() => modulo(10, 0)).toThrow('Division by zero is not allowed');
  });
});

// ── Exponentiation (Power) ──────────────────────────────────────────────────
describe('power', () => {
  // Example from image: 2 ^ 3 = 8
  test('raises 2 to the power of 3 to equal 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('raises 2 to the power of 8 to equal 256', () => {
    expect(power(2, 8)).toBe(256);
  });

  test('raises a number to the power of 1 (identity)', () => {
    expect(power(9, 1)).toBe(9);
  });

  test('raises a number to the power of 0 to equal 1', () => {
    expect(power(7, 0)).toBe(1);
  });

  test('raises a number to a negative exponent', () => {
    expect(power(2, -2)).toBeCloseTo(0.25);
  });

  test('raises a negative base to an even exponent (positive result)', () => {
    expect(power(-3, 2)).toBe(9);
  });

  test('raises a negative base to an odd exponent (negative result)', () => {
    expect(power(-2, 3)).toBe(-8);
  });

  test('raises zero to any positive power to equal zero', () => {
    expect(power(0, 5)).toBe(0);
  });
});

// ── Square Root ─────────────────────────────────────────────────────────────
describe('squareRoot', () => {
  // Example from image: √16 = 4
  test('returns square root of 16 to equal 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('returns square root of 144 to equal 12', () => {
    expect(squareRoot(144)).toBe(12);
  });

  test('returns square root of 0 to equal 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('returns square root of 1 to equal 1', () => {
    expect(squareRoot(1)).toBe(1);
  });

  test('returns square root of a non-perfect square', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142135);
  });

  test('returns square root of a large perfect square', () => {
    expect(squareRoot(10000)).toBe(100);
  });

  // Edge case: square root of a negative number
  test('throws an error for a negative number', () => {
    expect(() => squareRoot(-4)).toThrow('Cannot compute square root of a negative number');
  });

  test('throws an error for -1', () => {
    expect(() => squareRoot(-1)).toThrow('Cannot compute square root of a negative number');
  });
});
