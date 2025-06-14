//  Count frequency of elements in an array using an object
// let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
// function count(arr) {
//   const freq = {};
//   for (const item of arr) {
//     freq[item] = (freq[item] || 0) + 1;
//   }
//   return freq;
// }

// console.log(count(arr));

// Group words by their length
// let words = ["hi", "hello", "sun", "code", "yes"];
// function groupByLength(words) {
//   const grouped = {};
//   for (const word of words) {
//     const len = word.length;
//     if (!grouped[len]) {
//       grouped[len] = [];
//     }
//     grouped[len].push(word);
//   }
//   return grouped;
// }

// console.log(groupByLength(words));

//  Convert array of objects to a map using ID
// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" }
// ];

// function convertToMap(users) {
//   const map = {};
//   for (const user of users) {
//     map[user.id] = user;
//   }
//   return map;
// }

// console.log(convertToMap(users));

//  Sum all values in an object
// const scores = {
//   math: 90,
//   science: 85,
//   english: 88
// };

// function sumValues(obj) {
//   return Object.values(obj).reduce((sum, val) => sum + val, 0);
// }

// console.log(sumValues(scores));

//  Find highest paid employee from an object
// const employees = {
//   emp1: { name: "Alice", salary: 50000 },
//   emp2: { name: "Bob", salary: 75000 },
//   emp3: { name: "Charlie", salary: 60000 }
// };

// function highestPaidEmployee(empObj) {
//   let max = -Infinity;
//   let highest = null;
//   for (const key in empObj) {
//     if (empObj[key].salary > max) {
//       max = empObj[key].salary;
//       highest = empObj[key];
//     }
//   }
//   return highest;
// }

// console.log(highestPaidEmployee(employees));


