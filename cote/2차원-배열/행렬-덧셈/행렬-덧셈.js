const input = `3 3
1 1 1
2 2 2
0 1 0
3 3 3
4 4 4
5 5 100`



const [N, M] = input.split('\n')[0].split(" ").map(Number);


const sliceArr = input.split('\n').slice(1)

// console.log(sliceArr)

let inputArr = []

for(let i = 0; i < sliceArr.length; i++){
    const items = sliceArr[i].split(" ").map(Number)
    inputArr.push([...items])
}

// console.log("inputArr", inputArr)

let aArr = inputArr.slice(0, N)
let bArr = inputArr.slice(N, N * 2)

// console.log("aArr", aArr)
// console.log("bArr", bArr)


let result = ""

for(let i = 0; i < N; i++){
    let row = []
    for(let j = 0; j < M; j++){
        row.push(aArr[i][j] + bArr[i][j]);
    }
    result += row.join(" ").trim() + '\n'
}

console.log(result.trim())
