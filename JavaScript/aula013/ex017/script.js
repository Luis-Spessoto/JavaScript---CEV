function calcular() {
    var numb = document.getElementById('num')
    var numeral = Number(numb.value)
    var res = document.getElementById('res')
    var tab = document.getElementById('tab')

    //MEU JEITO DE FAZER, NAO CONSEGUI USAR O FOR
    /*
    var uno = document.getElementById('uno')
    var dos = document.getElementById('dos')
    var tre = document.getElementById('tre')
    var qua = document.getElementById('qua')
    var cin = document.getElementById('cin')
    var sex = document.getElementById('sex')
    var set = document.getElementById('set')
    var oto = document.getElementById('oto')
    var nov = document.getElementById('nov')
    var dez = document.getElementById('dez')
    if (numeral == 0 || numeral == '') {
        window.alert('ERROR! YOUR NUMBER HAS TO BE BIGGER THAN 0')
    } 
    if (numeral >! 0) {
        var multi1 = 1 
        var multi2 = 2 
        var multi3 = 3 
        var multi4 = 4
        var multi5 = 5 
        var multi6 = 6 
        var multi7 = 7 
        var multi8 = 8 
        var multi9 = 9 
        var multi10 = 10 
        var resultado1 = numeral * multi1
        var resultado2 = numeral * multi2
        var resultado3 = numeral * multi3
        var resultado4 = numeral * multi4
        var resultado5 = numeral * multi5
        var resultado6 = numeral * multi6
        var resultado7 = numeral * multi7
        var resultado8 = numeral * multi8
        var resultado9 = numeral * multi9
        var resultado10 = numeral * multi10
        uno.innerHTML = `01 x ${numeral} = ${resultado1}`
        dos.innerHTML = `02 x ${numeral} = ${resultado2}`
        tre.innerHTML = `03 x ${numeral} = ${resultado3}`
        qua.innerHTML = `04 x ${numeral} = ${resultado4}`
        cin.innerHTML = `05 x ${numeral} = ${resultado5}`
        sex.innerHTML = `06 x ${numeral} = ${resultado6}`
        set.innerHTML = `07 x ${numeral} = ${resultado7}`
        oto.innerHTML = `08 x ${numeral} = ${resultado8}`
        nov.innerHTML = `09 x ${numeral} = ${resultado9}`
        dez.innerHTML = `10 x ${numeral} = ${resultado10}`
    }
        */

    // JEITO DO GUANABARA

    if (numeral == 0 || numeral == '') {
        window.alert('ERROR! YOUR NUMBER HAS TO BE BIGGER THAN 0')
    } else {
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${numeral} x ${c} = ${numeral}`
            tab.appendChild(item)
            c = c + 1
        }
    }
}