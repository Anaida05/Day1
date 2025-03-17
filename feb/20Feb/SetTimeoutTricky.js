// for (let i = 0; i < 5; i++) {
//     setTimeout(() => console.log(i), 0);
// }

// let j = 0; ///global scoped let variable so it will act like var variable
// for (j = 0; j < 5; j++) {
//     setTimeout(() => console.log(j), 0);
// }

// let y = (12,45,67); using the parenthesis operator we can pass multiple values then the () operator will assign the last element value to the variable
// console.log(y);

// for (var k = 0; k < 5; k++) {
//     setTimeout(() => console.log(k), 0);
// }

// var k;
// for (k = 0; k < 5; k++) {
//     setTimeout(() => console.log(k), 0);
// }

// const updateClock = () => {
//     console.log("Current Time:", new Date().toLocaleTimeString());
//     setTimeout(() => updateClock(), 1000);
// };

// updateClock();

const lights = ["🔴 Red", "🟡 Yellow", "🟢 Green"];  //to get emojis use windows+ .
let lightIndex = 0;

const changeLight = () => {
    console.log("Traffic Light:", lights[lightIndex]);
    lightIndex = (lightIndex + 1) % lights.length; //lightIndex = (lightIndex + 1) % lights.length;
    // lightIndex is incremented by 1 and uses the modulo (%) operator to loop back to 0 when it exceeds the length of the lights array.
    // This creates a continuous cycle:
    // 0 → 1 → 2 → 0 → 1 → 2 → ...
    // (Red → Yellow → Green → Red → Yellow → Green...)
    setTimeout(() => changeLight(), 3000);
};
changeLight();

let inactivityTimer;

const resetTimer = () => {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => console.log("User logged out due to inactivity"), 10000);
};

document.addEventListener("mousemove", () => {
    console.log("User active, resetting logout timer...");
    resetTimer();
});

resetTimer();
