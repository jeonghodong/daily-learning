const input = `6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(`


const inputArr = input.split('\n').slice(1)

// console.log(inputArr)

// console.log("inputArr", inputArr)

let result = ""

for(let i = 0; i < inputArr.length; i++){
    const string = inputArr[i].trim()
    let isNo = false
    let stack = []

    for(let v of string){
        if(v === "("){
            stack.push('(')
        } else {
            if(stack.length === 0){
                isNo = true
                break;
            }
            stack.pop()
        }
    }

// 반복문 종료 후 스택이 남아있어도 실패 (예: "(()")
    if (!isNo && stack.length === 0) {
        result += "YES\n";
    } else {
        result += "NO\n";
    }
}

console.log(result)