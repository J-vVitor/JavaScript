function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const pessoa1 = new Pessoa('vitor' , 'Lima');

const pessoa2 = new Pessoa('joao' , 'pereira');

console.log(pessoa1.nome + " " + pessoa1.sobrenome)
console.log(pessoa2.nome + " " + pessoa2.sobrenome)