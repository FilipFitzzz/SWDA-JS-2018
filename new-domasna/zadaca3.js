function bmi() {
    var kg = document.getElementById('kg').value;
    var m = document.getElementById('height').value / 100;
    var res = document.getElementById('res');
    // console.log(kg);
    // console.log(m);
    // console.log(res);

    var calc = kg/(m*m);
    res.textContent = calc;

}