// 1
// console.log(a);
// a = 1; //will throw reference error as a is not defined

// 2
// console.log(b); //undefined
// var b = 1 ;

// 3
// console.log('bar:', bar); //undefined
// bar = 15; 
// var foo = 1;
// console.log(foo, bar); //1,15
// var bar;

// 4
// var foo = 5
// console.log(`foo:`, foo)
// var foo; //dosen't affect as it is already been initialised value
// var bar = 10;
// var bar;//doesn't effect as bar has already been initialised value
// console.log(`bar:`, bar)
// var baz = 10
// var baz = 12 //overwrites 10
// console.log(`baz:`, baz)