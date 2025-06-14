// Find intersection of two arrays
function abc(a1, a2) {
    let result = [];
    for (let i = 0; i < a1.length; i++) {
        for (let j = 0; j < a2.length; j++) {
            if (a1[i] === a2[j]) {
                result.push(a2[j]);
            }
        }
    }
    return result;
}

// using set
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];
function findIntersection(a1, a2) {
    const value = new Set(a1)
    let result = [];
    for(let i of a2){
        if(value.has(i)){
            result.push(i)
        }
    }
    return result
}
console.log(findIntersection(arr1,arr2))

