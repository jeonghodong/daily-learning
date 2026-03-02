const input = `3 4
ohhenrie
charlie
baesangwook
obama
baesangwook
ohhenrie
clinton`

let [N, M] = input.split('\n')[0].split(" ").map(Number)
// console.log(N, M)

let aSet = new Set(input.split('\n').slice(1, N + 1))
let bSet = new Set(input.split('\n').slice(N + 1, N + M + 1))

// console.log(aSet, bSet)

const result = []

for(let item of bSet){
    if(aSet.has(item)){
        result.push(item)
    }
}

console.log(result.length + '\n' + result.sort().join('\n'))


