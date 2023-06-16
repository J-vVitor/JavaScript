 let num = [0,9,6,7]

 num.sort()

 num.push(10)

 console.log(` O número 7 está na posição de número ${num.indexOf(7)} `)

 for( var posicao in num){
    console.log(`A posição ${posicao} tem o valor ${num[posicao]}`)
 }