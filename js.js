let display = document.getElementById('number');
function input_data(value){
    number.value += value;
}
function ket_qua(){
    let ketqua = eval(number.value)
    number.value = ketqua;
}
function Clear(){
document.getElementById('number').value = '';
}