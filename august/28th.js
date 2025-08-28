function changeCase(str) {
  return str
    .split("")
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
}
console.log(changeCase("jAvAsCrIpT"));


function isAnagram(s1,s2){
    let count = {}
   for(let i=0;i<s1.length;i++) {
       count[s1[i]] = (count[s1[i]] || 0) + 1
   }
   for(let j = 0;j<s2.length;j++){
       if(!count[s2[j]]){
           return false
       }
       count[s2[j]]--
   }
   return true
}
console.log(isAnagram("listen","silent"))
