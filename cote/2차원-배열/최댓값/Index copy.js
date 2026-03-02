const input = `3 23 85 34 17 74 25 52 65
10 7 39 42 88 52 14 72 63
87 42 18 78 53 45 18 84 53
34 28 64 85 12 16 75 36 55
21 77 45 35 28 75 90 76 1
25 87 65 15 28 11 37 28 74
65 27 75 41 7 89 78 64 39
47 47 70 45 23 65 3 41 44
87 13 82 38 31 12 29 29 80`


// 각 컬럼에서 제일 큰 수를 찾는다.
// 2차원 배열 생성 후 
// 이중포문으로 진행 우선 기본 틀 작업 진행하자


const inputArr = input.split('\n').map((rowArr) => {
    const row = rowArr.split(" ").map(Number)
    return [...row]
})

// console.log(inputArr)

const resultArr = []

for(let i = 0; i < inputArr.length; i++){
    // console.log(inputArr[i])

    let sortRowArr = [...inputArr[i]].sort((a, b) => b - a)

    let highNum = sortRowArr[0]
    let highRowIdex = i + 1
    let highColumnIndex = inputArr[i].indexOf(sortRowArr[0]) + 1
    
    // console.log(highNum, highRowIdex, highColumnIndex)

    resultArr.push({highNum, highRowIdex, highColumnIndex})
}

resultArr.sort((a, b) => b.highNum - a.highNum)

const highNum = resultArr[0].highNum
const highRowIdex = resultArr[0].highRowIdex
const highColumnIndex = resultArr[0].highColumnIndex

console.log(highNum)
console.log(highRowIdex, highColumnIndex)