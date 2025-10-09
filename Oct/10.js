function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());


console.log('A');

setTimeout(() => console.log('B'), 0);

Promise.resolve().then(() => console.log('C'));

console.log('D');

const obj = {
  value: 10,
  getValue: function() {
    return this.value;
  }
};

const getVal = obj.getValue;
console.log(getVal());
console.log(obj.getValue());




function firstNonRepeatingChar(str) {
  const map = {};

  for (let char of str) {
    map[char] = (map[char] || 0) + 1;
  }

  for (let char of str) {
    if (map[char] === 1) return char;
  }

  return null;
}

console.log(firstNonRepeatingChar("aabbccddeeffg"))


function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
