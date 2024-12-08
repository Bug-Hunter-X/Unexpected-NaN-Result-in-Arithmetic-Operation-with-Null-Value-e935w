function foo(a, b) {
  a = a === null ? 0 : a;
  b = b === null ? 0 : b; 
  return a + b;
}

function bar(c, d) {
  return foo(c, d) * 2;
}

console.log(bar(2, 3)); // Output: 10
console.log(bar(null, 3)); // Output: 6
console.log(bar(2, null)); //Output: 4
console.log(bar(null, null)); //Output: 0