function verificar(){

    var anoatual = new Date()
    var ano = anoatual.getFullYear()
    var anonascimento = window.document.getElementById('ano')
    var msg = window.document.getElementById('resultado')
    var idade = ano - Number(anonascimento.value) // o valor recebido no input tem que ter a condição number, pois ele não vem convertido para número

    var sexo = window.document.getElementsByName('sex')
    var genero = '' //RECEBE UMA STRING VAZIA POIS ELA É MARCAVEL

    var img = window.document.getElementById('foto')


 if(anonascimento.value.length == 0 || anonascimento.value > ano ){
        alert('[Error] Verifique os valores digitados!')
    }

     if(sexo[0].checked){
        genero = 'Homem' //DIZ QUAL ITEM O USUARIO SELECIONOU!
        img.src = 'msexo.png'
        msg.innerHTML= `Detectamos que você é ${genero} e tem ${idade} anos !`
        
    }else if(sexo[1].checked) {
        genero = 'Mulher'
        img.src = 'feminino.png'
        msg.innerHTML= `Detectamos que você é ${genero} e tem ${idade} anos !`
    } else{
        genero ='indefinido'
        msg.innerHTML = `Você não especificou o seu sexo, e você tem ${idade} anos !`
    }


    msg.appendChild(img) //ADICIONAR ALGUM OBJETO NA TELA ( NESSE CASO UMA IMAGEM)




}