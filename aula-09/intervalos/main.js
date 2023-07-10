const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');

function iniciarb(){
    console.log('foi')
};
function pausarb(){
    console.log('foi')
};
function zerarb(){
    console.log('foi')
};

function mostraHoras(){
    let hora = new Date();
    return hora.toLocaleTimeString('pt-BR',{ hour12:false});
}

const timer = setInterval(function(){
    console.log(mostraHoras());
},1000);

const intervalo = setTimeout(function(){
    clearInterval(timer);
},10000 );