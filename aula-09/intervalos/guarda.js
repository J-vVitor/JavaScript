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