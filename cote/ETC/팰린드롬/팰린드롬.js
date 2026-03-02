
const input = "level"

let reverseInput = input.split("").reverse().join("")

if(reverseInput === input){
    console.log(1)
} else {
    console.log(0)
}

// 팰린드롬이란 앞으로 읽을 때와 거꾸로 읽을 때 똑같은 단어를 말한다.
// 팰린드롬: level, noon
// 첫째 줄에 단어가 주어진다. 단어의 길이는 1보다 크거나 같고, 100보다 작거나 같으며, 알파벳 소문자로만 이루어져 있다.
// input.reverse() === input
