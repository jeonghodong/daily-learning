const input = `8 8
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBBBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW`

const board = input.split('\n').slice(1)

console.log("board", board)

// 기준이 되는 체스판 패턴 생성
const whiteFirst = [
    "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW",
    "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW"
];
const blackFirst = [
    "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB",
    "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB"
];

let minCount = 64; // 8x8에서 나올 수 있는 최대 수정 횟수

