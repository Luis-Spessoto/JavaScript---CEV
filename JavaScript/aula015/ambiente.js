var num = [5, 8, 2, 9, 3]

//num.length
num[5] = 5
num.push(6)

console.log(`Nosso vetor é o [${num}] e ele tem ${num.length} posições`)

//num.sort()

console.log(`O primeiro valor do vetor é ${num[0]} e ele em ordem é [${num.sort()}] `)

var pos = 0
while (pos < num.length) {
    console.log(num[pos])
    pos = pos + 1
}

console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-')

for (var pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}

console.log('-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-')

for(var pos in num){
    console.log(num[pos])
}


console.log(`Posição do valor 6: ${num.indexOf(6)}`)

