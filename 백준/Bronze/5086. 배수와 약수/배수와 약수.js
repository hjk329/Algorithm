let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []

for(let i= 0; i < input.length -1; i++) {
    let [a,b] = input[i].split(' ').map(Number)
    if(b%a === 0) result.push('factor')
    else if(a%b === 0) result.push('multiple')
    else result.push('neither')
}

console.log(result.join('\n'))