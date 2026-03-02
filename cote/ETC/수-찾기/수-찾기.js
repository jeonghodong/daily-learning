
const input = `5
4 1 5 2 3
5
1 3 7 9 5` //여기서 순차적으로 저 배열에 값이 있는지 없는지 확인하면 단순 includes 사용하면 될 듯 ?

// N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.

// 첫째 줄에 자연수 N(1 ≤ N ≤ 100,000)이 주어진다. 다음 줄에는 N개의 정수 A[1], A[2], …, A[N]이 주어진다. 다음 줄에는 M(1 ≤ M ≤ 100,000)이 주어진다. 다음 줄에는 M개의 수들이 주어지는데,
// 이 수들이 A안에 존재하는지 알아내면 된다. 모든 정수의 범위는 -231 보다 크거나 같고 231보다 작다.

const N = input.split('\n')[0]
const M = input.split('\n')[2]

const nMap = new Map()
const mMap = new Map()

// // N의 수
const nNumArr = input.split('\n')[1].split(" ").map(Number)

for(const item of nNumArr){
    nMap.set(item,true)
}

// // M의 수
const mNumArr = input.split('\n')[3].split(" ").map(Number)

let result = []

for(const item of mNumArr){
    if(nMap.has(item)){
        result.push(1)
    } else {
        result.push(0)
    }
}


console.log(result.join("\n"))

// for(item of mNumArr){
//     if(nNumArr.includes(item)){
//         console.log(1)
//     } else {
//         console.log(0)
//     }
// }