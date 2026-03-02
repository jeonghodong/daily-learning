const input = `11101101`

// console.log(input.split("1").filter(Boolean))

const zeroArr = input.split("1").filter(Boolean)
const oneArr = input.split("0").filter(Boolean)

let resultArr = [zeroArr.length, oneArr.length]
let result = resultArr.sort((a, b) => a - b)[0]

console.log(result)