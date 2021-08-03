function carregar (){
 var msg = document.getElementById('msg')
 var img = document.getElementById('imagem')
 var data = new Date()
 var hora = data.getHours()
 var minuto =data.getMinutes()
 msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
 if (hora >= 0 && hora < 12) {
     //Bom dia!
     img.src = 'img/imagemmanha.png'
 }else if (hora >=12 && hora <=18){
     //Boa tarde!
     img.src = 'img/imagemtarde.png'
 }else {
     //Boa noite!
     img.src = 'img/imagemnoite.png'
 }
     
}

