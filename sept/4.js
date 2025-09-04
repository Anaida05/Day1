let str = "anaida", k=2
function rotateStr(str,k){
    let len = str.length - k
    return str.substring(len) + str.substring(0,len)
}
console.log(rotateStr(str,k))