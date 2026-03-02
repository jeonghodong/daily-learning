const input = `11101101`

let zeroCount = input.split("0").filter(Boolean).length 
let oneCount = input.split("1").filter(Boolean).length

let resultArr = [zeroCount, oneCount].sort((a, b) => a - b)

console.log(resultArr[0])