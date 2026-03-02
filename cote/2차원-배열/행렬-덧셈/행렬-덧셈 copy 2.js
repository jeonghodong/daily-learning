const input = `3 3
1 1 1
2 2 2
0 1 0
3 3 3
4 4 4
5 5 100`

const [N, M] = input.split('\n')[0].split(" ")

const aArr = input.split('\n').slice(1).map((v) => {
    const arr = v.split(' ').map(Number)

    return [...arr]
})
const bArr = aArr.splice(N)


// console.log(bArr)
// console.log(aArr)

let result = ""

for(let i = 0; i < N; i++){
    let arr = [] 
    for(let j = 0; j < M; j++){
        // console.log(aArr[i][j] + bArr[i][j])
        arr.push(aArr[i][j] + bArr[i][j])
    }
    result += arr.join(" ") + '\n'
}

console.log(result)
