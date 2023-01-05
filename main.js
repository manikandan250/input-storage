let btn=document.getElementById("btn");
btn.addEventListener("click",myFunction);

function myFunction(){
let name=document.getElementById("name").value;
let password=document.getElementById("password").value;

localStorage.setItem("name",name);
localStorage.setItem("password",password);
}

let btn1=document.getElementById("btn1");
btn1.addEventListener("click",myFunctions);

function myFunctions(){
let name=document.getElementById("name").value;
let password=document.getElementById("password").value;

localStorage.removeItem("name",name);
localStorage.removeItem("password",password);
}

