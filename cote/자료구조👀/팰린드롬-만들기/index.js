// const input = `AABB`
// const input = `AAABB`
const input = `ABACABA`
// const input = `ABCD`

const obj = {}

for(let string of input.split("")){
    obj[string] = obj[string] ? obj[string] + 1 : 1
}ㄴ

let 짝 = 0
let 홀 = 0

for(let key in obj){
    if(Number(obj[key]) % 2 === 0) {
        짝 += 1
    }  else {
        홀 +=1
    }

}

if (홀 > 1) {
    console.log("I'm Sorry Hansoo");
} else {
    let head = "" 
    let mid = "" 
    
    // 1. 객체의 키(알파벳)를 가져와서 사전순으로 정렬합니다.
    const sortedKeys = Object.keys(obj).sort();
        
    // 2. 정렬된 순서대로 반복문을 돌립니다.
    for (let key of sortedKeys) {
        let count = Number(obj[key]);
        
        if (count % 2 !== 0) {
            mid = key; // 홀수 문자는 나중에 가운데에 한 번만 들어갑니다.
        }  

        // 개수의 절반만큼만 head에 추가 (사전순으로 차곡차곡 쌓임)
        head += key.repeat(Math.floor(count / 2));
    }

    const tail = head.split("").reverse().join("")

    console.log(head + mid + tail);
}

