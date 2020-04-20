
const numbersString = process.argv.slice(2)
const numbers = numbersString.map(n => Number(n));
const sum = numbers.reduce((acc, next) => acc + next, 0)

console.log(sum);