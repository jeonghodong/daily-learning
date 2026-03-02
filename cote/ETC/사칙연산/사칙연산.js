const input = '7 3'

const [A, B] = input.split(" ").map(Number)

console.log(`
${Math.floor(A + B)}
${Math.floor(A - B)}
${Math.floor(A * B)}
${Math.floor(A / B)}
${Math.floor(A % B)}
`)