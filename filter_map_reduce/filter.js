const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function numerosFiltrados(num){
    return num < 6 ? true: false
}
const filtrados = numeros.filter(numerosFiltrados)

//console.log(filtrados)


// -----------------

const pessoas = [
    {nome:'vitor' , idade: 20 },
    {nome:'Alexsandra' , idade: 18 },
    {nome:'julia' , idade: 11 },
    {nome: 'davi' , idade: 8 },
    {nome:'davina' , idade: 62 },
    {nome:'juliana' , idade:37 }
]
function filtrarNome(obj){
    return obj.nome.length < 5? true:false
}

const nomeFiltardo = pessoas.filter(filtrarNome)

console.log(nomeFiltardo)