const input = `ababc`


let set = new Set()

for(let i = 0; i < input.length; i++){
    for(let j = i + 1; j <= input.length; j++){
        set.add(input.slice(i, j))
    }
}

console.log(set.size)