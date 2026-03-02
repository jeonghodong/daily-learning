const input = "ljes=njak"

const searchWordArr = ["c=","c-","dz=","d-","lj","nj","s=","z="]

let result = input

for(let i = 0; i < searchWordArr.length; i++){
    result = result.split(searchWordArr[i]).join("1")
}

console.log(result.length)