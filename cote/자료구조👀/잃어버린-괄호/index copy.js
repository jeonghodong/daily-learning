const input = `55-50+40`;

console.log(input.split('-'))

const arr = input.split('-')


let resultArr = []

for(let item of arr){
    console.log(item.split("+"))
    let nums = item.split("+").map(Number)
    let sum = nums.reduce((a, b, i) => a + b,0)
    
    console.log("sum",sum)
    resultArr.push(sum)
}

console.log(resultArr)

let result = resultArr.reduce((a, b ,i) => a - b)

console.log("result",result)