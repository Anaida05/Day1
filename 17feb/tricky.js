// function* generator(i){
//     yield i;
//     yield i * 2;
// }
// const gen = generator(10);
// console.log(gen.next().value);
// console.log(gen.next().value);

// const[rx, ry=5] = [10];
// console.log(rx+ry)

// const[sx,sy] = [10];
// console.log(sx+sy);

//multiplw switch cases for one operation
const country = "Ireland";
switch (country) {
  case "France":
  case "Spain":
  case "Ireland":
  case "Poland":
    console.log("This country is in Europe.");
    break;
  case "United States":
  default:
    console.log("This country is not in Europe.");
}