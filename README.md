# Unexpected NaN Result in JavaScript Arithmetic Operation

This repository demonstrates a common JavaScript issue where using `null` in arithmetic operations leads to unexpected `NaN` results.

## Bug Description
The provided `bug.js` file contains two functions: `foo` and `bar`.  `foo` simply adds two numbers, while `bar` calls `foo` and multiplies the result by two. The issue arises when `null` is passed as an argument to `bar`. Instead of handling the `null` gracefully (e.g., by treating it as 0 or throwing an error), JavaScript's arithmetic operations return `NaN` (Not a Number).

## Solution
The solution in `bugSolution.js` addresses this by implementing input validation.  Before performing arithmetic operations, the code checks for `null` values and replaces them with 0. This ensures that the function returns a meaningful numerical result even when null values are passed.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` and run the code in a JavaScript environment (browser console, Node.js). Observe the unexpected NaN output.
3. Open `bugSolution.js` and run the code. Note that it handles null values correctly and avoids the NaN error.