
function result() {
    //take 

    let inputData=document.getElementById("inputText").value;
    document.getElementById('text').textContent=inputData;
    
    //valid age for ovte casting
    if (inputData>=18){
        alert("valid data");
    }
    else{
        alert("not valid");
    }

    let changeColor = document.getElementById("text");
    changeColor.style.color = "red";

    let bodycolor= document.getElementsByTagName("body")[0];
    bodycolor.style.backgroundColor = "blue";
}
let para= document.getElementById("paratext");
function changeTextColor() {
    para.style.backgroundColor ="#"+Math.floor(Math.random()*16777215).toString(16);
}
para.addEventListener('mouseover',changeTextColor);