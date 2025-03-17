//recursive function
// const sum = (num) => {
//   if (num === 0) return 0;

//   return num + sum(num - 1);
// };
// console.log(sum(10));

// fibonaci eries
const recursiveFibo = (num) => {
  if (num <= 1) return num;

  return recursiveFibo(num - 1) + recursiveFibo(num - 2);
};
console.log(recursiveFibo(5));
