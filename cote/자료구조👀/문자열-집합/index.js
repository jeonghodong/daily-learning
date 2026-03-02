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
const sArr = input.split('\n').slice(1, Number(N) + 1)
const mArr = input.split('\n').slice(Number(N) + 1, Number(M) + Number(N) + 1)

// console.log(N, M)
// console.log("sArr",sArr)
// console.log("mArr",mArr)

let S = new Set(sArr)

// console.log("S",...S)

let resultCount = 0

for(let i = 0; i < mArr.length; i++){
    if(S.has(mArr[i])){
        resultCount += 1
    }
}

console.log(resultCount)