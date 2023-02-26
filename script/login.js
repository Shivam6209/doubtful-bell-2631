// let register = document.getElementById("register");
let inputEmail = document.getElementById("email");
let inputPass=document.getElementById("password");
let createAc=document.getElementById("login-btn");


createAc.addEventListener("click", () => {
    if(inputEmail.value==""||inputPass.value==""){
     alert("Please Fill All Detail First") 
    }
    else{
        alert("Welcome to QUICKSTORE")
    }
 
})