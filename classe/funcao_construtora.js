function criarCachorro(nome,raca,patas){
    const cachorro = Object.create({})

    cachorro.nome = nome;
    cachorro.raca = raca;
    cachorro.patas = 4;

    return cachorro
}

const cachorro1 = criarCachorro('Duck','Vira Lata')

const cachorro2 = criarCachorro('Bob','Pastor Alemão')

console.log(cachorro1)
console.log(cachorro2)