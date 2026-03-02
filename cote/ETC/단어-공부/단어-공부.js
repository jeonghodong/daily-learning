


let inputLowerString = "zZa".toLowerCase()

let obj = {}

for(let i = 0; i < inputLowerString.length; i++){
    if(obj[inputLowerString[i]]){
        obj[inputLowerString[i]] += 1
    } else {
        obj[inputLowerString[i]] = 1
    }
}

let maxCount = 0;
let maxString = ''
let isDup = false

for(let key in obj){
    obj[key]
    if(obj[key] > maxCount){
        maxCount = obj[key] 
        maxString = key.toUpperCase()
    } else if(obj[key] ===  maxCount){
        isDup = true
    }
}

if(isDup){
    console.log("?")
}else{
    console.log(maxString)
}