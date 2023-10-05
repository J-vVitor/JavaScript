const nome = 'Luiza';
const sobrenome = 'Perez';
const idade = 20;
const peso = 68;
const altura = 1.57;
const anoAtual = 2023;

let imc;
let anoNascimento;

anoNascimento = anoAtual - idade

imc = peso / (altura * altura)

console.log(`${nome} ${sobrenome} tem ${idade} anos,
você nasceu no ano de ${anoNascimento},
pesa ${peso}kg 
tem ${altura} de altura.
Seu imc é igual a ${imc.toFixed(1)}`)