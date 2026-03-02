
const input = `5
4 1 5 2 3
5
1 3 7 9 5`


const nMap = new Map()


const nNumArr = input.split('\n')[1].split(" ").map(Number)

for(const item of nNumArr){
    nMap.set(item, true)
}

const mNumArr = input.split('\n')[3].split(" ").map(Number)

let result = []

for(const item of mNumArr){
    console.log(nMap.has(item))

    if(nMap.has(item)){
        result.push(1)
    } else {
        result.push(0)
    }
}

console.log(result.join('\n'))