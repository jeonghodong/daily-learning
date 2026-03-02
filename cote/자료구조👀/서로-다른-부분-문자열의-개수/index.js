const input = `ababc`

const result = new Set()

for(let i = 0; i < input.length; i++){
    for(let j = i + 1; j <= input.length; j++){
        result.add(input.substring(i, j))
    }
}

console.log(result.size)