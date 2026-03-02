const input = `AABCDD
afzz
09121
a8EWg6
P5h3kx`

// 2차원 배열 작업
// 1차 반복문
// 2차 반복문 에서 각 i에대한 j

const inputArr = input.split('\n').map((v) => {
    return [...v]
})

// console.log(inputArr)
// const maxLen = Math.max(...inputArr.map(row => row.length));
const maxLen = Math.max(...inputArr.map((v) => v.length))

const resultArr = []
for(let i = 0; i < maxLen; i++){
    for(let j = 0; j < inputArr.length; j++){
        if(inputArr[j][i] !== undefined) resultArr.push(inputArr[j][i])
    }
}

console.log(resultArr.join(""))

