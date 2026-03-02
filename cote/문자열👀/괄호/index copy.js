const input = `6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(`

const inputArr = input.split('\n').slice(1)

// console.log(inputArr)

let result = ""

for(let i = 0; i < inputArr.length; i++){
    let arr = []
    let isNo = false
    
    for(let char of inputArr[i]){
        // console.log(char)

        if(char === '('){
            arr.push(char)
        } else {
            if(arr.length === 0){
                isNo = true
                break;
            }
            arr.pop()
        }
    }

    if(!isNo && arr.length === 0) {
        result += "YES" + '\n'
    } else {
        result += "NO" + '\n'
    }
}

console.log(result)