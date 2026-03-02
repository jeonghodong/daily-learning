const input = `55-50+40`;

console.log(input.split("-"))

const splitInput = input.split("-")

let sumArr = []
for(let item of splitInput){
    const number = item.split("+").map(Number)
    const sum = number.reduce((a, b, i) => a + b)
    console.log(sum)

    sumArr.push(sum)
}

console.log(sumArr.reduce((a, b, i) => a - b))