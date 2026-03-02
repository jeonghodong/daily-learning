
// 알파벳 대소문자로 주어진다. 예제: Mississipi
// 단어에서 가장 많이 사용된 알파벳이 무엇인지 찾아내야함.
// 엣지: 대문자 소문자 구분 X
// 엣지: 가장 많이 사용된 알파벳이 여러개 존재하는 경우에는 ? 를출력한다.

// .toLowerCase()로 다 소문자로 만듬
// input을 반복문으로 돌린다.
// 반복문 내에서 객체 형식으로 만든다.
// 객체 let in 반복문 돌려서 최종적으로 답 반환
let inputLowerString = "Mississifdasfkldsafjklfadsjklffffdsafadspi".toLowerCase()
let inputObj = {}

for(let i = 0; i < inputLowerString.length; i++){
    if(inputObj[inputLowerString[i]]){
        inputObj[inputLowerString[i]].count += 1
    } else {
        inputObj[inputLowerString[i]] = { count: 1 }
    }
}

let maxCount = 0
let isDup = false
let maxWord = ""

console.log("inputObj",inputObj)

for(let key in inputObj){
    if(inputObj[key].count > maxCount){
        maxCount = inputObj[key].count
        maxWord = key.toUpperCase()
        isDup = false; // 새로운 왕이 등극했으므로 중복 상태를 해제합니다!
    } else if (inputObj[key].count === maxCount){
        isDup = true
    }
}

if(isDup){
    console.log("?")
} else {
    console.log(maxWord)
}
