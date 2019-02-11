

function nameLength() {
    var name  = document.querySelector('#name').value;
    
    if(name.length <= 5){
        console.log('Кратко име');
    } else if(name.length >= 5 && name.length <= 8){
        console.log('Име со средна големина');
    } else if(name.length > 8){
        console.log('Долго име');
    }
}