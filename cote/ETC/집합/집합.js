const input = `26
add 1
add 2
check 1
check 2
check 3
remove 2
check 1
check 2
toggle 3
check 1
check 2
check 3
check 4
all
check 10
check 20
toggle 10
remove 20
check 10
check 20
empty
check 1
toggle 1
check 1
toggle 1
check 1`


// input 값을 배열로 slice(1)
// const [a, b] = inputArr[i].split(" ")
// let trigger = String(a)
// let num = Number(b)


const N = input.split('\n')[0]
const inputArr  = input.split('\n').slice(1)
let S = new Set


for(let i = 0; i < inputArr.length; i++){
    const [a, b] = inputArr[i].split(" ")
    let trigger = String(a)
    let x = Number(b)

    if(trigger === 'add'){
        S?.add(x)
        continue;
    }

    if(trigger === 'remove'){
        S?.delete(x)
        continue;
    }

    if(trigger === 'check'){
        if(S?.has(x)){
            console.log(1)
        } else {
            console.log(0)
        }
        continue;
    }

    if(trigger === 'toggle'){
        if(S?.has(x)){
            S?.delete(x)
        } else {
            S?.add(x)
        }
        continue;
    }

    if(trigger === 'all'){
        S = new Set(Array.from({length:20},(_, i) => i + 1))
        continue;
    }

    if(trigger === 'empty'){
        S.clear()
        continue;
    }
}


//handleIsDub 함수를 사용하여 S에 x가 이미 있거나 없는 경우의 엣지 케이스를 커버

// const handleIsDub = () => {
//    if(S.includes(num)){return true} else {false}
// }
//if(handleIsDub(num)){}
//

// add x: S에 x를 추가한다. (1 ≤ x ≤ 20) S에 x가 이미 있는 경우에는 연산을 무시한다.
// remove x: S에서 x를 제거한다. (1 ≤ x ≤ 20) S에 x가 없는 경우에는 연산을 무시한다.
// check x: S에 x가 있으면 1을, 없으면 0을 출력한다. (1 ≤ x ≤ 20)
// toggle x: S에 x가 있으면 x를 제거하고, 없으면 x를 추가한다. (1 ≤ x ≤ 20)
// all: S를 {1, 2, ..., 20} 으로 바꾼다.
// empty: S를 공집합으로 바꾼다.