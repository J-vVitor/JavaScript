function criarPessoa(nome,sobrenome){
    return{
        nome,
        sobrenome,
        falar: function(){
            return `${this.nome} ${sobrenome} está falando!`
        }
    }
}

const pessoa1 = criarPessoa('João','Vitor')

console.log(pessoa1.falar())