const input = `AABCDD
afzz
09121
a8EWg6
P5h3kx`


const inputArr = input.split('\n').map((v) => [...v])

const numArr = inputArr.map((v) => Number(v.length))

const maxNum = Math.max(...numArr)

const resultArr = []
for(let i = 0; i < maxNum; i++){

    for(let j = 0; j < inputArr.length; j++){
    if(inputArr[j][i] !== undefined) resultArr.push(inputArr[j][i])
    }
}

console.log("resultArr", resultArr.join(" ").trim())