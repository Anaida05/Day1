// 1,2,3,4,5
const abc = async()=>{
    console.log(1)
    console.log(2)
    await new Promise((res) => setTimeout(()=>  res(console.log(3)),1000))
    console.log(4)
    await setTimeout(()=>console.log(5),500)
}
abc()

