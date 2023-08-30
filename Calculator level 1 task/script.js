function clearScreen(){
    document.getElementById("result").value="";
}
function display(digit){
    document.getElementById("result").value += digit;
}
function calculate(){
    var temp = document.getElementById("result").value;
    var evaluate=eval(temp);
    document.getElementById("result").value = evaluate;
}
function deleteLastNum(){
    var currentValue = document.getElementById("result").value;
    if (currentValue.length > 0){
        currentValue = currentValue.substring(0 , currentValue.length - 1);
        document.getElementById("result").value = currentValue;
    }
}