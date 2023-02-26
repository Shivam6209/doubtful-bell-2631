 let registerBtn=document.getElementById("register-btn");
 let inputEmail = document.getElementById("email");
 let inputPass=document.getElementById("password");
 let inputName = document.getElementById("name");
 let inputPhone=document.getElementById("phone");

 registerBtn.addEventListener("click",()=>{
    if(inputEmail.value==""||inputPass.value==""||inputPhone.value==""||inputName.value==""){
        alert("Please Fill All Detail First") 
       }
       else{
           alert("Welcome to QUICKSTORE Please login through given email & password")
       }
 })