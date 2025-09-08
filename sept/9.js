var lengthOfLastWord = function (s) {
    let output = s.trim().split(/\s+/)
    let last = output[output.length - 1]
    return last.length
};