function carregar(){
    var msg = window.document.getElementById('text')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()

    var hora = 20

    msg.innerHTML = `Agora são ${hora} horas`

    if(hora > 0 && hora < 12 ){
        img.src='fotomanha.jpg'
        document.body.style.background ='#405d71'

    } else if (hora >= 12 && hora < 18){
        img.src = 'fototarde.jpg'
        document.body.style.background ='#F0A330'


    } else{
        img.src = 'fotonoite.jpg'

        document.body.style.background = '#021229'
    }
}