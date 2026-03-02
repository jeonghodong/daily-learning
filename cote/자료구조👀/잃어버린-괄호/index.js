const input = `55-50+50-50+40`;


// 더하기 먼저하고 마지막에 가장 큰 수에서 작은 수들을 빼나가면 됨
// 더하기 먼저 하려면 어떻게 수를 나누지? 

// console.log(input.split("-"))

const plusArr = input.split("-")

let sumArr = []
let isMinus = false

for (let item of plusArr) {
    // 2. '+'로 나뉜 숫자들을 모두 더한다. (개수 상관없이)
    let char = item.split("+").map(Number)
    console.log("char", char)
    let sum = char.reduce((acc, cur) => acc + cur, 0);
    console.log("sum", sum)
    sumArr.push(sum);
}

console.log("sumArr", sumArr)

const result = sumArr.reduce((acc, cur, index) =>  acc - cur);            // 나머지는 뺀다


console.log(result); // -135


