
// 1. Да се направи механизам за пребарување на имиња.

var names = ['Pero', 'Janko', 'Stanko', 'Vanco', 'Elena', 'Vesna', 'Jana', 'Irena'];

function fName() {
    // console.log(name);
    var namesInput = document.getElementById("namesin");
    var enteredName = namesInput.value;
    // console.log(enteredName);

    // console.log( names.includes(enteredName) ); //ова можи да оди во if
    
    if(names.indexOf(enteredName) >= 0) {
        console.log(enteredName);
    } else {
        console.log('Тие се небитни');
    }
}