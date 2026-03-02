
let input = `5
ab
aa
aca
ba
bb`


let N = input[0]
let inputArr = input.slice(1).trim().split("\n")
let resultNum = Number(N)


for(let i = 0; i < inputArr.length; i++){
    let wordArr = []
    let words = inputArr[i]

    for(let j = 0; j < words.length; j++){
        let word = words[j]
        if(wordArr.includes(word)){
            if(words[j] !== words[j - 1]){
                resultNum -= 1
            }
        } else {
        wordArr.push(word)
        }
    }
}

console.log("resultNum", resultNum)