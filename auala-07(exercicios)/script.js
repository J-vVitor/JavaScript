function contagem(){
    //DEFINIDO AS VARIAVÉIS DO HTML
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    //VALOR NÃO PODE RECEBER 0 
    if(inicio.value == 0 || fim.value == 0 || passo.value ==0){
        alert('algo errado')
    }else{
        res.innerHTML = 'Contando:'
    }   

    //CONVERTENDO STRING PARA NÚMEROS
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    //CONDIÇÃO (SE)...
    for( var c = i; c<=f; c+=p){
        res.innerHTML += ` ${ c } `
    }
}