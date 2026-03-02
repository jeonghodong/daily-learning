const input = `3 // 색종이 수
3 7
15 7
5 2`

const inputArr = input.split('\n').slice(1)

const size = 100
const paper = Array.from({length: size}, () => Array(size).fill(0))


// console.log("inputArr", inputArr)

let totalCount = 0

for(let i = 0; i < inputArr.length; i++){
    // console.log("inputArr[i]",inputArr[i])

    const [startX, startY] = inputArr[i].split(" ").map(Number)

    // console.log("startX",startX)
    // console.log("startY",startY)

    for(let x = startX; x < startX + 10; x++){
        for(let y = startY; y < startY + 10; y++){
            if(paper[x][y] === 0){
                paper[x][y] = 1
                totalCount += 1
            } 
        }
    }
}

console.log("totalCount",totalCount)