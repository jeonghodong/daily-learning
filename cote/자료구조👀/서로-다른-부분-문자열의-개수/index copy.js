const input = `ababc`

let result = new Set()

for(let i = 0; i < input.length; i++){
    for(let j = i + 1; j <= input.length; j++){
        // console.log(input.slice(i, j))
        result.add(input.slice(i, j))
    }
}

console.log(result.size)