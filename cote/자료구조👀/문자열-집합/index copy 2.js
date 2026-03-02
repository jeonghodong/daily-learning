const input = `5 11
baekjoononlinejudge
startlink
codeplus
sundaycoding
codingsh
baekjoon
codeplus
codeminus
startlink
starlink
sundaycoding
codingsh
codinghs
sondaycoding
startrink
icerink`

const [N, M] = input.split('\n')[0].split(" ").map(Number)
console.log(N, M)

const aArr = input.split('\n').slice(1, N + 1)
const bArr = input.split('\n').slice(N + 1, N + M + 1)


console.log(aArr)
console.log(bArr)

let aSet = new Set(aArr)
let result = 0

for(let item of bArr){
    if(aSet.has(item)) result += 1
}

console.log(result)