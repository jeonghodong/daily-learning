const input = `11001100110011000001`

const oneArrLength = input.split('1').filter(Boolean).length
const zeroArrLength = input.split('0').filter(Boolean).length

// console.log('oneArrLength',oneArrLength)
// console.log('zeroArrLength',zeroArrLength)

const resultArr = [oneArrLength, zeroArrLength]

// console.log(resultArr)
const result = resultArr.sort((a, b) => a - b)[0]

console.log(result)