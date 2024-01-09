class Mamiferos{
    constructor(patas){
        this.patas = patas
    }
    
}

class animais extends Mamiferos{
    constructor(patas,raca){
        super(patas)
        this.raca = raca
    }
}

const lobo = new animais(4,'lobo')

const lobso = new Mamiferos(4,'lobo')

console.log(lobo)
console.log(lobso)