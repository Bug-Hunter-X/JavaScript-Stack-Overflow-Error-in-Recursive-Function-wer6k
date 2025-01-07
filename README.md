# JavaScript Stack Overflow Error

This repository demonstrates a common error in JavaScript: a stack overflow error caused by unbounded recursion. The `bug.js` file contains a recursive function that does not have a proper base case to stop the recursion when a is not equal to b. This leads to the function calling itself repeatedly until the call stack is exhausted, resulting in a stack overflow error.

The `bugSolution.js` file provides a corrected version of the function with a proper base case to handle the situation of `a` being greater than `b`. This prevents the stack overflow error.