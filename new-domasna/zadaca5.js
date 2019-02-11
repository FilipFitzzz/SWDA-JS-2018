var vrednost = document.querySelector('#vrednost');
var valuta = document.querySelector('#valuta');
var button = document.querySelector('#convert');
var res = document.querySelector('#rezultat');

button.addEventListener('click', function(){
    switch(valuta.value) {
        case "evro": 
            res.innerHTML = "Конвертирано во МКД:  " + (parseInt(vrednost.value) * 61.5 + ' Денари');
        break;
        case "dolar": 
            res.innerHTML = "Конвертирано во МКД:  " + (parseInt(vrednost.value) * 44.5 + ' Денари');
        break;
    }
});