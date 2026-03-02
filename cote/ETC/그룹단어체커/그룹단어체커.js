

let input = `5
ab
aa
aca
ba
bb`


// ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만,
// aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.

// 전에 나왔던 문자가 한 번 더 나오면 true.

const N = input[0]

const inputArr = input.split('\n')


let isDup = false
let result = N

for(let i = 1; i < inputArr.length; i++){
    let arr = []
    let word = inputArr[i]

    for(let j = 0; j < word.length; j++){
        if(arr.includes(word[j])) {
            if(word[j - 1] !== word[j]){
                result -= 1
                break;
            }
        } else {
            arr.push(word[j])
        }
    }

}

console.log(result)

