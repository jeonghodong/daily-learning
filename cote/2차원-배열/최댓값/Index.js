const input = `3 23 85 34 17 74 25 52 65
10 7 39 42 88 52 14 72 63
87 42 18 78 53 45 18 84 53
34 28 64 85 12 16 75 36 55
21 77 45 35 28 75 90 76 1
25 87 65 15 28 11 37 28 74
65 27 75 41 7 89 78 64 39
47 47 70 45 23 65 3 41 44
87 13 82 38 31 12 29 29 80`


const inputArr = input.split('\n').map((numbersString) => {
    const numbers = numbersString.split(" ").map(Number)
    return [...numbers]
})

const rowsCount = inputArr.length // 9
const columnsCount = inputArr[0].length // 9

// 1. 각 줄에서 큰 수를 찾는다 이때 각 줄에서 큰 수를 찾을땐 index 위치와 그 값을 변수에 담아놓아야한다.
// 2. 각 줄에서 나온 큰 수의 인덱스 및 값 변수에서 값을 비교해서 최종적으로 가장 큰 값의 변수를 찾는다.
// 3. 첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 위치한 행 번호와 열 번호를 빈칸을 사이에 두고 차례로 출력한다. 최댓값이 두 개 이상인 경우 그 중 한 곳의 위치를 출력한다.

let arr = []


for(let i = 0; i < inputArr.length; i++){
    let sortArr = [...inputArr[i]].sort((a, b) => b - a) 
    // console.log("inputArr[i]",inputArr[i])
    let highNum = sortArr[0]
    let highIndex = inputArr[i].indexOf(highNum) + 1
    let highRow = i + 1
    // console.log("highNum", highNum)
    // console.log("highIndex", highIndex)

    arr.push({
        highNum, highIndex, highRow
    });

    arr.sort((a, b) => b.highNum - a.highNum)
}

const highInfoArr = arr[0]

console.log(highInfoArr.highNum)
console.log(highInfoArr.highRow, highInfoArr.highIndex)

// 출력 값 예시
// 90
// 5 7