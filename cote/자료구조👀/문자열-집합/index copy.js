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

const [N, M] = input.split('\n')[0].split(" ")
const aArr = input.split('\n').slice(1, Number(N) + 1)
const bArr = input.split('\n').slice(Number(N) + 1, Number(M) + Number(N) + 1)

const aSet = new Set(aArr)

let result = 0

for(let item of bArr){
    if(aSet.has(item)) result += 1
}

console.log(result)