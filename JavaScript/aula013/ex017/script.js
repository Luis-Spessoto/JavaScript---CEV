function calcular() {
    var numb = document.getElementById('num')
    var numeral = Number(numb.value)
    var res = document.getElementById('res')
    var tab = document.getElementById('tab')

   

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
