function display(value){
    document.getElementById("inputID").value += value;
}
function calculate(){
    var result=document.getElementById("inputID").value;

    document.getElementById("inputID").value=eval(result);

}
function clearScreen(){
    document.getElementById("inputID").value="";
}