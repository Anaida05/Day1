// 1
// const bird = {
//     size: 'small',
//   };
  
//   const mouse = {
//     name: 'Mickey',
//     small: true,
//   };
// A: mouse.bird.size is not valid
// B: mouse[bird.size] is not valid
// C: mouse[bird["size"]] is not valid
// D: All of them are valid

// 2
// let num = 10;

// const increaseNumber = () => num++;
// const increasePassedNumber = number => number++;

// const num1 = increaseNumber();
// const num2 = increasePassedNumber(num1);

// console.log(num1);
// console.log(num2);

const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);