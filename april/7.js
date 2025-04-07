// function example(x = 5, y = x + 1) {
//   return [x, y];
// }

// console.log(example());
// console.log(example(3));
// console.log(example(undefined, 10));

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }

//   async function runTimer() {
//     console.log('Start');
//     await delay(2000);
//     console.log('2 seconds later...');
//   }

//   runTimer();

// function add(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return function (e) {
//           return a + b + c + d + e;
//         };
//       };
//     };
//   };
// }

// const result = add(1)(2)(3)(4)(5);
// console.log(result);

// const greet = firstName => lastName => title =>
//     `Hello, ${title} ${firstName} ${lastName}`;

//   console.log(greet("John")("Doe")("Mr."));


// const filterBy = (key) => (value) => (item) => item[key] === value;

// const users = [
//   { name: "tom", role: "admin" },
//   { name: "harry", role: "user" },
//   { name: "potter", role: "admin" },
// ];

// const isAdmin = filterBy("role")("admin");
// const adminUsers = users.filter(isAdmin);

// console.log(adminUsers);
