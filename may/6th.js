let a = "anaida";
function removeRepeat(a) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        if (!result.includes(a[i])) {
            result += a[i]
        }
    }
    console.log(result)
}
removeRepeat(a)


function findLongestWord(sentence) {
    const words = sentence.split(" ");
    const longest = words.reduce((longestWord, currentWord) => {
        return currentWord.length > longestWord.length ? currentWord : longestWord;
    });

    return longest;
}
const input = "I love JavaScript programming";
const result = findLongestWord(input);
console.log(result);
