const input = `AABCDD
afzz
09121
a8EWg6
P5h3kx`

// 2차원 배열
// 컬럼의 길이를 기준으로 1차 포문
// row의 길이를 기준으로 2차 포문 [j][i] => [].push => join("")


const inputArr = input.split('\n').map((v) => [...v])

// console.log(...inputArr.map(v => v.length))

const maxColmunNum = Math.max(...inputArr.map(v => v.length))

// console.log("inputArr", inputArr)
// console.log("maxColmunNum", maxColmunNum)

const resultArr = []

for(let i = 0; i < maxColmunNum; i++){
    for(let j = 0; j < inputArr.length; j++){
        if(inputArr[j][i] !== undefined) resultArr.push(inputArr[j][i])
    }
}

console.log(resultArr.join(""))
