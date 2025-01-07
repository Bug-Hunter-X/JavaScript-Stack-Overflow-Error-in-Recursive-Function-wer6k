function foo(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return false; 
  } else {
    return foo(a + 1, b);
  }
}

//Add a base case to handle the situation where a > b
function foo(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return false;
  } else {
    return foo(a + 1, b);
  }
}
console.log(foo(10, 10)); // true
console.log(foo(10, 20)); // false
console.log(foo(10, 5)); // RangeError: Maximum call stack size exceeded 