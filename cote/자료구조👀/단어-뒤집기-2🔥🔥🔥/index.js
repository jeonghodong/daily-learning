// 리팩토링 해보자 이건 
// TODO: 백준 메모리 초과 해결

// const input = `baekjoon online judge`
const input = `<ab cd>ef gh<ij kl>`


const inputArr = input.split(" ")

let isStart = false 
let result = []

if(input.includes("<") || input.includes(">")){
    let reverseArr = []

    for(let item of input.split("")){
        if(item === '>'){
            isStart = true;
            result.push(item)
            continue;
        } 
        
        if(item === '<'){
            for(let item of reverseArr){
                result.push(item)    
            }
            isStart = false;
            result.push(item)
            continue;
        }

        if(isStart){
            reverseArr.push(item)
            continue;
        }

        result.push(item)
    }

} else {
    for(let item of inputArr){
        result.push(item.split("").reverse().join(""))
    }
}


if(input.includes("<") || input.includes(">")){
    console.log(result.join(""))
} else {
    console.log(result.join(" "))
}

