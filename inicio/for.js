/* FOR CLÁSSICO */

for( let i = 0 ; i <= 20 ;i++){
    let pares = i % 2 === 0 ? 'par': 'ímpar'

    //console.log(i, pares)
}


/* FOR IN */

let frutas = ['Maçã','Uva', 'Banana','Melancia', 'Morango']

for ( let i in frutas){
    //console.log(frutas[i])
}


/* FOR OF */

// No caso do 'for of' o indíce já retorna como o resultado

let carros = ['celta','fusca','opala']

for( i of carros){
    //console.log(i)
}

/* FOR EACH */

let cor = ['verde','preto','azul']

cor.forEach(function(v){
    console.log(v)
})