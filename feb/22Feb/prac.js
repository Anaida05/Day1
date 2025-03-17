// WAP to reverse an integer without converting it to a string, without using any built-in methods.
let num = 23;
const reverseInt = (n) => {
  let reversed = 0;
  while (n > 0) {
    let digit = n % 10;
    // console.log(digit)
    reversed = reversed * 10 + digit;
    //   console.log(reversed)
    n = (n / 10) | 0;
    // console.log(n)
  }
  return reversed;
};
// console.log(reverseInt(num));

// Swap Values without using any variable a=10, b=12.
let a = 10,
  b = 12;
[a, b] = [b, a];
// console.log(a,b)

// Find the reverse of the string.
let str = "anaida";
const reverseStr = (s) => {
  let output = "";
  for (let i = str.length - 1; i >= 0; i--) {
    output += str[i];
  }
  return output;
};
// console.log(reverseStr(str));

// WAP to print Fibonacci series with recursion.

const recursiveFibo = (num) => {
    if (num <= 1) return num;
  
    return recursiveFibo(num - 1) + recursiveFibo(num - 2);
  };
  console.log(recursiveFibo(5));