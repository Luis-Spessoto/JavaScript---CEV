// <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png" width="25px" height="25px"></p>
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector(`div#res`)
    
if (fano.value.lenght == 0 || Number(fano.value) > ano) {
    alert('ERROR! Tente Novamente!')
}
else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    img.width = 350
    img.height = 300
    if (fsex[0].checked) {
        genero = "<strong>masculino</strong>"
        if (idade >= 0 && idade < 10) {
            //kid
            img.setAttribute('src', 'kid.png')
        }
        else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'jovem.png')
        } 
        else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'adulto.png')
        }
        else if (idade < 110) {
            //velho
            img.setAttribute('src', 'idoso.png')
        } 
        else if (idade > 110) {
            //morto
            img.setAttribute('src', 'esqueleto-humano.png')
        }
    } 
    else if (fsex[1].checked) {
        genero = '<Strong>feminino</strong>'
        if (idade >= 0 && idade < 10) {
            //kid
            img.setAttribute('src', 'kida.png')
        }
        else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'jovema.png')
        } 
        else if (idade < 50) {
            //adulta
            img.setAttribute('src', 'adulta.png')
        }
        else if (idade < 110) {
            //velha
            img.setAttribute('src', 'idosa.png')
        } 
        else if (idade > 110) {
            //morta
            img.setAttribute('src', 'esqueleto-humano.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `</br>Você é do gênero ${genero} e tem ${idade} anos.`
    res.appendChild(img)
}
}