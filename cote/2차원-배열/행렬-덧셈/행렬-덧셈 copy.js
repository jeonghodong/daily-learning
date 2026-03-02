const input = `3 3
1 1 1
2 2 2
0 1 0
3 3 3
4 4 4
5 5 100`


// rows = 3, colmun = 3
// 2차원 배열로 담고 배열의 절반 a, b로 나눈 다음에 이중포문으로 처리

const [rowsCount, colmunCount] = input.split('\n')[0].split(" ")

const inputArr = input.split('\n').slice(1).map((numbersString, i) => {
    const numbers = numbersString.split(" ").map(Number)
    return [...numbers]
})

// console.log("inputArr",inputArr)

const aArr = inputArr.slice(0, rowsCount)
const bArr = inputArr.slice(rowsCount, rowsCount * 2)


// console.log("aArr",aArr)
// console.log("bArr",bArr)

let result = ""


for(let i = 0; i < rowsCount; i++){
    let sumArr = []
    for(let j = 0; j < colmunCount; j++){
        sumArr.push(aArr[i][j] + bArr[i][j])
    }
    // console.log("sumArr", sumArr)
    result += sumArr.join(" ") + '\n'
}


console.log(result.trim())