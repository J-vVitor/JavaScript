const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');

iniciar.addEventListener('click', function(event){
    alert('iniciou!');

})

pausar.addEventListener('click',function(event){
    alert('Pausou!');

})

zerar.addEventListener('click',function(event){
    alert('Zerou!')

})

