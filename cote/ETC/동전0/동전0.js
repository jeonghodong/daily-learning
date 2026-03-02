const input =`10 4200
1
5
10
50
100
500
1000
5000
10000
50000`.split('\n')


const [N, K] = input[0].split(' ')

const reverseArr = input.sort((a, b)=> b - a).map(Number)


let sum = 0
let coinCount = 0
    let totalPrice = K

for(let i = 1; i <= N; i++){
    coinCount += Math.floor(totalPrice/reverseArr[i])
    totalPrice -= reverseArr[i] * Math.floor(totalPrice/reverseArr[i])
}

console.log("coinCount",coinCount)