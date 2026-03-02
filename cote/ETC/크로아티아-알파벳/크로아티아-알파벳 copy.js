const input = "ljes=njak"

const searchWordArr = ["c=","c-","dz=","d-","lj","nj","s=","z="]

let result = input
for(let i = 0; i < searchWordArr.length; i++){
    if(input.includes(searchWordArr[i])){
        result = result.split(searchWordArr[i]).join("X")
    }
}


console.log(result.length)
