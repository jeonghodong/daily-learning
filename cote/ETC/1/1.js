const input = `5 4
1 2
3 4
1 4
2 2`.split('\n')


const [N, M] = input[0].split(" ")

const numArr = Array.from({length:N},(v, i) => i + 1)

for(let i = 1; i <= M; i++){
    const [j, k]= input[i].split(' ').map(Number)
    let startIdx = j -1
    let endIdx = k

    let reverseNumArr = numArr.slice(startIdx, endIdx).reverse()
    console.log(reverseNumArr)

    numArr.splice(startIdx,endIdx-startIdx, ...reverseNumArr)
}

console.log(numArr)

