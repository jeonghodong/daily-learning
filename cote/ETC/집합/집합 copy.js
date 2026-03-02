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

// 키밸류 형태가 아니지만 해시형태로 new Set 만들어서 작업할 것 중복을 허용안하기에 적합함 키도 필요없고


const N = input.split('\n')[0]
const inputArr = input.split('\n').slice(1)

// console.log("inputArr",inputArr)
let S = new Set

for(let i = 0; i < inputArr.length; i++){
    const [a, b] = inputArr[i].split(" ")
    let trigger = String(a)
    let x = Number(b)


    if(trigger === 'add'){
        S.add(x)
        continue;
    }

    if(trigger === 'remove'){
        S.delete(x)
        continue;
    }

    if(trigger === 'check'){
        S.has(x) ? console.log(1) : console.log(0)
        continue;
    }

    if(trigger === 'toggle'){
        S.has(x) ? S.delete(x) : S.add(x)
        continue;
    }

    if(trigger === 'all'){
        S = new Set(Array.from({length: 20}, (_, i) => i + 1))
        continue;
    }

    if(trigger === 'empty'){
        S.clear()
        continue;
    }
}

