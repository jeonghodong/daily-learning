const input = `3 4
ohhenrie
charlie
baesangwook
obama
baesangwook
ohhenrie
clinton`

const [N, M] = input.split('\n')[0].split(" ")

const aArr = input.split('\n').slice(1).slice(0, N)
const bArr = input.split('\n').slice(1).slice(N, N + M)

// console.log(aArr)
// console.log(bArr)

const aSet = new Set(aArr)
const bSet = new Set(bArr)

const resultArr = []

for(let name of bSet){
    if(aSet.has(name)) resultArr.push(name)
}

console.log(resultArr.length)
console.log(resultArr.join('\n'))
