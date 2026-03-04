const input = `3 4
ohhenrie
charlie
baesangwook
obama
baesangwook
ohhenrie
clinton`

const [N, M] = input.split("\n")[0].split(" ")

// console.log(N, M)

const aArr = input.split("\n").slice(1).slice(0, N)
const bArr = input.split("\n").slice(1).slice(N, N + M)

// console.log("aArr",aArr)
// console.log("bArr",bArr)

const aSet = new Set(aArr)

const resultArr = []

for(let name of bArr){
    if(aSet.has(name)){
        resultArr.push(name)
    }
}
resultArr.sort()

console.log(resultArr.length)
console.log(resultArr.join("\n"))